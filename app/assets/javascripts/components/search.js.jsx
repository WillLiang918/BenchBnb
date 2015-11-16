window.Search = React.createClass ({
  getInitialState: function () {
    return { params: FilterStore.all() };
    // return {lat: "", lng: ""};
  },

  clickMapHandler: function (coords) {
    this.coords = {lat: coords.lat(), lng:coords.lng()};
    this.props.history.pushState(null, "/benches/new", this.coords);
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FilterStore.deleteChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({params: FilterStore.all() });
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}
         onClick={this.clickMapHandler}/>
        <Index />
      </div>
    );
  }
});
