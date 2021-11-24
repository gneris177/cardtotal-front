const tableLine = document.querySelector(".tableLine");

const api = "https://totalcard.herokuapp.com/carddata";

let data;

fetch(api, {
  // mode: 'no-cors',
  method: "GET",
  headers: {
    Accept: "application/json",
  },
}).then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      render(json);
    });
  }
});

function render(data) {
  data.forEach((element) => {
    tableLine.innerHTML += `
    <tr >
        <td>${element.name}</td>
        <td>${element.msg}</td>
        <td>${element.cardId}</td>
    </tr>
      `;
  });
}
