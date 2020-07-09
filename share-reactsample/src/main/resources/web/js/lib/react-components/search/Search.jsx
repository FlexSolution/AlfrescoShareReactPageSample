
define(['dojo/_base/declare','react'], function (declare, React) {

  return declare("Search", [React.Component], {

    render() {
      return (
          <div>
            {this.props.children}
            <input
              value={this.props.value}
              onChange={event => this.props.onSearch(event.target.value)}
              type="text"
              className={"flex-input"}/>
          </div>
      );
    }
  });
});