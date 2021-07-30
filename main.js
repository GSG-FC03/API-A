const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.setAttribute("class", "container");
let arr = [];
fetch("https://ghibliapi.herokuapp.com/people")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pepole) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      container.appendChild(card);
      // create h1 to set tittle in it
      const header = document.createElement("h1");
      header.setAttribute("class", "title");
      card.appendChild(header);
      header.textContent = pepole.name;

      const paragraph = document.createElement("p");
      paragraph.setAttribute("class", "paragraph");
      card.appendChild(paragraph);
      const information = {
        age: pepole.age,
        gender: pepole.gender,
        eye_color: pepole.eye_color,
        hair_color: pepole.hair_color,
      };
      paragraph.textContent = JSON.stringify(information, null, 10);
    });
  })
  .catch();
