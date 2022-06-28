import { createStore, applyMiddleware } from 'redux';	
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

    // convert object to string and store in localStorage
    function saveToLocalStorage(state) {
        try {
            const serialisedState = JSON.stringify(state);
            localStorage.setItem("persistantState", serialisedState);
        } catch (e) {
            console.warn(e);
        }
    }
  
    // load string from localStarage and convert into an Object
    // invalid output must be undefined
    function loadFromLocalStorage() {
        try {
            const serialisedState = localStorage.getItem("persistantState");
            if (serialisedState === null) return undefined;
            return JSON.parse(serialisedState);
        } catch (e) {
            console.warn(e);
            return undefined;
        }
    }



const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(logger, thunk));
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store; 