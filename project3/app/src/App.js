import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Build from './Build'
import List from './List'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/build" exact component={Build} />
                <Route path="/list" exact component={List} />
            </Switch>
        </BrowserRouter>
    )
}

export default App