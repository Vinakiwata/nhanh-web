import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers/index'
import authEpic from '../epics/authEpics'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  authEpic,
)
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware, epicMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(persistedReducer, preloadedState, composedEnhancers)
  const persistor = persistStore(store)
  epicMiddleware.run(rootEpic)
  return { store, persistor }
}
