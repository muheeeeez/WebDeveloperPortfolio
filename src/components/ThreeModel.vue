<template>
  <div class="three-container">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="error" class="error-message">
      Failed to load 3D model: {{ error }}
    </div>
    <div ref="threeContainer" class="w-full h-full"></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import modelPath from "../img/muiz.glb";

export default {
  name: "ThreeModel",
  setup() {
    const threeContainer = ref(null);
    const loading = ref(true);
    const error = ref(null);
    let scene, camera, renderer, model, controls, mixer, clock;
    let animationMixers = [];

    const initThree = () => {
      // Scene setup with basic environment
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf5f5f5);

      // Camera with standard settings
      camera = new THREE.PerspectiveCamera(
        60, // Wide field of view
        threeContainer.value.clientWidth / threeContainer.value.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 3); // Default position
      camera.lookAt(0, 0, 0);

      // Basic renderer setup
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false, // Full background
      });
      renderer.setSize(
        threeContainer.value.clientWidth,
        threeContainer.value.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      threeContainer.value.appendChild(renderer.domElement);

      // Simple controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = true; // Enable zoom for debugging
      controls.enablePan = true; // Enable pan for debugging
      controls.target.set(0, 0, 0);

      // Basic lighting - bright and clear
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      clock = new THREE.Clock();

      // Load 3D model with comprehensive error handling
      const loader = new GLTFLoader();
      console.log("Loading model from:", modelPath);

      loader.load(
        modelPath,
        function (gltf) {
          model = gltf.scene;
          console.log("Model loaded successfully:", model);

          // Reset transformations
          model.position.set(0, 0, 0);
          model.rotation.set(0, 0, 0);
          model.scale.set(1, 1, 1);

          // Print hierarchy for debugging
          console.log("Model hierarchy:");
          model.traverse(function (child) {
            console.log(child.name, child.type);
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;

              // Make sure materials are visible
              if (child.material) {
                child.material.side = THREE.DoubleSide;
                child.material.transparent = false;
                child.material.opacity = 1;
                child.material.needsUpdate = true;
              }
            }
          });

          scene.add(model);

          // Calculate bounding box to center model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          console.log("Model dimensions:", size);
          console.log("Model center:", center);

          // Move camera to fit the model
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov * (Math.PI / 180);
          let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

          camera.position.set(0, 0, cameraZ);
          const minZ = box.min.z;
          const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

          camera.far = cameraToFarEdge * 3;
          camera.updateProjectionMatrix();

          // Center the model
          model.position.x = -center.x;
          model.position.y = -center.y;
          model.position.z = -center.z;

          loading.value = false;
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (err) {
          console.error("Error loading model:", err);
          error.value = err.message || "Failed to load";
          loading.value = false;
        }
      );

      // Handle window resize
      window.addEventListener("resize", onWindowResize);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (controls) controls.update();

      // Update any animation mixers
      const delta = clock.getDelta();
      if (animationMixers.length > 0) {
        animationMixers.forEach((mixer) => mixer.update(delta));
      }

      // Render scene
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    const onWindowResize = () => {
      if (camera && renderer && threeContainer.value) {
        camera.aspect =
          threeContainer.value.clientWidth / threeContainer.value.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          threeContainer.value.clientWidth,
          threeContainer.value.clientHeight
        );
      }
    };

    onMounted(() => {
      initThree();
      animate();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", onWindowResize);
      if (threeContainer.value && renderer) {
        threeContainer.value.removeChild(renderer.domElement);
      }
      if (controls) controls.dispose();
      if (renderer) renderer.dispose();
    });

    return {
      threeContainer,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.three-container:active {
  cursor: grabbing;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 245, 245, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(74, 90, 249, 0.2);
  border-radius: 50%;
  border-top-color: #4a5af9;
  animation: spin 1s ease-in-out infinite;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.2);
  color: #721c24;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 10;
  text-align: center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 