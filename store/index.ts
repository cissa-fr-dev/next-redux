import { combineReducers, createStore } from 'redux';
import titleReducer from './modules/title';

const rootReducer = combineReducers({
  title: titleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
