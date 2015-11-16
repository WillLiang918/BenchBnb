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

  render: function () {
    return <div>
      <ul className="bench-list">
      {
        BenchStore.all().map( function (bench, idx) {
          return <li key={idx}>{bench.description}</li>;
        })
      }
      </ul>
    </div>;
  }
});
