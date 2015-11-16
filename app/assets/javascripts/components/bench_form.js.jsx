window.BenchForm = React.createClass ({
  getInitialState: function () {
    var coords = this.props.location.query;
    return {lat: coords.lat, lng: coords.lng, description: ""};
  },
  createBench: function (event) {
    event.preventDefault();
    var bench = this.state;
    ApiUtil.createBench(bench);
    this.setState({lat: "", lng: "", description: ""});
    this.props.history.pushState(null, "/");
  },

  updateLat: function (event) {
    this.setState({lat: parseFloat(event.currentTarget.value)});
  },

  updateLng: function (event) {
    this.setState({lng: parseFloat(event.currentTarget.value)});
  },

  updateDescription: function (event) {
    this.setState({description: event.currentTarget.value});
  },

  render: function () {
    return (
      <form className="new-bench" onSubmit={this.createBench}>
        <div>
          <label>Lat</label>
            <input
              type="text"
              id="bench_lat"
              value={this.state.lat}
              placeholder="Bench Lat"
              onChange={this.updateLat}
            />
        </div>
        <div>
          <label>Lng</label>
            <input
              type="text"
              id="bench_lng"
              value={this.state.lng}
              placeholder="Bench Lng"
              onChange={this.updateLng}
            />
        </div>
        <div>
          <label>Description</label>
            <input
              type="text"
              id="bench_description"
              value={this.state.description}
              placeholder="Bench Description"
              onChange={this.updateDescription}
            />
        </div>
        <button>Create Bench</button>
        <br />
      </form>
    );
  }
});
