let jsonBin = "https://api.jsonbin.io/v3/b/6593d3a2266cfc3fde716a6f";



async function getdata(){
    let result = await axios.get(jsonBin);
    return result.data.record;
}
 

document.addEventListener("DOMContentLoaded", async function (){
        console.log(await getdata())
})




