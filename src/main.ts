import * as THREE from 'three';

// シーンの追加
const scene = new THREE.Scene();
// カメラの追加
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// レンダー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// 形状の追加
const geometry = new THREE.BoxGeometry(1, 1, 1); // Box
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// アニメーションの追加
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera)
}

animate();