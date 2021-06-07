const data = {
  eleves: [
    {
      nom: 'Maus',
      prenom: 'Henry',
      date: '01-01-2021',
      classe: '6TQ-INFO',
    },
    {
      nom: 'Le grand',
      prenom: 'Kevin',
      date: '01-01-2021',
      classe: '6TQ-INFO',
    },
  ],
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

const form = document.getElementById('form');
const resetButton = document.getElementById('reset-button');
const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nomValue = nomInput.value;
  const prenomValue = prenomInput.value;

  if (!nomValue && !prenomValue) {
    return;
  }

  data.search = [];

  data.eleves.forEach(function (eleve) {
    const valueNameFormatted = nomValue.trim().toLowerCase();
    const nameFormatted = eleve.nom.trim().toLowerCase();
    const valuePrenomFormatted = prenomValue.trim().toLowerCase();
    const prenomFormatted = eleve.prenom.trim().toLowerCase();

    const isNomMatch =
      valueNameFormatted !== '' && nameFormatted.includes(valueNameFormatted);
    const isPrenomMatch =
      valuePrenomFormatted !== '' &&
      prenomFormatted.includes(valuePrenomFormatted);

    if (isNomMatch || isPrenomMatch) {
      data.search.push(eleve);
    }
  });

  displayEleves(data.search);
});

resetButton.addEventListener('click', function () {
  data.search = [];
  displayEleves(data.eleves);
  nomInput.value = '';
  prenomInput.value = '';
});

(function () {
  displayEleves(data.eleves);
})();
