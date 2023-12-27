


let singapore =[1.282302, 103.858528];
let map = L.map('map').setView(singapore , 13);



async function dropMarkers(){

    result = await getdata();
    for(i=0;i < result.length;i++){
        L.marker([result[i].geocodes.main.latitude,result[i].geocodes.main.longitude]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

    }

}


// Declare marker variable outside the click event listener to make it accessible
let marker;
let circle;

function addMarker() {
    navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = [position.coords.latitude, position.coords.longitude];
        console.log(userLocation);
        map.setView(userLocation, 18);
        
        marker = L.marker(userLocation).addTo(map);
        
        circle = L.circle(userLocation, {
            color: 'blue',
            fillColor: '#F9BD06',
            fillOpacity: 0.2,
            radius: 80
        }).addTo(map);
    });
}

function removeMarker() {
    map.removeLayer(marker);
    map.removeLayer(circle);
}

document.getElementById('button').addEventListener('click', () => {
    if (!marker || !map.hasLayer(marker)) {
        addMarker();
    } else {
        removeMarker();
    }
});




// const htmlInput = "input_here";
// const apiUrl = `https://geocode.xyz/${htmlInput}&auth=179880086102264830577x31571`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data));

document.getElementById("searchbtn").addEventListener('click',async ()=>{
        let inputLocation = document.getElementById("searchin").value;
        const apiUrl = `https://api.tomtom.com/search/2/geocode/${inputLocation}.json?key=56jDLQEJXuz69NIh1n9a6aukSHECQfsh`
        let userIlocation = await axios.get(apiUrl);
        // console.log(userIlocation)
        let newlocation =[userIlocation.data.results[0].position.lat, userIlocation.data.results[0].position.lon]
        map.setView(newlocation,14);
        console.log(newlocation);
        L.circle(newlocation, {
            color: 'blue',
            fillColor: '#F9BD06',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

});





L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.addEventListener("DOMContentLoaded", async function (){
       dropMarkers();
})


app.listen(8000,function(){
    console.log("server has started")
});