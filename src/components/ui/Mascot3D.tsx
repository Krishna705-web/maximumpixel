"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

interface Mascot3DProps {
  className?: string;
}

let cachedGLTFScene: THREE.Group | null = null;
let cachedBackdropScene: THREE.Group | null = null;

export const Mascot3D: React.FC<Mascot3DProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    let isDisposed = false;
    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      // 1. Scene setup
      const scene = new THREE.Scene();

      // 2. Camera setup - Framed to capture the full mirrored studio scene
      const getContainerDims = () => {
        const w = container.clientWidth || (window.innerWidth < 640 ? 320 : 560);
        const h = container.clientHeight || (window.innerWidth < 640 ? 200 : 350);
        return { w: Math.max(w, 240), h: Math.max(h, 150) };
      };

      const { w: initWidth, h: initHeight } = getContainerDims();
      const isMobile = window.innerWidth < 640;
      const fov = isMobile ? 38 : 34;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      camera.position.set(-0.02, 0.04, isMobile ? 1.55 : 1.42);
      camera.lookAt(-0.02, 0.01, 0);

      // 3. Renderer setup
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(initWidth, initHeight, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;

      // 4. Studio Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
      keyLight.position.set(-2, 4, 3);
      scene.add(keyLight);

      const purpleRimLight = new THREE.PointLight(0x9d4edd, 4.5, 8);
      purpleRimLight.position.set(1.5, 0.8, -0.2);
      scene.add(purpleRimLight);

      const orangeFillLight = new THREE.PointLight(0xff9e00, 2.8, 8);
      orangeFillLight.position.set(-1.5, 0.2, 1.0);
      scene.add(orangeFillLight);

      const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
      frontLight.position.set(0, 0.5, 3.5);
      scene.add(frontLight);

      // 5. STATIC 3D STUDIO BACKDROP (Mirrored: Desk on Right Side, Shelf on Left Side)
      const backdropGroup = new THREE.Group();
      scene.add(backdropGroup);

      const setupBackdrop = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        cloned.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            if (mesh.material) {
              const fixMat = (m: THREE.Material) => {
                m.side = THREE.DoubleSide;
                if ((m as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
                  const std = m as THREE.MeshStandardMaterial;
                  std.metalness = Math.min(std.metalness || 0, 0.15);
                  std.roughness = Math.max(std.roughness || 0.4, 0.55);
                }
              };
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach(fixMat);
              } else {
                fixMat(mesh.material);
              }
            }
          }
        });

        // Mirror horizontally so Computer Desk is on the RIGHT side
        cloned.position.set(0, 0, 0);
        cloned.scale.set(-1, 1, 1);

        backdropGroup.add(cloned);
      };

      // Fast Draco Loader for ultra-compressed backdrop (6MB)
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");

      const backdropLoader = new GLTFLoader();
      backdropLoader.setDRACOLoader(dracoLoader);

      if (cachedBackdropScene) {
        setupBackdrop(cachedBackdropScene);
      } else {
        backdropLoader.load(
          "/assets/studio-backdrop-ultra.glb",
          (gltf) => {
            if (isDisposed) return;
            cachedBackdropScene = gltf.scene;
            setupBackdrop(gltf.scene);
          },
          undefined,
          () => {
            // Fallback to fast GLB if needed
            backdropLoader.load(
              "/assets/studio-backdrop-fast.glb",
              (gltfFallback) => {
                if (isDisposed) return;
                cachedBackdropScene = gltfFallback.scene;
                setupBackdrop(gltfFallback.scene);
              },
              undefined,
              (err) => {
                console.warn("Backdrop GLB load error:", err);
              }
            );
          }
        );
      }

      // --- DYNAMIC CONTACT SHADOW LOCKED UNDER FEET ---
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 128;
      shadowCanvas.height = 128;
      const ctx = shadowCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 58);
        grad.addColorStop(0, "rgba(0, 10, 0, 0.95)");
        grad.addColorStop(0.35, "rgba(0, 15, 5, 0.6)");
        grad.addColorStop(0.7, "rgba(0, 0, 0, 0.2)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
      const shadowGeo = new THREE.PlaneGeometry(0.55, 0.42);
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      // Positioned right under character shoes on the floor
      shadowMesh.position.set(-0.16, -0.428, 0.08);
      scene.add(shadowMesh);

      // 6. INTERACTIVE 3D MASCOT CHARACTER (Firmly Grounded on the Floor)
      const mascotGroup = new THREE.Group();
      scene.add(mascotGroup);

      const setupModel = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Proportionate scale to match character in reference studio image
        const targetHeight = 0.68;
        const autoScale = targetHeight / (size.y || 1);
        cloned.scale.set(autoScale, autoScale, autoScale);

        // Center pivot at character's base/feet
        cloned.position.x = -center.x * autoScale;
        cloned.position.y = -box.min.y * autoScale;
        cloned.position.z = -center.z * autoScale;

        mascotGroup.add(cloned);

        // Ground feet firmly on the studio floor (zero gap, firmly standing)
        mascotGroup.position.set(-0.16, -0.425, 0.08);
      };

      if (cachedGLTFScene) {
        setupModel(cachedGLTFScene);
      } else {
        const loader = new GLTFLoader();
        loader.load(
          "/assets/mascot-3d-fast.glb",
          (gltf) => {
            if (isDisposed) return;
            cachedGLTFScene = gltf.scene;
            setupModel(gltf.scene);
          },
          undefined,
          (err) => {
            console.warn("3D mascot load error:", err);
          }
        );
      }

      // 7. Interactive Hover Cursor Tracking (Affects ONLY the Mascot Character)
      let targetRotY = 0;
      let targetRotX = 0;
      let isInteracting = false;
      let prevPointerX = 0;
      let dragRotY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const windowWidth = window.innerWidth || 1920;
        const windowHeight = window.innerHeight || 1080;
        const normX = (e.clientX / windowWidth) * 2 - 1;
        const normY = (e.clientY / windowHeight) * 2 - 1;
        targetRotY = normX * 0.45;
        targetRotX = normY * 0.14;
      };

      const handleMouseDown = (e: MouseEvent) => {
        isInteracting = true;
        prevPointerX = e.clientX;
      };

      const handleMouseUp = () => {
        isInteracting = false;
      };

      const handleMouseDrag = (e: MouseEvent) => {
        if (!isInteracting) return;
        const deltaX = e.clientX - prevPointerX;
        prevPointerX = e.clientX;
        dragRotY += deltaX * 0.012;
      };

      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          isInteracting = true;
          prevPointerX = e.touches[0].clientX;
        }
      };

      const handleTouchEnd = () => {
        isInteracting = false;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!isInteracting || e.touches.length === 0) return;
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - prevPointerX;
        prevPointerX = currentX;
        dragRotY += deltaX * 0.015;

        const windowWidth = window.innerWidth || 360;
        const windowHeight = window.innerHeight || 640;
        const normX = (currentX / windowWidth) * 2 - 1;
        const normY = (e.touches[0].clientY / windowHeight) * 2 - 1;
        targetRotY = normX * 0.45;
        targetRotX = normY * 0.14;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseDrag, { passive: true });

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
      container.addEventListener("touchmove", handleTouchMove, { passive: true });

      // 8. Responsive Resize Observer
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const { w: newWidth, h: newHeight } = getContainerDims();
        if (newWidth > 0 && newHeight > 0) {
          const mobile = window.innerWidth < 640;
          camera.fov = mobile ? 38 : 34;
          camera.position.z = mobile ? 1.55 : 1.42;
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight, false);
        }
      };

      let resizeObserver: ResizeObserver | null = null;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);
      }
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);

      // 9. 60 FPS Render Loop (ONLY Character Rotates, Backdrop is STATIC)
      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        mascotGroup.rotation.y = THREE.MathUtils.lerp(
          mascotGroup.rotation.y,
          targetRotY + dragRotY,
          0.08
        );
        mascotGroup.rotation.x = THREE.MathUtils.lerp(
          mascotGroup.rotation.x,
          targetRotX,
          0.08
        );

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseDrag);
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
        container.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
        if (renderer) {
          renderer.dispose();
        }
        dracoLoader.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization error:", err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/9] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
};
