console.log('Keep it up');

const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`



const loadData = () =>{
    fetch(URL)
    .then(res => res.json())
    .then(data => displayData(data));
} 


const displayData = (data)=>{
    console.log(data)
}

loadData()
