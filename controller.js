const order = (bikeId) => {
  for (let i = 0; i < model.bikes.length; i++) {
    if (bikeId == model.bikes[i].id) {
      model.bikes[i].inUse = true;
      model.curentRide = bikeId;
    }
  }

  updateMain();
};

const returnBike = () => {
  for (let i = 0; i < model.bikes.length; i++) {
    if (model.bikes[i].id == model.curentRide) {
      model.bikes[i].inUse = false;
    }
  }
  model.curentRide = undefined;
  updateMain();
};
