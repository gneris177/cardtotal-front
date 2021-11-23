const cards = document.querySelectorAll(".card");
const colors = [
  "#ff7f50",
  "#ff47f50",
  "#87cefa",
  "#da70d6",
  "#da7111d9",
  "#ca70d6",
  "#32cd32",
  "#ff69b4",
  "#ba55d3",
  "#ccc",
  "#ffa500",
  "#40e0d0",
];

cards.forEach((elem, i) => {
  elem.style.background = colors[i];
});

const getId = async (thisElement, id) => {
  try {
    const api = "https://totalcard.herokuapp.com/card";
    const title = thisElement.querySelector('h3').innerText;
    
    const name = prompt(`Você clicou no card: ${title}...\nDigte o seu nome para continuar?`);

    const cardInfo = {
      name: name,
      cardId: id,
    };

    const res = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(cardInfo),
    });

    if(res.status === 200) alert("Sucesso!!");
    console.log(res);
  } catch (error) {
    console.log(error);
    alert("Deu erro!!")
  }
};
