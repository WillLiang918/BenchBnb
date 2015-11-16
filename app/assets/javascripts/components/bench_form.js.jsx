window.BenchForm = React.createClass({
  render: function () {
    return (
      <form className="new-bench" onSubmit={this.createBench}>
        <div>
          <label>Lat</label>
            <input
              type="text"
              id="bench_lat"
            />
        </div>
        <div>
          <label>Lng</label>
            <input
              type="text"
              id="bench_lng"
            />
        </div>
        <div>
          <label>Description</label>
            <input
              type="text"
              id="bench_description"
            />
        </div>
      </form>
    );
  }
});
