import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export let scene, camera, renderer, controls;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0.1;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function addControls() {
    controls = new OrbitControls(camera, renderer.domElement);
}

function createControls() {
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);
}

function resizeRender() {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

}

function renderLoop() {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(renderLoop);
}

init();
addControls();
createControls();
resizeRender();
renderLoop();