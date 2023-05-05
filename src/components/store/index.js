import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authentication';
import mailReducer from './mail'

const store = configureStore({
    reducer : {
        auth : authReducer,
        mails : mailReducer
    }
});

export default store;