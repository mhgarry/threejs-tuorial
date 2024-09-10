import * as THREE from 'three';

import WebGL from 'three/addons/capabilities/WebGL.js';
import Cube from './components/cube.js';
import Lines from './components/lines.js';
const scene = new THREE.Scene(); // create a new Threejs scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // create a new camera
/* the camera has 4 parameters:
1. field of view (fov) in degrees
2. aspect ratio
3. near clipping plane
4. far clipping plane
*/
const renderer = new THREE.WebGLRenderer();

const lines = new Lines(); // create a new instance of the lines class
const cube = new Cube(); // create a new instance of the cube class
renderer.setSize(window.innerWidth, window.innerHeight); // set the size of the renderer to the window size
document.body.appendChild(renderer.domElement); // append the renderer to the body of the documents
// scene.add(cube); // add the cube to the scene
scene.add(lines,cube); // add the lines to the Scene
camera.position.z = 5; // set the camera position



function animate() {
  renderer.render(scene, camera)  // render the scene with the camera
  cube.rotation.x += 0.01; // rotate the cube on the x axis

}


if ( WebGL.isWebGL2Available()) {
  animate()
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById('container').appendChild(warning)
} // check if webgl2 is available and if it is, run the animate function

renderer.setAnimationLoop(animate) // set the animation loop to the animate function
