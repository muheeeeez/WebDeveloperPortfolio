<template>
  <div class="three-container">
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
    let scene, camera, renderer, model, controls, mixer, clock;
    let animationMixers = [];

    const initThree = () => {
      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x121212);

      // Camera setup
      camera = new THREE.PerspectiveCamera(
        50,
        threeContainer.value.clientWidth / threeContainer.value.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      camera.position.y = 1;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(
        threeContainer.value.clientWidth,
        threeContainer.value.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      threeContainer.value.appendChild(renderer.domElement);

      // Controls setup
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.minDistance = 3;
      controls.maxDistance = 10;
      controls.minPolarAngle = Math.PI / 4;
      controls.maxPolarAngle = Math.PI / 2;
      controls.autoRotate = false;
      controls.autoRotateSpeed = 0.5;
      controls.enablePan = false;

      // Prevent controls from interfering with page scrolling
      controls.enableZoom = false;
      controls.enabled = true;
      renderer.domElement.style.pointerEvents = "none";

      // Clock for animations
      clock = new THREE.Clock();

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0x4a5af9, 1);
      pointLight.position.set(-5, 3, 0);
      scene.add(pointLight);

      // Load 3D model
      const loader = new GLTFLoader();
      loader.load(modelPath, (gltf) => {
        model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        scene.add(model);

        // Animation setup if available
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });
          animationMixers.push(mixer);
        }

        // Animate in with GSAP
        gsap.from(model.position, {
          y: -2,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      });

      // Handle window resize
      window.addEventListener("resize", onWindowResize);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
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
    };
  },
};
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style> 