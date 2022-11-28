const art = document.querySelector('.art');
const imageArray = [437323, 206321, 436105, 247017, 435744, 436453, 437326, 10186];

//let image1 = $.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${random5()}`)

for (let i = 0; i < imageArray.length;i++) {
const artObject = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${imageArray[i]}`
fetch(artObject, {
   // credentials: 'include'
})
.then((response) => response.json())
.then((data) => {
    let artist = data.artistDisplayName
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div');
    div1.className = 'artist';
    div2.className = 'date';
    div4.className = 'period';
    div5.className = 'title';
    let image = document.createElement('img');
    let date = data.objectDate;
    let period = data.period;
    let title = data.title;
    div1.innerHTML = `${artist}`;
    div2.textContent = `${date}`;
    div4.innerText = `${period}`;
    div5.textContent = `${title}`
    image.setAttribute('src', `images/image${i + 1}.jpeg`);
    art.append(div5);
    art.append(div3);
    art.append(div1);
    art.append(div2);
    art.append(div4);
    
    div3.append(image)
   
})}

