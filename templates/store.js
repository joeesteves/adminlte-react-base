import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
//reducers
import reducers from './reducers'
const middleware = routerMiddleware(browserHistory)

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }), composeWithDevTools(applyMiddleware(middleware))
)
const history = syncHistoryWithStore(browserHistory, store)
// FixLayouts when changing route TODO fix with css
history.listen(() => setTimeout(() => window.fixLayout(), 1))

export { store, history }

