"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Mascot3DProps {
  className?: string;
}

// In-memory cache of the loaded GLTF object so client navigations load in 0ms
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

      // 2. Camera setup - Responsive FOV for mobile & desktop
      const isMobile = window.innerWidth < 640;
      const initWidth = container.clientWidth > 0 ? container.clientWidth : (isMobile ? 320 : 440);
      const initHeight = container.clientHeight > 0 ? container.clientHeight : (isMobile ? 400 : 520);
      const fov = isMobile ? 44 : 40;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      camera.position.set(0, 0.12, isMobile ? 4.4 : 4.2);

      // 3. High-performance renderer setup
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
      renderer.toneMappingExposure = 1.15;

      // 4. Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
      keyLight.position.set(4, 5, 4);
      scene.add(keyLight);

      const purpleRimLight = new THREE.PointLight(0x5b2ee8, 4.5, 10);
      purpleRimLight.position.set(-3.5, 2.5, -2);
      scene.add(purpleRimLight);

      const orangeFillLight = new THREE.PointLight(0xff7a1a, 2.0, 10);
      orangeFillLight.position.set(3, -1, 2);
      scene.add(orangeFillLight);

      const frontFillLight = new THREE.DirectionalLight(0xffffff, 0.8);
      frontFillLight.position.set(0, 0, 5);
      scene.add(frontFillLight);

      const groundLevel = -1.05;

      // 5. Mascot Pivot Group
      const mascotGroup = new THREE.Group();
      mascotGroup.position.set(0, 0, 0);
      scene.add(mascotGroup);

      // 6. Direct GLTF Loader (Pure 3D Only - No 2D image swaps)
      const setupModel = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        // Compute exact bounding box
        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const targetHeight = 2.22;
        const autoScale = targetHeight / (size.y || 1);
        cloned.scale.set(autoScale, autoScale, autoScale);

        // Lock shoes onto green facet floor level
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
          "/assets/mascot-3d.glb",
          (gltf) => {
            if (isDisposed) return;
            const model = gltf.scene;
            cachedGLTFScene = model;
            setupModel(model);
          },
          undefined,
          (error) => {
            console.warn("3D mascot load error:", error);
          }
        );
      }

      // 7. Clean Interactive Mouse & Touch Cursor Tracking
      let targetRotY = 0;
      let targetRotX = 0;
      let isInteracting = false;
      let prevPointerX = 0;
      let dragRotY = 0;

      // Mouse movements
      const handleMouseMove = (e: MouseEvent) => {
        const windowWidth = window.innerWidth || 1920;
        const windowHeight = window.innerHeight || 1080;
        const normX = (e.clientX / windowWidth) * 2 - 1;
        const normY = (e.clientY / windowHeight) * 2 - 1;

        targetRotY = normX * 0.45;
        targetRotX = normY * 0.18;
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

      // Touch gestures for Mobile & Tablets
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          isInteracting = true;
          prevPointerX = e.touches[0].clientX;
          const windowWidth = window.innerWidth || 360;
          const windowHeight = window.innerHeight || 640;
          const normX = (e.touches[0].clientX / windowWidth) * 2 - 1;
          const normY = (e.touches[0].clientY / windowHeight) * 2 - 1;
          targetRotY = normX * 0.45;
          targetRotX = normY * 0.18;
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
        targetRotX = normY * 0.18;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseDrag, { passive: true });

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
      container.addEventListener("touchmove", handleTouchMove, { passive: true });

      // 8. Responsive Resize & Orientation Observer
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        if (newWidth > 0 && newHeight > 0) {
          const mobile = window.innerWidth < 640;
          camera.fov = mobile ? 44 : 40;
          camera.position.z = mobile ? 4.4 : 4.2;
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

      // 9. Direct 60 FPS Render Loop (Pure 3D Canvas)
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

      // 10. Cleanup
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
      className={`relative w-full h-full aspect-[4/5] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full object-contain pointer-events-auto" />
    </div>
  );
};
