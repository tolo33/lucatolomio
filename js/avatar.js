import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.getElementById("avatarCanvas");
const container = document.querySelector(".avatar-container");

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  100
);
camera.position.set(0, 1.5, 3);

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// LIGHTS
scene.add(new THREE.AmbientLight(0xffffff, 1.2));

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(2, 4, 2);
scene.add(dirLight);

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minPolarAngle = Math.PI / 2.2;
controls.maxPolarAngle = Math.PI / 2.2;
// LOAD AVATAR
const loader = new GLTFLoader();
let mixer;

loader.load("assets/models/avatar.glb", (gltf) => {
  const avatar = gltf.scene;

  // 🔥 SCALA MANUALE (QUI LO INGRANDISCI DAVVERO)
  avatar.scale.set(1.8, 1.8, 1.8); // ⬅️ aumenta se lo vuoi ancora più grande

  // bounding box DOPO la scala
  const box = new THREE.Box3().setFromObject(avatar);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  // centra avatar (piedi a terra)
  avatar.position.sub(center);
  avatar.position.y += size.y / 2;

  scene.add(avatar);

  // 🎯 camera guarda la testa
  const headY = size.y * 0.4;
  camera.lookAt(0, headY, 0);
  controls.target.set(0, headY, 0);
  controls.update();

  // animazione
  if (gltf.animations.length > 0) {
    mixer = new THREE.AnimationMixer(avatar);
    mixer.clipAction(gltf.animations[0]).play();
  }
});


// RESIZE
window.addEventListener("resize", () => {
  const w = container.clientWidth;
  const h = container.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});

// LOOP
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  if (mixer) mixer.update(clock.getDelta());
  controls.update();
  renderer.render(scene, camera);
}

animate();
