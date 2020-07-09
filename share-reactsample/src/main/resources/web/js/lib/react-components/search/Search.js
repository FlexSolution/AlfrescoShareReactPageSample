
define(['dojo/_base/declare', 'react'], function (declare, React) {

  return declare("Search", [React.Component], {
    render: function render() {
      var _this = this;

      return React.createElement(
        'div',
        null,
        this.props.children,
        React.createElement('input', {
          value: this.props.value,
          onChange: function onChange(event) {
            return _this.props.onSearch(event.target.value);
          },
          type: 'text',
          className: "flex-input" })
      );
    }
  });
});