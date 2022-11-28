//

// MainStuff:Setup

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);
let renderer = new THREE.WebGLRenderer();

let controls = {};
let player = {
  height: 4,
  turnSpeed: .1,
  speed: .1,
  jumpHeight: .2,
  gravity: .01,
  velocity: 0,
  
  playerJumps: false
};

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color("white");
document.body.appendChild(renderer.domElement);

let w = window.innerWidth;
    let  h = window.innerHeight;
// BrowserWindow->Renderer:ResizeRe-Render
window.addEventListener('resize', () => {
  
    w = window.innerWidth,
    h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

// Camera:Setup
camera.position.set(0, player.height, -5);
camera.lookAt(new THREE.Vector3(0, player.height, 0));


// Create a skyBox

function createSkyBox() {

  const materialArray = createMaterialArray();
  skyboxGeo = new THREE.BoxGeometry(20, 12, 50);
  skybox = new THREE.Mesh(skyboxGeo, materialArray);
  skybox.position.y = 5;
  scene.add(skybox);

  //rotate();

}

createSkyBox();


function rotate() {
    skybox.rotation.x += 0.005;
    skybox.rotation.y += 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(rotate);
}

//create an array of path strings from a file image name, filename.

function createPathStrings() {
    const basePath = "images/";
    const baseFilename = basePath;
    const fileType = ".jpeg";
    const sides = ["front", "back", "top", "down", "right", "left"];
    const pathStings = sides.map(side => {
        return baseFilename + side + fileType;
    });
    
    return pathStings;
}

//Map each Texture to a Mesh array 

function createMaterialArray() {
  const skyboxImagepaths = createPathStrings();
  const materialArray = skyboxImagepaths.map(image => {
    let texture = new THREE.TextureLoader().load(image);

    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });
  return materialArray;
}

const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX / w * 2 - 1
    mouse.y = event.clientY / h * 2 + 1

    console.log(mouse.x)
})



// Object:Light:1
let light1 = new THREE.PointLight("white", .8);
light1.position.set(0, 3, 0);
light1.castShadow = true;
light1.shadow.camera.near = 2.5;
scene.add(light1);

// Object:Light:2
let light2 = new THREE.AmbientLight("white", .15);
light2.position.set(10, 2, 0);
scene.add(light2);

// Controls:Listeners
document.addEventListener('keydown', ({ keyCode }) => { controls[keyCode] = true });
document.addEventListener('keyup', ({ keyCode }) => { controls[keyCode] = false });

// ...
function control() {
  // Controls:Engine 
  if(controls[87]){ // w
    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }
  if(controls[83]){ // s
    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }
  if(controls[65]){ // a
    camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
  }
  if(controls[68]){ // d
    camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
  }
  if(controls[81]){ // rotate left
    camera.rotation.y -= player.turnSpeed;
  }
  if(controls[69]){ // rotate right
    camera.rotation.y += player.turnSpeed;
  }
  if(controls[32]) { // space
    if(player.jumps) return false;
    player.jumps = true;
    player.velocity = -player.jumpHeight;
  }
}

function ixMovementUpdate() {
  player.velocity += player.gravity;
  camera.position.y -= player.velocity;
  
  if(camera.position.y < player.height) {
    camera.position.y = player.height;
    player.jumps = false;
  }
}


function update() {
  control();
  ixMovementUpdate();
  
}

function render() {
  renderer.render(scene, camera);
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

loop();

// Art Backgrounds
skybox.wireframe = true;

let texture1 = new THREE.TextureLoader().load('images/image1.jpeg');
let texture2 = new THREE.TextureLoader().load('images/image2.jpeg');
let texture3 = new THREE.TextureLoader().load('images/image3.jpeg');
let texture4 = new THREE.TextureLoader().load('images/image4.jpeg');
let texture5 = new THREE.TextureLoader().load('images/image5.jpeg');
let texture6 = new THREE.TextureLoader().load('images/image6.jpeg');
let texture7 = new THREE.TextureLoader().load('images/image7.jpeg');
let texture8 = new THREE.TextureLoader().load('images/image8.jpeg');



const box = new THREE.BoxGeometry(7,6,1);
const material1 = new THREE.MeshPhongMaterial({
    map: texture1, 
    side: THREE.DoubleSide
});
const cube1 = new THREE.Mesh(box, material1);
scene.add(cube1);
cube1.position.set(0,5,25);
cube1.name = 'cube1';

const material2 = new THREE.MeshPhongMaterial({
    map: texture2, 
    side: THREE.DoubleSide
});
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(7,6,1), material2);
scene.add(cube2);
cube2.position.set(0,5,-25);

const material3 = new THREE.MeshPhongMaterial({
    map: texture3, 
    side: THREE.DoubleSide
});
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1,6,7), material3);
scene.add(cube3);
cube3.position.set(10,5,0);

const material4 = new THREE.MeshPhongMaterial({
    map: texture4, 
    side: THREE.DoubleSide
});
const cube4 = new THREE.Mesh(new THREE.BoxGeometry(1,6,7), material4);
scene.add(cube4);
cube4.position.set(-10,5,0);

const material5 = new THREE.MeshPhongMaterial({
    map: texture5, 
    side: THREE.DoubleSide
});
const cube5 = new THREE.Mesh(new THREE.BoxGeometry(1,6,7), material5);
scene.add(cube5);
cube5.position.set(10,5,12.5);

const material6 = new THREE.MeshPhongMaterial({
    map: texture6, 
    side: THREE.DoubleSide
});
const cube6 = new THREE.Mesh(new THREE.BoxGeometry(1,6,7), material6);
scene.add(cube6);
cube6.position.set(-10,5,12.5);

const material7 = new THREE.MeshPhongMaterial({
    map: texture7, 
    side: THREE.DoubleSide
});
const cube7 = new THREE.Mesh(new THREE.BoxGeometry(1,6,7), material7);
scene.add(cube7);
cube7.position.set(10,5,-12.5);

const material8 = new THREE.MeshPhongMaterial({
    map: texture8, 
    side: THREE.DoubleSide
});
const cube8 = new THREE.Mesh(new THREE.BoxGeometry(1,6,7), material8);
scene.add(cube8);
cube8.position.set(-10,5,-12.5);


//let image1 = $.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${random5()}`)







//console.log()

//event listener

// cube1.addEventListener('click', () => {
//     console.log('click')
// })

// Adding events to a custom object



// cube1.addEventListener( 'click', function ( event ) {

// 	console.log('clicked');

// } );


//const labelRenderer = new CSS2DRenderer();


