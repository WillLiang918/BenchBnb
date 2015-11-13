ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax ({
        url: 'api/bench',
        type: 'GET',
        dataType: 'json',
        data: {bounds: bounds},
        success: function (data) {
          ApiActions.receiveAll(data);
        }
    });
  }
};
