window.Search = React.createClass ({
  getInitialState: function () {
    return { params: FilterParamsStore.all() };
    // return {lat: "", lng: ""};
  },

  clickMapHandler: function (coords) {
    this.coords = {lat: coords.lat(), lng:coords.lng()};
    this.props.history.pushState(null, "/benches/new", this.coords);
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FilterParamsStore.deleteChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({params: FilterParamsStore.all() });
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}
         onClick={this.clickMapHandler}/>
        <Index />
        <Filter />
      </div>
    );
  }
});
