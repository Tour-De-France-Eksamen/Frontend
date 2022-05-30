restApi = "http://localhost:8181/cykelrytter"


let cykelTabel = document.getElementById("cykel-tabel")
async function fetchData(url){
  return fetch(url).then(res => res.json());
}


//cykelTabel.innerHTML ="";
createTabel();

async function createTabel(){
  const rytterData = await fetchData(restApi)
  console.log(rytterData + "dette er data")
  cykelTabel.innerHTML += `
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Navn</th>
      <th scope="col">Hold</th>
      <th scope="col">Placering</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${rytterData.navn}</td>
      <td>${rytterData.alder}</td>
      <td>data1.navn</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>myJson.name</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    </tbody>
    `;

}



