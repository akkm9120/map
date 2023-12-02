
defaultLocation =[1.282302, 103.858528];
let map = L.map('map').setView(defaultLocation , 14);
var marker = L.marker(defaultLocation).addTo(map);


async function dropMarkers(){

    result = await getdata();
    for(i=0;i < result.length;i++){
        L.marker([result[i].geocodes.main.latitude,result[i].geocodes.main.longitude]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

    }

}

document.getElementById('button').addEventListener('click',()=>{
    let userLocation
    navigator.geolocation.getCurrentPosition((position) => {
        userLocation = [position.coords.latitude, position.coords.longitude]
         map.setView(userLocation,18);
        //  marker.marker(userLocation);
         let circle = L.circle(userLocation, {
            color: 'blue',
            fillColor: '#F9BD06',
            fillOpacity: 0.2,
            radius: 80
        }).addTo(map); 

      });
          
})


// const htmlInput = "input_here";
// const apiUrl = `https://geocode.xyz/${htmlInput}&auth=179880086102264830577x31571`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data));

document.getElementById('searchbtn').addEventListener('click',async ()=>{
        let inputLocation = document.getElementById("searchin").value;
        const apiUrl = `https://geocode.xyz/${inputLocation}&auth=179880086102264830577x31571?json=1`;
        
        let userIlocation = await axios.get(apiUrl);
        let newlocation =[userIlocation.data.latt , userIlocation.data.longt]
        map.setView(newlocation,18);
        circle.circle(newlocation, {
            color: 'blue',
            fillColor: '#F9BD06',
            fillOpacity: 0.3,
            radius: 80
        }).addTo(map);

});





L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.addEventListener("DOMContentLoaded", async function (){
       dropMarkers();
})


// L.marker([51.5, -0.09]).addTo(map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();