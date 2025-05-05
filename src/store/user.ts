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
        loginUser: build.mutation({
            query: (body) => ({
                url: "user/login",
                method: "POST",
                body,
            })
        }),
        getProfile: build.query({
            query: (username) => ({ url: `user/profile/${username}`, method: "GET" }),
        }),
        updateProfile: build.mutation({
            query: (body) => ({
                url: `user/profile/${body['username']}`,
                method: "PATCH",
                body
            })
        })
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
            return {
                ...state,
                isLogin: true,
                username: action.payload.username,
                role: action.payload.role,
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
