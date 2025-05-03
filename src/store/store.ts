import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
import { courseApi } from "./course";
import { userApi, userReducer } from "./user";

const rootReducer = combineReducers({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer,
        [articleApi.reducerPath]: articleApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        user: userReducer,
    },
});

export const store = configureStore({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer,
        [articleApi.reducerPath]: articleApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        loginUser: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(articleApi.middleware)
            .concat(userApi.middleware)
            .concat(courseApi.middleware),
});
