require(["react", "react-dom", "redux", "react-redux", 'react-components/Form', 'react-components/Store'], function (React, ReactDOM, Redux, ReactRedux, Form, Store) {

  var store = Store.prototype;

  ReactDOM.render(React.createElement(
    ReactRedux.Provider,
    { store: store },
    React.createElement(Form, null)
  ), document.getElementById('reactRender'));
});