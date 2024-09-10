import * as THREE from 'three';s
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene(); // create a new Threejs scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // create a new camera
/* the camera has 4 parameters:
1. field of view (fov) in degrees
2. aspect ratio
3. near clipping plane
4. far clipping plane
*/
const renderer = new THREE.WebGLRenderer();


console.log(scene)

renderer.setSize(window.innerWidth, window.innerHeight); // set the size of the renderer to the window size
document.body.appendChild(renderer.domElement); // append the renderer to the body of the documents
const geometry = new THREE.BoxGeometry(1,1,1 ); // create a new box geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // create a new material with a green color
const cube = new THREE.Mesh(geometry, material); // create a new mesh with the geometry and material
scene.add(cube); // add the cube to the scene
camera.position.z = 5; // set the camera position



function animate() {
  renderer.render(scene, camera)  // render the scene with the camera
  cube.rotation.x += 0.01; // rotate the cube on the x axis
  cube.rotation.y += 0.01; // rotate the cube on the y axis

}


if ( WebGL.isWebGL2Available()) {
  animate()
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById('container').appendChild(warning)
}

renderer.setAnimationLoop(animate)
