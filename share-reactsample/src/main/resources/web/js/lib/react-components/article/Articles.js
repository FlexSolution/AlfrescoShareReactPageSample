var Articles = function Articles(React, Article) {
  return {
    render: function render() {
      var articles = this.props;
      return React.createElement(
        'ul',
        { className: "flex-ul" },
        articles.articles.map(function (article) {
          return React.createElement(
            'li',
            { key: article.id },
            React.createElement(Article, { article: article })
          );
        })
      );
    }
  };
};

define(['dojo/_base/declare', 'react', "redux", "react-redux", "react-components/article/Article"], function (declare, React, Redux, ReactRedux, Article) {

  return declare("Articles", [React.Component], Articles(React, Article));
});