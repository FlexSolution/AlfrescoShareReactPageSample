const Articles = (
              React,
              Article) => {
  return {

    render() {
      const articles = this.props;
      return (
          <ul className={"flex-ul"}>
            {articles.articles.map(article =>
                <li key={article.id}>
                  <Article article={article} />
                </li>
            )}
          </ul>
      );
    }
  }
};

define([
  'dojo/_base/declare',
  'react',
  'redux',
  'react-redux',
  'react-components/article/Article'
    ], function (declare, React, Redux, ReactRedux, Article) {

  return declare(
      "Articles",
      [React.Component],
      Articles(React,
          Article));
});