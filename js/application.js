// React Components
var TripDetails = React.createClass({
  render: function() {
    return(
      <section id="trip-details">
        <h1>{this.props.details.name}</h1>
        <ul>
          <li>Origin: {this.props.details.origin}</li>
          <li>Destination: {this.props.details.destination}</li>
        </ul>
      </section>
    );
  }
});

var StatesList = React.createClass({
  stateListItems: function() {
    return this.props.states.map(function(state) {
      if (state.seen) {
        return(<SeenStateItem key={state.name.toLowerCase()} state={state} />)
      } else {
        return(<UnseenStateItem key={state.name.toLowerCase()} state={state} />)
      }
    });
  },

  render: function() {
    return (
      <section>
        <ul id="states-list">
          {this.stateListItems()}
        </ul>
      </section>
    );
  }
});

var UnseenStateItem = React.createClass({
  render: function() {
    return(
      <li>{this.props.state.name}</li>
    )
  }
});

var SeenStateItem = React.createClass({
  render: function() {
    return(
      <li>
        {this.props.state.name}: has been seen!!
      </li>
    )
  }
});

var TripComponent = React.createClass({
  render: function() {
    return(
      <div>
        <TripDetails details={this.props.trip.tripDetails()} />
        <StatesList  states={this.props.trip.states} />
      </div>
    );
  }
});


// Initializing the application
var states = USStateListCreator();
states[1].seen = true
var trip   = new Trip("Spring Break", "Toledo", "Brooklyn", states);

ReactDOM.render(
  <TripComponent trip={trip} />,
  document.getElementById('trip-container')
);
