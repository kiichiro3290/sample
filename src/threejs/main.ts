import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// シーンの追加
const scene = new THREE.Scene();
// カメラの追加
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// レンダー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// ライトノ追加
const ambientLight = new THREE.AmbientLight(0x555555, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(0, 100, 40);
scene.add(directionalLight);

// 形状の追加
const geometry = new THREE.BoxGeometry(1, 1, 1); // Box
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// モデルの追加
const loader = new GLTFLoader()
loader.load('/sample/dog.glb', gltf => {
    const model = gltf.scene;
    model.scale.set(4,4,4);
    model.position.set(10, -10, -60);
    model.rotateY(30);
    
    scene.add(model);
}, (error) => {
    console.log(error)
});

// アニメーションの追加
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera)
}

animate();
