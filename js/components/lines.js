import * as THREE from 'three';

export class SomeLines extends THREE.Line {
  constructor() {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-1, 0, 0));
    points.push(new THREE.Vector3(0, 1, 0));
    points.push(new THREE.Vector3(1, 0, 0));
    geometry.setFromPoints(points);
    super(geometry, material);
  }
}

export default SomeLines; // export the lines
