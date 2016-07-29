var Trip = function(name, origin, destination, states) {
  this.name = name;
  this.origin = origin;
  this.destination = destination;
  this.states = states;
}

Trip.prototype.tripDetails = function() {
  return { name: this.name, origin: this.origin, destination: this.destination }
}
