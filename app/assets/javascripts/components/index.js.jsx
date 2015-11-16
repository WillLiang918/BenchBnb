window.Index = React.createClass ({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  redirectToShowPage: function () {
    debugger
  },

  render: function () {
    return <div>
      <ul className="bench-list">
      {
        BenchStore.all().map( function (bench, idx) {
          return <li key={idx} onClick={this.redirectToShowPage}>{bench.description}</li>;
        })
      }
      </ul>
    </div>;
  }
});
