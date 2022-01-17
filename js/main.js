//creating scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x004d3b);

//add camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

//renderer
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0xff002b, wireframe: true });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 4;

//animation
var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
