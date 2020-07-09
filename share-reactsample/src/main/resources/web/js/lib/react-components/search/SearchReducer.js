define(['dojo/_base/declare'], function (declare) {

  var INITIAL_STATE = {
    searchTerm: ''
  };

  return declare("SearchReducer", null, {

    searchReducer: function searchReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
      var action = arguments[1];

      switch (action.type) {
        case 'SEARCH_SET':
          return Object.assign({}, state, { searchTerm: action.searchTerm });
        default:
          return state;
      }
    }

  });
});