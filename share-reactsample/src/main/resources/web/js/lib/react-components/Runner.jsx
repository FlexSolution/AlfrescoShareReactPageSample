require([
  `react`,
  `react-dom`,
  "redux",
  "react-redux",
  'react-components/Form',
  'react-components/Store'
], function (React, ReactDOM, Redux, ReactRedux, Form, Store) {

  let store = Store.prototype;

  ReactDOM.render(
      <ReactRedux.Provider store={store}>
        <Form />
      </ReactRedux.Provider>,

      document.getElementById('reactRender')
  );
});
