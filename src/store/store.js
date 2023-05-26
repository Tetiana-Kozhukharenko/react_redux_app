import { createStore } from 'redux';
import publicationReducer from './reducers/publicationReducer';

const store = createStore(publicationReducer);

export default store;