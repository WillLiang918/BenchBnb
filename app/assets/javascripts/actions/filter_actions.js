FilterActions = {
  FilterBenches: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.FILTER_BENCHES,
      benches: benches
    });
  },
};
