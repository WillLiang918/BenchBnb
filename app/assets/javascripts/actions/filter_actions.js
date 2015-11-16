FilterActions = {
  FilterParams: function (filterParams) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.FILTER_PARAMS,
      filterParams: filterParams
    });
  },


  UpdateMaxSeats: function (filterParams) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.UPDATE_MAX_SEATS,
      filterParams: filterParams
    });
  },

  UpdateMinSeats: function (filterParams) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.UPDATE_MIN_SEATS,
      filterParams: filterParams
    });
  },

};
