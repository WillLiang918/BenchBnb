ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  createBench: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.CREATE_BENCH,
      bench: bench
    });
  },
};
