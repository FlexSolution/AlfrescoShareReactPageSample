define(['dojo/_base/declare'], function (declare) {

  const INITIAL_STATE = {
    initArticles: [
      { id: '0', title: 'EXTRA DASHBOARD LAYOUTS ', url: 'https://flex-solution.com/page/alfresco-solution/extra-layouts' },
      { id: '1', title: 'DOCPROCESSOR INTEGRATION ADD-ON', url: 'https://flex-solution.com/page/alfresco-solution/docprocessor-integration-add-on' },
      { id: '2', title: 'ALFRESCO MULTIDASHBOARDS ADD-ON', url: 'https://flex-solution.com/page/alfresco-solution/alfresco-multidashboards-add-on' },
      { id: '3', title: 'RESET PASSWORD ADD-ON', url: 'https://flex-solution.com/page/alfresco-solution/alfresco-reset-password-add-on' },
      { id: '4', title: 'ALFRESCO SITES LOGO CHANGER', url: 'https://flex-solution.com/page/alfresco-solution/alfresco-site-logo-changer' },
      { id: '5', title: 'ALFRESCO SOCIAL LOGIN ADD-ON', url: 'https://flex-solution.com/page/alfresco-solution/alfresco-social-login-addon' },
      { id: '6', title: 'SELF REGISTRATION ADD-ON', url: 'https://flex-solution.com/page/alfresco-solution/alfresco-sign-up-addon' },
      { id: '7', title: 'ALFRESCO SHARE THEME BUILDER', url: 'https://flex-solution.com/page/alfresco-solution/alfresco-share-theme-builder' },
      { id: '8', title: 'VIEWCOVID', url: 'https://flex-solution.com/page/portfolio/viewcovid' },
      { id: '9', title: 'INTERCHANGE', url: 'https://flex-solution.com/page/portfolio/interchange-alfresco' },
      { id: '10', title: 'RUBBYHASUI', url: 'https://flex-solution.com/page/portfolio/rubbyhasui-vaadin14' },
      { id: '11', title: 'DOCPROCESSOR', url: 'https://flex-solution.com/page/portfolio/docprocessor' },
    ],
  };

  return declare("ArticleReducer", null, {

    articleReducer: function articleReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'UPDATE_ARTICLE_SET':
          return {...state, articles: action.articles};
        case 'RESET' :
          return state = INITIAL_STATE
        default:
          return state;
      }
    }

  });
});