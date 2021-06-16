import * as React from 'react';
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import List from "./client/home"
import Edit from "./client/edit"
//add to home/edit

class App extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Router>
                <>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={List} />
                            {/* Check to see if route path has to change for edit */}
                            <Route exact path="/editing/:id" component={Edit} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    userName: string;
}
export default App;