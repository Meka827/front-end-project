


// const controlO = new THREE.OrbitControls(camera, scene);
// controls.target.set(0, 0, 0);
// controls.update();

// const labelContainerElem = document.querySelector('#labels');
 
// function makeInstance(geometry, color, x) {
// // function makeInstance(geometry, color, x, name) {
//   const material = new THREE.MeshPhongMaterial({color});
 
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);
 
//   cube.position.x = x;
 
//   const elem = document.createElement('div');
//   elem.textContent = name;
//   labelContainerElem.appendChild(elem);
 
// //   return cube;
//   return {cube, elem};
// }

// const cubes = [
//     // makeInstance(geometry, 0x44aa88,  0),
//     // makeInstance(geometry, 0x8844aa, -2),
//     // makeInstance(geometry, 0xaa8844,  2),
//     makeInstance(geometry, 0x44aa88,  0, 'Aqua'),
//     makeInstance(geometry, 0x8844aa, -2, 'Purple'),
//     makeInstance(geometry, 0xaa8844,  2, 'Gold'),
//   ];
  
//   const tempV = new THREE.Vector3();
 

 
// // cubes.forEach((cube, ndx) => {
// cubes.forEach((cubeInfo, ndx) => {
//   const {cube, elem} = cubeInfo;
//   const speed = 1 + ndx * .1;
//   const rot = time * speed;
//   cube.rotation.x = rot;
//   cube.rotation.y = rot;
 
//   // get the position of the center of the cube
//   cube.updateWorldMatrix(true, false);
//   cube.getWorldPosition(tempV);
 
//   // get the normalized screen coordinate of that position
//   // x and y will be in the -1 to +1 range with x = -1 being
//   // on the left and y = -1 being on the bottom
//   tempV.project(camera);
 
//   // convert the normalized position to CSS coordinates
//   const x = (tempV.x *  .5 + .5) * canvas.clientWidth;
//   const y = (tempV.y * -.5 + .5) * canvas.clientHeight;
 
//   // move the elem to that position
//   elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
// });