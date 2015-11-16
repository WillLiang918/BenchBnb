(function (root) {
  var _filter = []; // {bounds: "", min: "", max: ""}
  var CHANGE_EVENT = "change";

  root.FilterStore = $.extend( {}, EventEmitter.prototype, {

    handleChange: function () {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    deleteChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      this._filter.slice();
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BenchConstants.FILTER_BENCHES:
          resetBenches(payload.benches);
          FilterStore.handleChange();
          break;
      }
    })

});



})(this);
