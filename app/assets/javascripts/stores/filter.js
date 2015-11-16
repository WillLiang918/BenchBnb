(function (root) {
  var _filter_params = {minSeats: 1, maxSeats: 10}; // {bounds: "", min: "", max: ""}
  var CHANGE_EVENT = "change";
  var resetFilters = function (filter) {
    _filter_params.bounds = filter;
  };
  var updateMinSeats = function (newMin) {
    _filter_params.minSeats = newMin;
  };
  var updateMaxSeats = function (newMax) {
    _filter_params.maxSeats = newMax;
  };

  root.FilterParamsStore = $.extend( {}, EventEmitter.prototype, {

    handleChange: function () {
      this.emit(CHANGE_EVENT);
      ApiUtil.fetchBenches(FilterParamsStore.all());
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    deleteChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _filter_params;
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BenchConstants.FILTER_PARAMS:
          resetFilters(payload.filterParams);
          FilterParamsStore.handleChange();
          break;
        case BenchConstants.UPDATE_MIN_SEATS:
          updateMinSeats(payload.filterParams);
          FilterParamsStore.handleChange();
          break;
        case BenchConstants.UPDATE_MAX_SEATS:
          updateMaxSeats(payload.filterParams);
          FilterParamsStore.handleChange();
          break;
      }
    })

});



})(this);
