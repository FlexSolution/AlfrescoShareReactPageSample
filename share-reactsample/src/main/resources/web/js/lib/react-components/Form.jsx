const Form = (React,
              store,
              Articles,
              Search) => {
  return {

    action(type, value, selectedName) {
      return { type: type, [selectedName]: value};
    },

    onSearch(searchTerm) {
      store.dispatch(this.action("SEARCH_SET", searchTerm, 'searchTerm'));
    },

    filterArticle(searchTerm, articles) {
      let includes = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));

      if (searchTerm === '' && includes.length === 0 ) {
        includes = articles;
      }

      store.dispatch(this.action("UPDATE_ARTICLE_SET", includes, 'articles'));

      return includes;
    },


    render() {
      const Form = this.props;

      return (
      <div className={"flex-main-div"}>
        <Search value={Form.searchTerm} onSearch={e => this.onSearch(e)}>
          <p>Search</p>
        </Search>

        <Articles articles={this.filterArticle(Form.searchTerm, Form.initArticles)}/>

      </div>
      );
    }
  }
};

define([
  'dojo/_base/declare',
  'react',
  'redux',
  'react-redux',
  'react-components/Store',
  'react-components/article/Articles',
  'react-components/search/Search',

], function (declare,
             React,
             Redux,
             ReactRedux,
             Store,
             Articles,
             Search) {

  const mapStateToProps = state => ({
    initArticles: state.articlesState.initArticles,
    searchTerm: state.searchState.searchTerm,
  });

  let store = Store.prototype;

  let FormDeclared = declare(
      "Form",
      [React.Component],
      Form(React,
          store,
          Articles,
          Search));

  return ReactRedux.connect(mapStateToProps)(FormDeclared)

});