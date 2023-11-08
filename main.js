import * as THREE from './three.module.js';





const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
 
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 50;
camera.position.y = 50;
camera.position.x = -50;


const geoPog = new THREE.CylinderGeometry(41.37, 41.37, 6, 64);
const texturePog = new THREE.TextureLoader().load('eevee.png')
const matPag = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF,
  wireframe: false,
  map: texturePog
});

const pog = new THREE.Mesh(geoPog, matPag);
scene.add(pog)

pog.rotation.x = 50;
pog.rotation.z = 45.5;

//Lights
// light at a certain point
const pointLight = new THREE.PointLight(0xFFFFFF, 1, 1000)
pointLight.position.set(0, 20, 50)

// Min light for everything
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1)

scene.add(pointLight)
scene.add(ambientLight)





const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({
    map: moonTexture
  })
)

moon.position.set(0, 40, -50)
scene.add(moon)

//helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// const axesHelper = new THREE.AxesHelper(20, 20, 20)
// scene.add(lightHelper, gridHelper, axesHelper)



const blockText = new THREE.TextureLoader().load('Block.jpg')
const block = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({
    map: blockText
  })
)
block.position.set(0, 40, 40)
scene.add(block)


const spaceTexture = new THREE.TextureLoader().load('space.png')
scene.background = spaceTexture

function addStar() {
  const StarGeo = new THREE.SphereGeometry(0.25, 24, 24);
  const StarMat = new THREE.MeshBasicMaterial({
    color: 0xfffa00,
  });
  const star = new THREE.Mesh(StarGeo, StarMat);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star)
}
Array(500).fill().forEach(addStar)
camera.rotateX = 180

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  block.rotation.y += 0.05;
  block.rotation.z += 0.05;

  camera.position.z = t * -0.02;
  camera.position.x = t * 0.02;
  // camera.rotation.y = t * -0.005;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate(time) {
  requestAnimationFrame(animate)
  pog.rotation.y += 0.01;
  renderer.render(scene, camera);

}

animate()