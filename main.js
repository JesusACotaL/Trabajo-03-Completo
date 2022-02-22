import './style.css'

import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg'),

});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setZ(5);

renderer.render(scene,camera);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const controls = new OrbitControls(camera,renderer.domElement);

function addStars(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff});
  const star = new THREE.Mesh(geometry,material);

  const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStars);

const spaceTexture = new THREE.TextureLoader().load('space.jpg'); //
scene.background = spaceTexture; //

const face = new THREE.TextureLoader().load('retrato.jpeg'); //
const jacl = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshStandardMaterial({map:face}) 
);
scene.add(jacl);

const moonTexture = new THREE.TextureLoader().load('moon.jpg'); //
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map:moonTexture,normalMap:normalTexture})
);
scene.add(moon);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const haloTexture = new THREE.TextureLoader().load('HaloRing.jpg');
const material = new THREE.MeshStandardMaterial({map:haloTexture,normalMap:normalTexture}); //

const torus = new THREE.Mesh(geometry,material);

scene.add(torus);

moon.position.z = 10;
moon.position.setX(-10);

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jacl.rotation.y += 0.01;
  jacl.rotation.z += 0.01;

  camera.rotation.z = t * -0.0001; 
  camera.position.x = t * -0.002;
  camera.position.y = t * -0.002;
}
document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  controls.update();
  renderer.render(scene,camera);
}

animate();

