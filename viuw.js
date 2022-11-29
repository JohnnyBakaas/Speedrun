const app = document.getElementById("app");

const updateMain = () => {
  let theHTML = "<h1>Sykkel greier</h1>";
  for (let i = 0; i < model.bikes.length; i++) {
    theHTML += displayBikes(model.bikes[i]);
  }
  theHTML += userBike();
  app.innerHTML = theHTML;
};

const displayBikes = (bike) => {
  let out = "<div> ";

  out += bike.id;
  if (model.curentRide) return "";
  if (bike.inUse) {
    out += `<p style="color:red">Sykkel er i bruk</p>`;
    out += "</div>";
    return out;
  }
  out += `<p style="color:green">Sykkel er ikke i bruk</p>`;
  out += `<button onclick="order(${bike.id})" >Bestill</button>`;
  out += "</div>";
  return out;
};

const userBike = () => {
  if (!model.curentRide) return "";
  let theHTML = `<p>Du leier ${model.curentRide} </p>`;
  theHTML += `<button onclick="returnBike()">Avslutt leie</button>`;
  return theHTML;
};
