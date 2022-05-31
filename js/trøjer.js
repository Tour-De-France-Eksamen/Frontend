restApi = "http://localhost:8181/cykelrytter";


let cykelTabel = document.getElementById("trøje-tabel");

function fetchData(url) {
  return fetch(url).then(res => res.json());
}


async function opretRytterTabel() {
  const rytterData = await fetchData(restApi);


  cykelTabel.innerHTML += `<tr>
    <th scope="col">Trøje</th>
    <th scope="col">Hold</th>
    <th scope="col">Cykelrytter</th>
    <th scope="col">Nationalitet</th>
    <th scope="col">Samlet tid</th>
    <th scope="col">Bjergpoint</th>
    <th scope="col">Spurtpoint</th>
  </tr>`

  const loop = await fetchData(restApi);
  for (let i = 0; i < 1; i++) {
    let splitTid = rytterData[i].samlettid;
    splitTid = splitTid.toString();
    let tid = splitTid.slice(0, 2) + " timer " + splitTid.slice(2, 4) + " minuter " + splitTid.slice(0, 2) + " sekunder ";
    cykelTabel.innerHTML += `

    <tbody>
    <tr>
      <td>Gul trøje</td>
      <td>${rytterData[11].cykelhold.teamnavn}</td>
      <td>${rytterData[11].navn}</td>
      <td>${rytterData[11].nationalitet}</td>
      <td>${tid}</td>
      <td>${rytterData[11].bjergpoint}</td>
      <td>${rytterData[11].spurtpoint}</td>
    </tr>
    </tbody>
    `;
  }
}
opretRytterTabel();



