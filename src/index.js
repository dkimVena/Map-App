import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createHttpLink } from 'apollo-link-http';

import Layout from './components/Layout';
import App from './components/App';

import './index.scss';

const link = createHttpLink({
  uri: 'https://countries.trevorblades.com',
  credentials: 'same-origin'
});

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

const client = new ApolloClient({
  link,
  cache
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </Layout>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
