(function(root){
  var _benches = [];
  var CHANGE_EVENT = "change";
  var resetBenches = function (benches) {
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    deleteChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    handleChange: function () {
      this.emit(CHANGE_EVENT);
    },

    render: function () {

    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
        resetBenches(payload.benches);
        BenchStore.handleChange();
      }
    })

  });
})(this);
