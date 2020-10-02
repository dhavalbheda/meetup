import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => {
   return <Router>
        <Route path='/meetup' exact component={Join}/>
        <Route path='/meetup/chat' component={Chat}/>
		<Route component={Join}/>
    </Router>
}
export default App