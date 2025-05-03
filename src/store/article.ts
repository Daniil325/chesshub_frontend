import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
    reducerPath: "articles",
    tagTypes: ["Articles"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (build) => ({
        getArticles: build.query({
            query: (
                page = 0,
                perPage = 10,
                orderBy = "pub_date",
                filter = null
            ) =>
                `article/?limit=${perPage}&offset=${page}&order_by=${orderBy}${
                    filter ? `&filter=${filter}` : ""
                }`,
        }),
        createArticle: build.mutation({
            query: (body) => ({
                url: "article",
                method: "POST",
                body,
            }),
        }),
        getArticle: build.query({
            query: (username) => ({ url: `user/profile/${username}`, method: "GET" }),
        }),
    }),
});
