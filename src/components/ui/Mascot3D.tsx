"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Mascot3DProps {
  className?: string;
}

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
        const width = typeof window !== "undefined" ? window.innerWidth : 1200;
        const w = container.clientWidth || (width < 640 ? 340 : width < 1024 ? 480 : width < 1440 ? 600 : 700);
        const h = container.clientHeight || (width < 640 ? 400 : width < 1024 ? 560 : width < 1440 ? 700 : 800);
        return { w: Math.max(w, 260), h: Math.max(h, 320) };
      };

      const { w: initWidth, h: initHeight } = getContainerDims();
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
      const isMobile = screenWidth < 640;
      const isTablet = screenWidth >= 640 && screenWidth < 1024;
      const isLaptop = screenWidth >= 1024 && screenWidth < 1440;

      const fov = isMobile ? 41 : isTablet ? 41 : isLaptop ? 42 : 42;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      const camZ = isMobile ? 3.55 : isTablet ? 3.75 : isLaptop ? 3.95 : 4.1;
      camera.position.set(0, 0.04, camZ);

      // 3. WebGL Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(initWidth, initHeight, false);
      renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2));
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

      const groundLevel = -1.1;

      // 5. Mascot Pivot Group
      const mascotGroup = new THREE.Group();
      scene.add(mascotGroup);

      // 6. Model Attachment Logic
      const setupModel = (model: THREE.Group) => {
        if (isDisposed) return;
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const targetHeight = 2.45;
        const autoScale = targetHeight / (size.y || 1);
        model.scale.set(autoScale, autoScale, autoScale);

        model.position.x = -center.x * autoScale;
        model.position.y = groundLevel - box.min.y * autoScale;
        model.position.z = -center.z * autoScale;

        mascotGroup.add(model);
      };

      const loader = new GLTFLoader();
      loader.load(
        "/assets/mascot-3d-fast.glb",
        (gltf) => {
          if (isDisposed) return;
          setupModel(gltf.scene);
        },
        undefined,
        () => {
          // Fallback to standard GLB if fast fails
          loader.load(
            "/assets/mascot-3d.glb",
            (gltfFallback) => {
              if (isDisposed) return;
              setupModel(gltfFallback.scene);
            },
            undefined,
            (err) => {
              console.warn("3D mascot load error:", err);
            }
          );
        }
      );

      // 7. Cursor / Touch Tracking
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
        const deltaX = e.touches[0].clientX - prevPointerX;
        prevPointerX = e.touches[0].clientX;
        dragRotY += deltaX * 0.012;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseDrag, { passive: true });

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
      container.addEventListener("touchmove", handleTouchMove, { passive: true });

      // 8. Responsive Window & Container Resize
      const handleResize = () => {
        if (!container || !renderer || isDisposed) return;
        const { w: newWidth, h: newHeight } = getContainerDims();
        if (newWidth > 0 && newHeight > 0) {
          const width = window.innerWidth || 1200;
          const mobile = width < 640;
          const tablet = width >= 640 && width < 1024;
          const laptop = width >= 1024 && width < 1440;
          camera.fov = mobile ? 41 : tablet ? 41 : laptop ? 42 : 42;
          camera.position.z = mobile ? 3.55 : tablet ? 3.75 : laptop ? 3.95 : 4.1;
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

      // 9. Render Loop
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
      className={`relative w-full h-full min-h-[340px] sm:min-h-[440px] md:min-h-[540px] lg:min-h-[620px] xl:min-h-[680px] aspect-[4/5] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
};
