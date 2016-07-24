// React Components
var TripComponent = React.createClass({
  componentDidMount: function() {
    console.log(this.props.trip)
  },

  render: function() {
    return(
      <div>
        <section id="trip-details">
          <h1>{this.props.trip.name}</h1>
          <ul>
            <li>Origin: {this.props.trip.origin}</li>
            <li>Destination: {this.props.trip.destination}</li>
          </ul>
        </section>
        <section>
          <ul id="states-list">
            { this.props.trip.states.map(function(state) {
                return(
                  <li key={state.name.toLowerCase()}>{state.name}</li>
                )
              })
            }
          </ul>
        </section>
      </div>
    );
  }
});


// Initializing the application
var states = USStateListCreator();
var trip   = new Trip("Spring Break", "Toledo", "Brooklyn", states);

ReactDOM.render(
  <TripComponent trip={trip} />,
  document.getElementById('state-list')
);
