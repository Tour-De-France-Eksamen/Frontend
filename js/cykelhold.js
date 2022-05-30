restApi = "http://localhost:8181/cykelhold"


let cykelholdTabel = document.getElementById("cykelhold-tabel")

async function fetchData(url) {
  return fetch(url).then(res => res.json());
}


//cykelholdTabel.innerHTML ="";

async function createTabel() {
  let data = await fetchData(restApi)
  JSON.stringify(data);
 // console.log(JSON.stringify(data));

  function convert() {
   data = JSON.stringify(data);
  }

  convert();
  console.log(data + "dette er data")
  cykelholdTabel.innerHTML += `
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
      <td>${data.navn}</td>
      <td>${data.alder}</td>
      <td>data.navn</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>data.alder</td>
      <td>data.nationalitet</td>
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

createTabel();



