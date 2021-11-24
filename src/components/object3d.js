
import * as THREE from 'three'
const Object3D = () => {
  //Scence
  const scene = new THREE.Scene();
  
  // Object
  const geometry = new THREE.TorusGeometry(.7,.2, 16,100);

  //Materials
  const material = new THREE.MeshBasicMaterial();
  material.color = new THREE.Color(0xff0000)

  // Mesh
  const sphere = new THREE.Mesh(geometry,material)
  scene.add(sphere)

  // Light
  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2
  pointLight.position.y = 3
  pointLight.position.z = 4
  scene.add(pointLight)
  return (
    <canvas>asdas</canvas>
  )
}

export default Object3D
