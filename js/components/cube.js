// import * as THREE from 'three';

//  const Params = {geometry: new THREE.BoxGeometry(1,1,1), // create a new box geometry
//  material: new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // create a new material with a green color

// }


//  const cube = new THREE.Mesh(Params.geometry, Params.material); // create a new mesh with the geometry and material

// export default cube; // export the cube

import * as THREE from 'three';
export class Cube extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    super(geometry, material);
  }
}

export default Cube; // export the cube
