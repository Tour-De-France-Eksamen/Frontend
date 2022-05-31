restApi = "http://localhost:8181/cykelrytter"
restApiHold = "http://localhost:8181/cykelhold"


let cykelTabel = document.getElementById("cykel-tabel")

  function fetchData(url) {
  return fetch(url).then(res => res.json());
}

createTabel();


async function createTabel() {
  const rytterData = await fetchData(restApi);
  const holdData = await fetchData(restApiHold);

  //console.log(JSON.stringify(rytterData));
  cykelTabel.innerHTML += `<tr>
    <th scope="col">#</th>
    <th scope="col">Hold</th>
    <th scope="col">Cykelrytter</th>
    <th scope="col">Samlet tid</th>
    <th scope="col">Bjergpoint</th>
    <th scope="col">Spurtpoint</th>
  </tr>`
  const loop = await fetchData(restApi);
  for (let i = 0; i < loop.length; i++) {
    console.log(rytterData[i].navn);


    cykelTabel.innerHTML += `

    <tbody>
    <tr>
      <td>${rytterData[i].cykelrytterId}</td>
      <td>${rytterData[i].cykelhold.teamnavn}</td>
      <td>${rytterData[i].navn}</td>
      <td>${rytterData[i].samlettid}</td>
      <td>${rytterData[i].bjergpoint}</td>
      <td>${rytterData[i].spurtpoint}</td>
    </tr>
    </tbody>
    `;
  }
}



