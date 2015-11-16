window.Map = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.markers = [];
    this.map = new google.maps.Map(map, mapOptions);
    this.listenForMove();
    BenchStore.addChangeListener(this.onChange);
    google.maps.event.addListener(this.map, "click", function (event) {
      this.clickMapHandler(event.latLng);
    }.bind(this));
  },

  componentWillUnmount: function () {
    BenchStore.deleteChangeListener(this.onChange);
  },

  listenForMove: function () {
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = {
        lat: bounds.getNorthEast().lat(),
        lgn: bounds.getNorthEast().lng()
      };
      var southWest = {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
      };
      bounds = { northEast: northEast, southWest: southWest};
      ApiUtil.fetchBenches(bounds);
    });
  },

  onChange: function () {
    this.removeMarkers();
    BenchStore.all().forEach( function (bench) {
      var myLatLng = {lat: bench.lat, lng: bench.lng};
      var marker = new google.maps.Marker({
        position: myLatLng,
        name: bench.description,
        map: this.map
      });
      this.markers.push(marker);
    }.bind(this));
  },

  removeMarkers: function () {
    this.markers.forEach( function (marker) {
      marker.setMap(null);
    });
  },

  clickMapHandler: function (event) {
    this.props.clickMapHandler(event);
  },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});
