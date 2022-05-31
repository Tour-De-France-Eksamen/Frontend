restApi = "http://localhost:8181/cykelhold"


let cykelholdTabel = document.getElementById("cykelhold-tabel")

 function fetchData(url) {
  return fetch(url).then(res => res.json());
}

createTabel();
cykelholdTabel.innerHTML ="";

async function createTabel() {
  const data = await fetchData(restApi)
  // console.log(JSON.stringify(data));
  const loop = await fetchData(restApi);
  for (let i = 0; i < loop.length; i++) {
    console.log(data[i].teamnavn);

    cykelholdTabel.innerHTML += `
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hold</th>
      <th scope="col">Cykelrytter</th>
      <th scope="col">Placering</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${data[i].teamnavn}</td>
    </tbody>
    `;

  }
}




