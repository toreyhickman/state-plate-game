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
        return(<UnseenStateItem key={state.name.toLowerCase()} state={state} onStateItemClick={this.props.onStateItemClick} />)
      }
    }, this);
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
  markStateSeen: function() {
    this.props.state.seen = true;
    this.props.onStateItemClick();
  },

  render: function() {
    return(
      <li onClick={this.markStateSeen}>{this.props.state.name}</li>
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
  getInitialState: function() {
    var states = USStateListCreator();
    var trip   = new Trip("Spring Break", "Toledo", "Brooklyn", states);

    return {
      trip: trip
    }
  },

  reassignTrip: function(){
    this.setState({trip: this.state.trip});
  },

  render: function() {
    return(
      <div>
        <TripDetails details={this.state.trip.tripDetails()} />
        <StatesList  states={this.state.trip.states} onStateItemClick={this.reassignTrip} />
      </div>
    );
  }
});


// Initializing the application
ReactDOM.render(
  <TripComponent />,
  document.getElementById('trip-container')
);
