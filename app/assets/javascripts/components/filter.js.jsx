window.Filter = React.createClass({
  getInitialState: function () {
    return {minSeats: 1, maxSeats: 10};
  },

  updateMinSeats: function (event) {
    var newMin = event.currentTarget.value;
    this.setState({minSeats: newMin});
    FilterActions.UpdateMinSeats(newMin);
  },

  updateMaxSeats: function (event) {
    var newMax = event.currentTarget.value;
    this.setState({maxSeats: newMax});
    FilterActions.UpdateMaxSeats(newMax);
  },

  render: function () {
    return (
      <div>
        <div>
          <label>Min Seats</label>
          <input
          type="text"
          id="minSeats"
          onChange={this.updateMinSeats}/>
        </div>

        <div>
          <label>Max Seats</label>
          <input
          type="text"
          id="maxSeats"
          onChange={this.updateMaxSeats}/>
        </div>
      </div>
    );
  }

});
