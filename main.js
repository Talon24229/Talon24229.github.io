import * as THREE from 'three';

// Starting position of images from the top
const startY = 10;


// Create a new scene
const scene = new THREE.Scene();

//create and position the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = startY;
camera.position.z = 30;

//Create list of image in the 'IMG' folder
let imgList = [
    'API.PNG',
    "DBP.PNG",
    'feddy.PNG',
    "MM.PNG",
    "mini.PNG",
    "BB.PNG",
    "BBcode.PNG",
    
    
]


//Add everey listed image as a plane mesh with texture to scene
for (const image in imgList) {
    // Every mesh has a geometry, texture, and material 
    const geometry = new THREE.PlaneGeometry(30, 20);
    const texture = new THREE.TextureLoader().load("IMG/" + imgList[image]);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        map: texture // ad the texture image here
    });

    const plane = new THREE.Mesh(geometry, material);
    // plane.rotation.y = 10;
    plane.position.x = -5;
    plane.position.y = image * -30
    // Add the new plane to the scene
    scene.add(plane);
}
console.log(scene);



// move the camera with the scroll bar
function moveCamera() {
    const top = document.body.getBoundingClientRect().top;
    camera.position.y = startY + top * 0.07;
}
// add scrollbar event to move camera
document.body.onscroll = moveCamera;

// resize the threeJS with the window
// and adjust for phone sizes
function resizeWindow() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    //adjust for phone or desktop size
    if (window.innerWidth <= 600) {
        camera.position.x = -0
        for (const child in scene.children) {
            scene.children[child].rotation.y = 0;
            scene.children[child].rotation.y = child *-50
        }
    } else {
        camera.position.x = 15;
        for (const child in scene.children) {
            // scene.children[child].rotation.y = 15 * (Math.Pi/180)
            scene.children[child].rotation.y = 0.5
        }
    }
}
// resize canvas on window resize
window.addEventListener('resize', resizeWindow, false);

//create the renderer, and attach to the canvas
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

// set initial canvas size
resizeWindow()

//set renderer size and add it to the page
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//animation loop (calls itself recursively)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// start the animation
animate();