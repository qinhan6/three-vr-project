import { scene } from  './utils/init';

import * as THREE from 'three';

function createCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  return cube;
}

const cubeObj = createCube();