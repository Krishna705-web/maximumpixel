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

      // 2. Camera setup - Optimized closer framing for Phone, Tablet, Laptop, and PC
      const getContainerDims = () => {
        const width = window.innerWidth || 1200;
        const w = container.clientWidth || (width < 640 ? 320 : width < 1024 ? 440 : width < 1440 ? 560 : 640);
        const h = container.clientHeight || (width < 640 ? 400 : width < 1024 ? 540 : width < 1440 ? 660 : 760);
        return { w: Math.max(w, 240), h: Math.max(h, 300) };
      };

      const { w: initWidth, h: initHeight } = getContainerDims();
      const screenWidth = window.innerWidth || 1200;
      const isMobile = screenWidth < 640;
      const isTablet = screenWidth >= 640 && screenWidth < 1024;
      const isLaptop = screenWidth >= 1024 && screenWidth < 1440;
      
      // Closer camera zoom for all screens so character stands large and prominent
      const fov = isMobile ? 36 : isTablet ? 37 : isLaptop ? 38 : 39;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      const camZ = isMobile ? 3.25 : isTablet ? 3.45 : isLaptop ? 3.65 : 3.8;
      camera.position.set(0, 0.06, camZ);

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
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
      keyLight.position.set(4, 5, 4);
      scene.add(keyLight);

      const purpleRimLight = new THREE.PointLight(0x5b2ee8, 5.5, 12);
      purpleRimLight.position.set(-3.5, 2.5, -2);
      scene.add(purpleRimLight);

      const orangeFillLight = new THREE.PointLight(0xff7a1a, 2.4, 10);
      orangeFillLight.position.set(3, -1, 2);
      scene.add(orangeFillLight);

      const frontFillLight = new THREE.DirectionalLight(0xffffff, 0.95);
      frontFillLight.position.set(0, 0, 5);
      scene.add(frontFillLight);

      const groundLevel = -1.15;

      // 5. Mascot Pivot Group
      const mascotGroup = new THREE.Group();
      scene.add(mascotGroup);

      // 6. Direct GLTF Loader (Prominent scale for large display impact)
      const setupModel = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const targetHeight = 2.48;
        const autoScale = targetHeight / (size.y || 1);
        cloned.scale.set(autoScale, autoScale, autoScale);

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

      // 7. Interactive Cursor Tracking (Mouse & Touch)
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
        targetRotX = normY * 0.18;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseDrag, { passive: true });

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
      container.addEventListener("touchmove", handleTouchMove, { passive: true });

      // 8. Responsive Resize Observer across all breakpoints
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const { w: newWidth, h: newHeight } = getContainerDims();
        if (newWidth > 0 && newHeight > 0) {
          const width = window.innerWidth || 1200;
          const mobile = width < 640;
          const tablet = width >= 640 && width < 1024;
          const laptop = width >= 1024 && width < 1440;
          camera.fov = mobile ? 36 : tablet ? 37 : laptop ? 38 : 39;
          camera.position.z = mobile ? 3.25 : tablet ? 3.45 : laptop ? 3.65 : 3.8;
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

      // 9. 60 FPS Render Loop
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
      };
    } catch (err) {
      console.warn("WebGL initialization error:", err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[600px] xl:min-h-[660px] aspect-[4/5] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
};
