window.ApiUtil = {
  fetchBenches: function (benches) {
    $.ajax ({
        url: 'api/bench',
        type: 'GET',
        dataType: 'json',
        data: {benches: benches},
        success: function (data) {
          ApiActions.receiveAll(data);
        }
    });
  },

  createBench: function (bench) {
    $.ajax ({
        url: 'api/bench',
        method: 'POST',
        data: {bench: bench},
        success: function (data) {
          ApiActions.createBench(data);
        }
    });
  }
};
