let URL = `https://api.openweathermap.org/data/2.5/forecast?q=Tejalpa&appid=e78144700f33f371e15b25a3c6695ccb&units=metric&lang=sp`;
let fecha = 24;

fetch(URL)
.then(response => response.json())
.then(response => {
    console.log(response);
    let filteredList = response.list.filter((clima) => {
        console.log(clima.dt_txt.substr(8, 2));
        if (parseInt(clima.dt_txt.substr(8, 2)) != fecha){
        fecha++;
        return clima;
    }
  })
  console.log(filteredList);
})