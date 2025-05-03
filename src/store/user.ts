import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "user",
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (body) => ({
                url: "user/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

const userState = {
    username: "",
    isLogin: false,
    role: "",
    id: ""
};

export function userReducer(state = userState, action) {
    switch (action.type) {
        case "AUTH":
            console.log(action)
            return {
                ...state,
                isLogin: true,
                username: action.payload,
                role: action.payload,
                id: action.payload
            };
        case "LOGOUT":
            return { ...userState };
        default:
            return { ...state };
    }
}

export const authUser = (userData) => ({
    type: "AUTH",
    payload: userData,
});
