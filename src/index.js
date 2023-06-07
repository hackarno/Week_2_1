import "./styles.css";

let tiedot = [
  {
    Username: "Webmaster",
    Email: "example@email.com",
    Address: "Demoland 123",
    Admin: "X",
    Image: ""
  },
  {
    Username: "User123",
    Email: "example@email.com",
    Address: "Userplace 321",
    Admin: "-",
    Image: ""
  },
  {
    Username: "AnotherUser222",
    Email: "example@email.com",
    Address: "AnotherPlace 21",
    Admin: "-",
    Image: ""
  }
];

let table = document.querySelector("table");
let data = Object.keys(tiedot[0]);

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function generateRow(table, lisays) {
  let row = table.insertRow();
  for (let key in lisays) {
    if (key !== "Image") {
      let cell = row.insertCell();
      let text = document.createTextNode(lisays[key]);
      cell.appendChild(text);
    } else if (key === "Image") {
      let cell = row.insertCell();
      let img = document.createElement("img");
      img.setAttribute("src", lisays[key]);
      img.setAttribute("width", "64");
      img.setAttribute("heigth", "64");
      img.setAttribute("alt", "Ladattu kuva");
      cell.appendChild(img);
    }
  }
}

generateTableHead(table, data);
generateTable(table, tiedot);

const submit = document.getElementById("submit-data");
submit.addEventListener("click", function (submitted) {
  submitted.preventDefault(); //prevents form from autosubmitting

  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;
  const address = document.getElementById("input-address").value;
  const admin = document.getElementById("input-admin").value;
  const kuva = document.getElementById("input-image").value;

  for (var i = 1; i < table.rows.length; i++) {
    let testi = table.rows[i].cells[0].innerHTML;
    if (username === testi) {
      table.deleteRow(i);
    }
  }
  let uudetTiedot = {
    Username: username,
    Email: email,
    Address: address,
    Admin: admin,
    Image: kuva
  };
  generateRow(table, uudetTiedot);
});

const empty = document.getElementById("empty-data");
empty.addEventListener("click", function () {
  console.log("Empty");
  for (var i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }
});
