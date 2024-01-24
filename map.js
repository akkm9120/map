


let singapore =[1.282302, 103.858528];
let map = L.map('map').setView(singapore , 13);



async function dropMarkers() {
    result = await getdata();
    console.log(result);
    for (i = 0; i < result.length; i++) {
      L.marker([result[i].position.lat, result[i].position.lon]).addTo(map)
        .bindPopup("A pretty CSS popup.\nEasily customizable.")
        .openPopup();
    }
  }
  


// Declareing marker variable outside the click event listener to make it accessible
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



document.getElementById("searchbtn").addEventListener('click', async () => {
    if (!circle || !map.hasLayer(circle)) {
        let inputLocation = document.getElementById("searchin").value;
        const apiUrl = `https://api.tomtom.com/search/2/geocode/${inputLocation}.json?key=56jDLQEJXuz69NIh1n9a6aukSHECQfsh`;
        let userIlocation = await axios.get(apiUrl);

        let newlocation = [userIlocation.data.results[0].position.lat, userIlocation.data.results[0].position.lon];
        map.setView(newlocation, 14);

        // Remove existing circle if it exists
        if (circle) {
            map.removeLayer(circle);
        }

        // console.log(newlocation);
        circle = L.circle(newlocation, {
            color: 'blue',
            fillColor: '#F9BD06',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
    } else {
        // If there is an existing circle, remove it
        removeCircle();
    }
});

function removeCircle() {
    if (circle) {
        map.removeLayer(circle);
        circle = null;
    }
}

let circleLine = 
[[1.29870130662953,103.846115154676],
[1.29686168652761,103.850667371778],
[1.29332160761123,103.855504105526],
[1.29321805148932,103.860999155887],
[1.29976683526797,103.863637018496],
[1.30284062963322,103.875350335178],
[1.30620190483123,103.882528080809],
[1.30838263926699,103.888662603931],
[1.31811208229527,103.893060355251],
[1.32634537166125,103.890287031366],
[1.33543332222291,103.888194861152],
[1.34282833773757,103.879758906227],
[1.34970787537926,103.873574846858],
[1.35161217102563,103.864151938047],
[1.35083898769384,103.848143964474],
[1.34870726301822,103.839423132569],
[1.33767450804433,103.839529820763],
[1.33372888232144,103.830689550136],
[1.32211019298476,103.814982750343],
[1.31751061189576,103.807586105746],
[1.31183479040213,103.796191823861],
[1.30718346654733,103.790191535173],
[1.29975987859198,103.787457507831],
[1.2934960617448,103.784427460626],
[1.2825421566429,103.78181045132],
[1.27621352268533,103.791350313154],
[1.27233273159647,103.802939620419],
[1.27075321145857,103.809748636835],
[1.26547263986209,103.821443069088], ] ;

// const { MongoClient } = require("mongodb").MongoClient;
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://NoName1123:NoName1123@cluster0.mnrbmx6.mongodb.net/?retryWrites=true&w=majority";

// async function run() {
//    const client = await MongoClient.connect(uri, {
//         "useUnifiedTopology": true // it's for using the latest version of MongoDB       
//      });

//      //connection

//      const db = client.db("Singapore");
//      console.log("database connected");

//      const listings = await db.collection("MRT Stations").find().limit(10).toArray();
//      console.log(listings);
    
// }
// run()



let TE= [[1.44829249987065,103.785692700008],
[1.43687512821075,103.786485134907],
[1.42725997871124,103.793850892437],
[1.39816086102595,103.818081849862],
[1.38506194692628,103.836469486914],
[1.3720866386742,103.836823932014],
[1.3633080980958,103.832935957836],
[1.35441185312773,103.83293816886],
[1.33767450804433,103.839529820763],
[1.33045,103.83867],
[1.32006555700672,103.826024402243],
[1.30736,103.81942],
[1.30314,103.82391],
[1.30398101243687,103.832241452067],
[1.31125,103.77831],
[1.28673,103.8449],
[1.28140497813013,103.839126497583],
[1.27653,103.84556],
[1.27929,103.85055],
[1.2764273547506,103.854597777543],
[1.27133671132916,103.862859769637],
[1.28163,103.86575]
]

let NEline=[[1.26547263986209,103.821443069088],
[1.28140497813013,103.839126497583],
[1.28435957823297,103.843426775943],
[1.28838602420114,103.846555209295],
[1.29870130662953,103.846115154676],
[1.30680002531233,103.849646966572],
[1.31235984021213,103.854177141531],
[1.31939570602305,103.861686501869],
[1.33137952461929,103.869055665272],
[1.33919004552515,103.870818309374],
[1.34970787537926,103.873574846858],
[1.36017917117915,103.885064856336],
[1.37129229167853,103.892380518911],
[1.38287785814722,103.893121564785],
[1.39169462609898,103.89548469416],
[1.40454672778794,103.902072638406],
]

let NSline=[[1.26547263986209,103.821443069088],
[1.28140497813013,103.839126497583],
[1.28435957823297,103.843426775943],
[1.28838602420114,103.846555209295],
[1.29870130662953,103.846115154676],
[1.30680002531233,103.849646966572],
[1.31235984021213,103.854177141531],
[1.31939570602305,103.861686501869],
[1.33137952461929,103.869055665272],
[1.33919004552515,103.870818309374],
[1.34970787537926,103.873574846858],
[1.36017917117915,103.885064856336],
[1.37129229167853,103.892380518911],
[1.38287785814722,103.893121564785],
[1.39169462609898,103.89548469416],
[1.40454672778794,103.902072638406],
]

let DTline= [
    [1.37900211671766,103.761535114732],
[1.36936983106434,103.76469442231],
[1.36234486852786,103.767418254456],
[1.34122317571135,103.775794285294],
[1.33566512075976,103.783806658873],
[1.33078638736398,103.797246316661],
[1.32588320892244,103.807322207612],
[1.32211019298476,103.814982750343],
[1.32006555700672,103.826024402243],
[1.31232009955563,103.837985299632],
[1.30680002531233,103.849646966572],
[1.30391648396458,103.852421680704],
[1.30046507631525,103.855706414016],
[1.29321805148932,103.860999155887],
[1.28187378849153,103.859079765132],
[1.27944619037872,103.852840444039],
[1.28228953619225,103.848302806192],
[1.28435957823297,103.843426775943],
[1.29247892791748,103.844328269609],
[1.29886427041735,103.850384254916],
[1.30540364222325,103.855477016339],
[1.31367223254449,103.862977987474],
[1.3215058380176,103.871900625706],
[1.32687671471261,103.883247509179],
[1.32634537166125,103.890287031366],
[1.32995682570384,103.899252524977],
[1.33496730156428,103.908459734464],
[1.33474211675839,103.917978329773],
[1.33660782981049,103.932234623624],
[1.34551530530169,103.938436971353],
[1.35330135634243,103.945148688649],
[1.356191483037,103.954634462929],
[1.34173748389319,103.961471788678],
[1.33454977783781,103.961548210707],

]


let EWline=[
    [1.37298377357948,103.949268118245],
    [1.35330135634243,103.945148688649],
    [1.34320289493072,103.953371694175],     
[1.32718713453835,103.946346460622],
[1.32397996888774,103.92998449462],
[1.32103824885108,103.912949388363],
[1.31977895155363,103.903252466738],
[1.31811208229527,103.893060355251],
[1.31643261165783,103.88290604466],
[1.31148890964216,103.871386541359],
[1.30735702009556,103.862829208106],
[1.30046507631525,103.855706414016],
[1.29293624284609,103.852585892344],
[1.2841256105732,103.851461712091],
[1.27652124669304,103.845864229347],
[1.28140497813013,103.839126497583],
[1.28619339285898,103.827019430923],
[1.28956272640245,103.816816670149],
[1.29486093279498,103.805884333892],
[1.30243873532717,103.798304515628],
[1.30718346654733,103.790191535173],
[1.3114052929253,103.778637841637],
[1.31495449242359,103.765298874326],
[1.33315261989406,103.742286544004],
[1.34235282087474,103.732596738073],
[1.34425924939469,103.720949268478],
[1.33860405450327,103.706064622595],
[1.33758688220474,103.697321512936],
[1.32771717309168,103.67837514285],
[1.3195052149382,103.660552955907],
[1.32102655324226,103.649075478308],
[1.32998908904913,103.63961405603],
[1.3404637656482,103.636878678348],

]

let CGline= [[1.35731454533097,103.988364658505],
[1.33454977783781,103.961548210707],
[1.32718713453835,103.946346460622],
]
let hasmrtlines = false;
let polylineTE, polylineCC, polylineNE, polylineNS, polylineDT, polylineEW, polylineCG;

document.getElementById("mrtbtn").addEventListener('click', async () => {
    if (hasmrtlines) {
        // Remove polylines if they exist
        map.removeLayer(polylineCC);
        map.removeLayer(polylineCG);
        map.removeLayer(polylineDT);
        map.removeLayer(polylineEW);
        map.removeLayer(polylineNE);
        map.removeLayer(polylineNS);
        map.removeLayer(polylineTE);
    } else {
        // Add polylines
        polylineTE = L.polyline(TE, { color: '#975911' }).addTo(map);
        polylineCC = L.polyline(circleLine, { color: '#e4a50f' }).addTo(map);
        polylineNE = L.polyline(NEline, { color: 'purple' }).addTo(map);
        polylineNS = L.polyline(NSline, { color: 'red' }).addTo(map);
        polylineDT = L.polyline(DTline, { color: 'blue' }).addTo(map);
        polylineEW = L.polyline(EWline, { color: 'green' }).addTo(map);
        polylineCG = L.polyline(CGline, { color: 'green' }).addTo(map);
    }

    // Toggle the flag
    hasmrtlines = !hasmrtlines;
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.addEventListener("DOMContentLoaded",()=>{
 dropMarkers();
    
})
