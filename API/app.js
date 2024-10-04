const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.getElementById("fact");

const btn = document.getElementById("btn");
// btn.innerText="";




// const getFacts = async ()=>{
//     console.log("getting DAta...");
//     let response = await fetch(URL);
//     console.log(response);
//     console.log("json format");
//     let data = await response .json();
//     console.log(data[1].text);

//     factPara.innerText = data[0].text;

//     console.log("Data fetched");
//     btn.innerText="Get facts";
 
// }
// btn.addEventListener("click", getFacts);

function getFacts() {
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        factPara.innerText = data[0].text;
    })
}

btn.addEventListener("click", getFacts);
getFacts();