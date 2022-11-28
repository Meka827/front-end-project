console.log("working");
//browser.cookies.set(sameSite=None);


const canvas = document.querySelector('#c');
const button = document.querySelector('.btn');
const container = document.querySelector('#container')

//creating camera
const fov = 100;
const aspect = canvas.clientWidth / canvas.clientHeight;
const near = 0.1;//clip plane
const far = 2000;//clip plane


const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 1;
camera.position.x = -2.5
camera.position.y = 1;

const renderer = new THREE.WebGLRenderer({canvas});

const width = canvas.clientWidth;
const height = canvas.clientHeight;
renderer.setSize(width,height);

new THREE.OrbitControls(camera, canvas);

const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
const texture = loader.load(
    'images/metropolitan-museum-of-art-new-york-city.webp',
    ()=>{
        const renderTarget = new THREE.WebGLCubeRenderTarget(texture.image.height)
        renderTarget.fromEquirectangularTexture(renderer, texture)

        scene.background = renderTarget.texture;
    }
)

function render (){
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    renderer.setSize( window.innerWidth, window.innerHeight )
}

requestAnimationFrame(render);


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
console.log(window.innerHeight)
}