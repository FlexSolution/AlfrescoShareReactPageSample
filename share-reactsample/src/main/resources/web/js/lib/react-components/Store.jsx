define([
  'dojo/_base/declare',
  'react',
  'redux',
  'react-redux',
  'react-components/Reducer'], function (declare,
                                    React,
                                    Redux,
                                    ReactRedux,
                                    Reducer) {

  const store = Redux.createStore(Reducer.prototype.rootReducer());

  return declare("Store", null, store);

});