function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form = function Form(React, store, Articles, Search) {
  return {
    action: function action(type, value, selectedName) {
      return _defineProperty({ type: type }, selectedName, value);
    },
    onSearch: function onSearch(searchTerm) {
      store.dispatch(this.action("SEARCH_SET", searchTerm, 'searchTerm'));
    },
    filterArticle: function filterArticle(searchTerm, articles) {

      var includes = articles.filter(function (article) {
        return article.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

      if (searchTerm === '' && includes.length === 0) {
        includes = articles;
      }

      store.dispatch(this.action("UPDATE_ARTICLE_SET", includes, 'articles'));

      return includes;
    },
    render: function render() {
      var _this = this;

      var Form = this.props;

      return React.createElement(
        'div',
        { className: "flex-main-div" },
        React.createElement(
          Search,
          { value: Form.searchTerm, onSearch: function onSearch(e) {
              return _this.onSearch(e);
            } },
          React.createElement(
            'p',
            null,
            'Search'
          )
        ),
        React.createElement(Articles, { articles: this.filterArticle(Form.searchTerm, Form.initArticles) })
      );
    }
  };
};

define(['dojo/_base/declare', 'react', "redux", "react-redux", "react-components/Store", "react-components/article/Articles", "react-components/search/Search"], function (declare, React, Redux, ReactRedux, Store, Articles, Search) {

  var mapStateToProps = function mapStateToProps(state) {
    return {
      initArticles: state.articlesState.initArticles,
      searchTerm: state.searchState.searchTerm
    };
  };

  var store = Store.prototype;

  var FormDeclared = declare("Form", [React.Component], Form(React, store, Articles, Search));

  return ReactRedux.connect(mapStateToProps)(FormDeclared);
});