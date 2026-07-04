// stock.js
// NOTE:
// Replace API_URL with the public API you choose.
// This is the application logic only.

const API_URL = "https://your-api-url.com/search?symbol=";
const API_KEY = "W7E6Z5IQPF94SIMS";
const symbol = "RELIANCE.BSE";

fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err));


const $ = id => document.getElementById(id);

const ids = [
"companyName","price","change","marketCap","ev","sector","industry",
"bookValue","faceValue","intrinsicValue","revenue","netProfit",
"ebitda","opMargin","netMargin","roe","roce","debt","deRatio",
"interestCoverage","currentRatio","quickRatio","ocf","fcf","icf",
"finance","promoter","fii","dii","retail","pledged","projects",
"orderBook","pe","industryPE","evebitda","peg","pb","ps",
"analysis","score","rating"
];

function loading(show){
    $("loading").style.display = show ? "block":"none";
}

function set(id,val){
    if($(id)) $(id).textContent = val ?? "-";
}

function updateGrowth(d){
    set("rev1",d.rev1);
    set("rev3",d.rev3);
    set("rev5",d.rev5);
    set("rev10",d.rev10);

    set("profit1",d.profit1);
    set("profit3",d.profit3);
    set("profit5",d.profit5);
    set("profit10",d.profit10);

    set("eb1",d.eb1);
    set("eb3",d.eb3);
    set("eb5",d.eb5);
    set("eb10",d.eb10);

    set("eps1",d.eps1);
    set("eps3",d.eps3);
    set("eps5",d.eps5);
    set("eps10",d.eps10);
}

function updateDividend(arr){

    const table=$("dividendTable");

    table.innerHTML="";

    arr.forEach(x=>{

        table.innerHTML+=`
        <tr>
            <td>${x.year}</td>
            <td>${x.value}</td>
        </tr>
        `;

    });

}

function fill(data){

ids.forEach(id=>{

if(data[id]!==undefined)
set(id,data[id]);

});

updateGrowth(data);

updateDividend(data.dividend);

drawCharts(data);

}

function drawCharts(d){

new Chart(
document.getElementById("priceChart"),
{
type:"line",
data:{
labels:d.chart.labels,
datasets:[{
label:"Price",
data:d.chart.price
}]
}
});

new Chart(
document.getElementById("revenueChart"),
{
type:"bar",
data:{
labels:d.chart.labels,
datasets:[{
label:"Revenue",
data:d.chart.revenue
}]
}
});

new Chart(
document.getElementById("profitChart"),
{
type:"bar",
data:{
labels:d.chart.labels,
datasets:[{
label:"Profit",
data:d.chart.profit
}]
}
});

new Chart(
document.getElementById("cashChart"),
{
type:"line",
data:{
labels:d.chart.labels,
datasets:[{
label:"Cash Flow",
data:d.chart.cash
}]
}
});

}

async function searchStock(){

const symbol=$("stockInput").value.trim();

if(!symbol){

alert("Enter Stock");

return;

}

loading(true);

try{

const res=await fetch(API_URL+encodeURIComponent(symbol));

const data=await res.json();

fill(data);

}

catch(e){

alert("Unable to fetch stock.");

console.log(e);

}

loading(false);

}

$("searchBtn").onclick=searchStock;

$("stockInput").addEventListener("keypress",e=>{

if(e.key==="Enter")
searchStock();

});
