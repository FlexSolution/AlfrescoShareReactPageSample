define(['dojo/_base/declare'], function (declare) {

  const INITIAL_STATE = {
    searchTerm: '',
  };

  return declare("SearchReducer", null, {

    searchReducer: function searchReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'SEARCH_SET':
          return {...state, searchTerm: action.searchTerm};
        default:
          return state;
      }
    }

  });
});