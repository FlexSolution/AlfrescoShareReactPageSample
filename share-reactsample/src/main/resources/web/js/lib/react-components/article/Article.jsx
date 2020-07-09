define(['dojo/_base/declare','react'], function (declare, React) {

  return declare("Article", [React.Component], {

    render() {
      return (
          <a target="_blank" rel="noopener noreferrer" href={this.props.article.url}>
            {this.props.article.title}
          </a>
      );
    }
  });
});