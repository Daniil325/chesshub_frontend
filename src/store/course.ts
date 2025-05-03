import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: "course",
    tagTypes: ["Courses"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (build) => ({
        getCourses: build.query({
            query: (
                page = 0,
                perPage = 10,
                orderBy = "pub_date",
                filter = ""
            ) =>
                `course/?limit=${perPage}&offset=${page}&order_by=${orderBy}&filter=${filter}`,
        }),
        createCourse: build.mutation({
            query: (body) => ({
                url: "course",
                method: "POST",
                body
            })
        })
    }),
});
