"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Mascot3DProps {
  className?: string;
}

let cachedGLTFScene: THREE.Group | null = null;

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

      // 2. Camera setup - Isometric Studio Perspective
      const getContainerDims = () => {
        const w = container.clientWidth || (window.innerWidth < 640 ? 260 : 420);
        const h = container.clientHeight || (window.innerWidth < 640 ? 325 : 525);
        return { w: Math.max(w, 200), h: Math.max(h, 250) };
      };

      const { w: initWidth, h: initHeight } = getContainerDims();
      const isMobile = window.innerWidth < 640;
      const fov = isMobile ? 42 : 38;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      camera.position.set(0.15, 0.25, isMobile ? 4.6 : 4.3);

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

      // 4. Studio Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      // Key light from top-left
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
      keyLight.position.set(3, 5, 4);
      scene.add(keyLight);

      // Neon purple rim light hitting the right wall & character edge
      const purpleRimLight = new THREE.PointLight(0x5b2ee8, 5.0, 12);
      purpleRimLight.position.set(2.5, 1.5, -0.5);
      scene.add(purpleRimLight);

      // Warm orange fill light from front-bottom
      const orangeFillLight = new THREE.PointLight(0xff7a1a, 2.2, 10);
      orangeFillLight.position.set(-2.5, -0.5, 2.5);
      scene.add(orangeFillLight);

      const frontLight = new THREE.DirectionalLight(0xffffff, 0.7);
      frontLight.position.set(0, 1, 5);
      scene.add(frontLight);

      const groundLevel = -1.05;

      // 5. 3D Studio Environment: Floor + Right Studio Wall
      const studioStage = new THREE.Group();
      scene.add(studioStage);

      // --- A. STUDIO FLOOR PLANE ---
      const floorGeo = new THREE.PlaneGeometry(6, 6);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x111115,
        roughness: 0.35,
        metalness: 0.25,
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      floorMesh.rotation.x = -Math.PI / 2;
      floorMesh.position.set(0, groundLevel, 0);
      studioStage.add(floorMesh);

      // Floor spotlight ring highlight
      const ringGeo = new THREE.RingGeometry(0.8, 1.3, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x5b2ee8,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.set(0, groundLevel + 0.002, 0);
      studioStage.add(ringMesh);

      // --- B. RIGHT STUDIO WALL ---
      const rightWallGroup = new THREE.Group();
      rightWallGroup.position.set(1.6, groundLevel + 1.6, -0.2);
      rightWallGroup.rotation.y = -Math.PI / 6; // Angled 30 deg inward

      // Main Right Wall Panel
      const wallGeo = new THREE.BoxGeometry(0.1, 3.4, 3.8);
      const wallMat = new THREE.MeshStandardMaterial({
        color: 0x16161c,
        roughness: 0.6,
        metalness: 0.2,
      });
      const wallMesh = new THREE.Mesh(wallGeo, wallMat);
      rightWallGroup.add(wallMesh);

      // Studio Acoustic Vertical Slats on the Right Wall
      const slatMat = new THREE.MeshStandardMaterial({
        color: 0x22222c,
        roughness: 0.4,
        metalness: 0.3,
      });
      for (let i = -1.5; i <= 1.5; i += 0.28) {
        const slatGeo = new THREE.BoxGeometry(0.04, 3.2, 0.12);
        const slatMesh = new THREE.Mesh(slatGeo, slatMat);
        slatMesh.position.set(-0.06, 0, i);
        rightWallGroup.add(slatMesh);
      }

      // Vertical Neon LED Light Strip on the Right Wall edge
      const neonGeo = new THREE.BoxGeometry(0.04, 3.2, 0.05);
      const neonMat = new THREE.MeshBasicMaterial({
        color: 0x7c4dff,
      });
      const neonMesh = new THREE.Mesh(neonGeo, neonMat);
      neonMesh.position.set(-0.08, 0, -1.6);
      rightWallGroup.add(neonMesh);

      studioStage.add(rightWallGroup);

      // --- C. DYNAMIC CONTACT SHADOW ---
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 128;
      shadowCanvas.height = 128;
      const ctx = shadowCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 60);
        grad.addColorStop(0, "rgba(0, 0, 0, 0.75)");
        grad.addColorStop(0.4, "rgba(0, 0, 0, 0.45)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
      const shadowGeo = new THREE.PlaneGeometry(1.5, 1.2);
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(0, groundLevel + 0.005, 0);
      scene.add(shadowMesh);

      // 6. Mascot Pivot Group (Positioned on floor)
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

        // Lock feet precisely to ground level
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

      // 7. Interactive Hover Movement on the Floor
      let targetRotY = 0;
      let targetRotX = 0;
      let targetPosX = 0;
      let targetPosZ = 0;
      let targetTiltZ = 0;
      let isInteracting = false;
      let prevPointerX = 0;
      let dragRotY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const windowWidth = window.innerWidth || 1920;
        const windowHeight = window.innerHeight || 1080;
        const normX = (e.clientX / windowWidth) * 2 - 1;
        const normY = (e.clientY / windowHeight) * 2 - 1;

        // Character slides on floor and turns to face cursor
        targetPosX = normX * 0.35;
        targetPosZ = normY * 0.25;
        targetRotY = normX * 0.55;
        targetRotX = normY * 0.15;
        targetTiltZ = -normX * 0.05; // Gentle body lean
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
        targetPosX = normX * 0.35;
        targetPosZ = normY * 0.25;
        targetRotY = normX * 0.55;
        targetRotX = normY * 0.15;
        targetTiltZ = -normX * 0.05;
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
          camera.fov = mobile ? 42 : 38;
          camera.position.z = mobile ? 4.6 : 4.3;
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

      // 9. Smooth 60 FPS Floor Movement & Shadow Tracking
      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        // Interpolate Mascot Position on the floor
        mascotGroup.position.x = THREE.MathUtils.lerp(mascotGroup.position.x, targetPosX, 0.07);
        mascotGroup.position.z = THREE.MathUtils.lerp(mascotGroup.position.z, targetPosZ, 0.07);

        // Interpolate Rotation & Lean
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
        mascotGroup.rotation.z = THREE.MathUtils.lerp(
          mascotGroup.rotation.z,
          targetTiltZ,
          0.08
        );

        // Keep shadow locked right beneath the mascot on the floor
        shadowMesh.position.x = mascotGroup.position.x;
        shadowMesh.position.z = mascotGroup.position.z;
        shadowMesh.rotation.z = -mascotGroup.rotation.y * 0.4;

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
      className={`relative w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px] aspect-[4/5] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
};
