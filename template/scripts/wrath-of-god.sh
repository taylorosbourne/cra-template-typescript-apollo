#!/bin/bash

rebuild_index () {
	echo "import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
	uri: '', // http://localhost:your-gql-server
});

export const App: FC = () => (
	<Router>
			<Switch>
				<Route exact path='/' render={() => <h1>You blew it up... you blew it all up.</h1>} />
			</Switch>
	</Router>
);

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
" >> index.tsx

	touch assets/.gitkeep components/.gitkeep containers/.gitkeep hooks/.gitkeep pages/.gitkeep styles/.gitkeep typings/.gitkeep
}

obliterate () {
  # Confirm src dir exists
  if [ -e "src" ]; then
      cd "src"
  else
      echo "No src Dir"
  fi

	# BLOW IT ALL AWAY
  rm -rf assets/* components/* containers/* hooks/* pages/* styles/* typings/* index.tsx

	rebuild_index
}

echo "Do you wish to unleash the wrath of god?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) obliterate; break;;
        No ) exit;;
    esac
done
