import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import PageSpinner from '../common/PageSpinner';

const GameOfThronesContainer = React.lazy(() => import('../containers/gameOfThronesContainer'));

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flag: true };
    }

    
    render() {
        
        return (
            <React.Fragment>
                <ErrorBoundary>
                    <Switch>
                    <React.Suspense fallback={<PageSpinner />}>
                            <Route exact path="/characters/:id"
                                render={props => <GameOfThronesContainer {...props} />} />
                            <Route exact path="/books/:id"
                                render={props => <GameOfThronesContainer {...props} />} />
                            </React.Suspense>
                    </Switch>
                </ErrorBoundary>
            </React.Fragment>
        );
    }
}

// Just for example, later it will be removed
export default MainPage
