"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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

      // 2. Camera setup
      const getContainerDims = () => {
        const w = container.clientWidth || (window.innerWidth < 640 ? 260 : 420);
        const h = container.clientHeight || (window.innerWidth < 640 ? 325 : 525);
        return { w: Math.max(w, 200), h: Math.max(h, 250) };
      };

      const { w: initWidth, h: initHeight } = getContainerDims();
      const isMobile = window.innerWidth < 640;
      const fov = isMobile ? 44 : 39;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      camera.position.set(0, 0.18, isMobile ? 4.5 : 4.15);

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
      renderer.toneMappingExposure = 1.2;

      // 4. Lighting setup (Studio Key, Fill, and Rim)
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
      keyLight.position.set(3, 5, 4);
      scene.add(keyLight);

      const purpleRimLight = new THREE.PointLight(0x5b2ee8, 4.5, 12);
      purpleRimLight.position.set(2.8, 1.8, -1.0);
      scene.add(purpleRimLight);

      const orangeFillLight = new THREE.PointLight(0xff7a1a, 2.2, 10);
      orangeFillLight.position.set(-2.8, -0.5, 2.2);
      scene.add(orangeFillLight);

      const frontLight = new THREE.DirectionalLight(0xffffff, 0.9);
      frontLight.position.set(0, 0.5, 4.5);
      scene.add(frontLight);

      const groundLevel = -1.05;

      // 5. GREEN CARPET STUDIO FLOOR PLATFORM
      const stageGroup = new THREE.Group();
      scene.add(stageGroup);

      // --- A. GREEN CARPET PLATFORM ---
      const carpetRadius = 2.0;
      const carpetGeo = new THREE.CylinderGeometry(carpetRadius, carpetRadius + 0.08, 0.08, 48);
      const carpetMat = new THREE.MeshStandardMaterial({
        color: 0x22b14c, // Authentic Brand Studio Green
        roughness: 0.75, // Soft velvet carpet feel
        metalness: 0.08,
      });
      const carpetMesh = new THREE.Mesh(carpetGeo, carpetMat);
      carpetMesh.position.set(0, groundLevel - 0.04, 0);
      stageGroup.add(carpetMesh);

      // Carpet Border Trim (Subtle darker green velvet bevel)
      const trimGeo = new THREE.TorusGeometry(carpetRadius + 0.02, 0.02, 16, 48);
      const trimMat = new THREE.MeshBasicMaterial({ color: 0x168135 });
      const trimMesh = new THREE.Mesh(trimGeo, trimMat);
      trimMesh.rotation.x = Math.PI / 2;
      trimMesh.position.set(0, groundLevel - 0.04, 0);
      stageGroup.add(trimMesh);

      // --- B. DYNAMIC CONTACT SHADOW ON GREEN CARPET ---
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 128;
      shadowCanvas.height = 128;
      const ctx = shadowCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 60);
        grad.addColorStop(0, "rgba(0, 40, 10, 0.8)");
        grad.addColorStop(0.4, "rgba(0, 30, 8, 0.45)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
      const shadowGeo = new THREE.PlaneGeometry(1.6, 1.3);
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(0, groundLevel + 0.005, 0);
      scene.add(shadowMesh);

      // --- C. 3D STUDIO BACKDROP MODEL ---
      const backdropGroup = new THREE.Group();
      scene.add(backdropGroup);

      const setupBackdrop = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Scale backdrop model to frame the character nicely
        const targetHeight = 3.6;
        const scale = targetHeight / (size.y || 1);
        cloned.scale.set(scale, scale, scale);

        cloned.position.x = -center.x * scale;
        cloned.position.y = groundLevel - box.min.y * scale - 0.02;
        cloned.position.z = -center.z * scale - 0.35; // Positioned behind character

        backdropGroup.add(cloned);
      };

      // Load 3D Backdrop Model
      if (cachedBackdropScene) {
        setupBackdrop(cachedBackdropScene);
      } else {
        const backdropLoader = new GLTFLoader();
        backdropLoader.load(
          "/assets/studio-backdrop.glb",
          (gltf) => {
            if (isDisposed) return;
            cachedBackdropScene = gltf.scene;
            setupBackdrop(gltf.scene);
          },
          undefined,
          (err) => {
            console.warn("Backdrop GLB load error:", err);
          }
        );
      }

      // --- D. 3D MASCOT CHARACTER (Standing on green carpet) ---
      const mascotGroup = new THREE.Group();
      scene.add(mascotGroup);

      const setupModel = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const targetHeight = 2.18;
        const autoScale = targetHeight / (size.y || 1);
        cloned.scale.set(autoScale, autoScale, autoScale);

        // Lock shoes directly onto green carpet surface
        cloned.position.x = -center.x * autoScale;
        cloned.position.y = groundLevel - box.min.y * autoScale;
        cloned.position.z = -center.z * autoScale;

        mascotGroup.add(cloned);
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
          () => {
            loader.load(
              "/assets/mascot-3d.glb",
              (gltfFallback) => {
                if (isDisposed) return;
                cachedGLTFScene = gltfFallback.scene;
                setupModel(gltfFallback.scene);
              },
              undefined,
              (err) => {
                console.warn("3D mascot load error:", err);
              }
            );
          }
        );
      }

      // 6. Interactive Cursor Tracking (Mouse & Touch)
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
        targetRotY = normX * 0.5;
        targetRotX = normY * 0.16;
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
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseDrag, { passive: true });

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
      container.addEventListener("touchmove", handleTouchMove, { passive: true });

      // 7. Responsive Resize Observer
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const { w: newWidth, h: newHeight } = getContainerDims();
        if (newWidth > 0 && newHeight > 0) {
          const mobile = window.innerWidth < 640;
          camera.fov = mobile ? 44 : 39;
          camera.position.z = mobile ? 4.5 : 4.15;
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

      // 8. 60 FPS Render Loop
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

        // Subtle parallax movement on the 3D backdrop
        backdropGroup.rotation.y = THREE.MathUtils.lerp(
          backdropGroup.rotation.y,
          (targetRotY + dragRotY) * 0.25,
          0.05
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
      };
    } catch (err) {
      console.warn("WebGL initialization error:", err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-[440px] lg:min-h-[520px] aspect-[4/5] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      {/* 3D WebGL Canvas containing 3D Backdrop + Green Carpet + Interactive Character */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
};
