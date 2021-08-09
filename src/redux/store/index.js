import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers/index'
import authEpic from '../epics/authEpics'

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  authEpic,
)

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware, epicMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  epicMiddleware.run(rootEpic)
  return store
}
