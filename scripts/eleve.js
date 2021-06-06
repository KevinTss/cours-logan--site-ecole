const data = {
  eleves: [],
  search: [],
};
const tableBody = document.getElementById('table-body');

function displayEleves(eleves) {
  let content = '';
  eleves.forEach(function (element) {
    content += `
    <tr>
      <td>${element.nom}</td>
      <td>${element.prenom}</td>
      <td>${element.date}</td>
      <td>${element.classe}</td>
    </tr>
    `;
  });
  tableBody.innerHTML = content;
}

fetch('../data/eleves.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    data.eleves = response.eleves;
    displayEleves(data.eleves);
  });

const form = document.getElementById('form');
const nomInput = document.getElementById('nom');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const value = nomInput.value;

  if (!value) {
    return;
  }

  data.search = [];

  data.eleves.forEach(function (eleve) {
    if (eleve.nom.includes(value)) {
      data.search.push(eleve);
    }
  });

  console.log('res', data.search);
  displayEleves(data.search);
});
