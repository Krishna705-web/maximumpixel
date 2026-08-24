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
      const fov = isMobile ? 44 : 39;
      const camera = new THREE.PerspectiveCamera(fov, initWidth / initHeight, 0.1, 100);
      camera.position.set(0.05, 0.45, isMobile ? 4.7 : 4.4);
      camera.lookAt(0, -0.15, 0);

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
      renderer.toneMappingExposure = 1.25;

      // 4. Studio Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      // Key light from top-left
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
      keyLight.position.set(2.5, 6, 4);
      scene.add(keyLight);

      // Neon purple rim light hitting the right wall & character edge
      const purpleWallLight = new THREE.PointLight(0x7c4dff, 6.0, 10);
      purpleWallLight.position.set(1.8, 1.2, 0.2);
      scene.add(purpleWallLight);

      // Warm orange fill light from lower left
      const orangeFillLight = new THREE.PointLight(0xff7a1a, 2.5, 8);
      orangeFillLight.position.set(-2.5, -0.2, 2.5);
      scene.add(orangeFillLight);

      const frontFill = new THREE.DirectionalLight(0xffffff, 0.8);
      frontFill.position.set(0, 1, 5);
      scene.add(frontFill);

      const groundLevel = -1.0;

      // 5. 3D Studio Environment: Seamless Studio Floor Platform + Clearly Visible Right Wall
      const studioStage = new THREE.Group();
      scene.add(studioStage);

      // --- A. SEAMLESS 3D STUDIO FLOOR PODIUM (No hard cutting edges) ---
      const platformRadius = 2.1;
      const platformHeight = 0.18;
      const platformGeo = new THREE.CylinderGeometry(
        platformRadius,
        platformRadius + 0.12,
        platformHeight,
        48
      );
      const platformMat = new THREE.MeshStandardMaterial({
        color: 0x14141a,
        roughness: 0.3,
        metalness: 0.4,
      });
      const platformMesh = new THREE.Mesh(platformGeo, platformMat);
      platformMesh.position.set(0, groundLevel - platformHeight / 2, 0);
      studioStage.add(platformMesh);

      // Glowing Neon Base Rim around the studio platform
      const baseRimGeo = new THREE.TorusGeometry(platformRadius + 0.05, 0.025, 16, 64);
      const baseRimMat = new THREE.MeshBasicMaterial({
        color: 0x5b2ee8,
      });
      const baseRimMesh = new THREE.Mesh(baseRimGeo, baseRimMat);
      baseRimMesh.rotation.x = Math.PI / 2;
      baseRimMesh.position.set(0, groundLevel - platformHeight, 0);
      studioStage.add(baseRimMesh);

      // Subtle Spotlight Ring on the floor
      const ringGeo = new THREE.RingGeometry(0.7, 1.4, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x7c4dff,
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.set(0, groundLevel + 0.002, 0);
      studioStage.add(ringMesh);

      // --- B. CLEARLY VISIBLE RIGHT STUDIO WALL ---
      const rightWallGroup = new THREE.Group();
      // Positioned on the right and angled nicely toward camera view
      rightWallGroup.position.set(1.35, groundLevel + 1.5, -0.3);
      rightWallGroup.rotation.y = -Math.PI * 0.28; // ~50 degrees facing camera

      // Main Right Studio Wall Panel
      const wallGeo = new THREE.BoxGeometry(0.12, 3.2, 3.4);
      const wallMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a24,
        roughness: 0.5,
        metalness: 0.3,
      });
      const wallMesh = new THREE.Mesh(wallGeo, wallMat);
      rightWallGroup.add(wallMesh);

      // Studio Acoustic Vertical Slats on the Right Wall (Distinct & High Contrast)
      const slatMat = new THREE.MeshStandardMaterial({
        color: 0x2a2a38,
        roughness: 0.35,
        metalness: 0.45,
      });
      for (let i = -1.35; i <= 1.35; i += 0.26) {
        const slatGeo = new THREE.BoxGeometry(0.06, 3.0, 0.11);
        const slatMesh = new THREE.Mesh(slatGeo, slatMat);
        slatMesh.position.set(-0.08, 0, i);
        rightWallGroup.add(slatMesh);
      }

      // Vertical Accent Neon Tube 1 (Studio Purple)
      const neon1Geo = new THREE.CylinderGeometry(0.02, 0.02, 3.0, 16);
      const neon1Mat = new THREE.MeshBasicMaterial({ color: 0x9d4edd });
      const neon1Mesh = new THREE.Mesh(neon1Geo, neon1Mat);
      neon1Mesh.position.set(-0.11, 0, -1.4);
      rightWallGroup.add(neon1Mesh);

      // Vertical Accent Neon Tube 2 (Studio Warm Glow)
      const neon2Geo = new THREE.CylinderGeometry(0.015, 0.015, 3.0, 16);
      const neon2Mat = new THREE.MeshBasicMaterial({ color: 0xff7a1a });
      const neon2Mesh = new THREE.Mesh(neon2Geo, neon2Mat);
      neon2Mesh.position.set(-0.11, 0, 1.4);
      rightWallGroup.add(neon2Mesh);

      studioStage.add(rightWallGroup);

      // --- C. DYNAMIC CONTACT SHADOW ON FLOOR ---
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 128;
      shadowCanvas.height = 128;
      const ctx = shadowCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 60);
        grad.addColorStop(0, "rgba(0, 0, 0, 0.85)");
        grad.addColorStop(0.4, "rgba(0, 0, 0, 0.5)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
      const shadowGeo = new THREE.PlaneGeometry(1.6, 1.3);
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

      // 6. Mascot Pivot Group (Standing firmly on floor)
      const mascotGroup = new THREE.Group();
      scene.add(mascotGroup);

      const setupModel = (model: THREE.Group) => {
        if (isDisposed) return;
        const cloned = model.clone(true);

        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const targetHeight = 2.15;
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

      // 7. Interactive Hover Movement on the Floor Platform
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

        // Move character within platform bounds & turn to face pointer
        targetPosX = normX * 0.32;
        targetPosZ = normY * 0.22;
        targetRotY = normX * 0.55;
        targetRotX = normY * 0.12;
        targetTiltZ = -normX * 0.04;
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
        targetPosX = normX * 0.32;
        targetPosZ = normY * 0.22;
        targetRotY = normX * 0.55;
        targetRotX = normY * 0.12;
        targetTiltZ = -normX * 0.04;
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
          camera.fov = mobile ? 44 : 39;
          camera.position.z = mobile ? 4.7 : 4.4;
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

        // Slide Mascot on Floor
        mascotGroup.position.x = THREE.MathUtils.lerp(mascotGroup.position.x, targetPosX, 0.07);
        mascotGroup.position.z = THREE.MathUtils.lerp(mascotGroup.position.z, targetPosZ, 0.07);

        // Rotate and Lean
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

        // Dynamic Contact Shadow follows mascot on floor
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
      className={`relative w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-[440px] lg:min-h-[520px] aspect-[4/5] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
};
