import axios from "axios";
import queryString from "query-string";

type MethodTypes = "get" | "delete" | "head" | "options";
type MethodTypesWithBody = "post" | "put" | "patch";

type SortObject = {
    field: string;
    order: "desc" | "asc";
};

const axiosInstance = axios.create();

class BaseQueryService {
    resource;
    constructor(resource: string) {
        this.resource = resource;
    }

    static getList() {
        return axiosInstance.get(this.resource);
    }

    static getOne(id: string) {
        return axiosInstance.get(`${this.resource}/${id}`);
    }
}

function generateSort(sorters: SortObject[]) {
    return sorters.map((it) => `${it.field}${(it.order === "desc" && "-") || ""}`).join(",");
}

export const dataProvider = (apiUrl: string) => ({
    getList: async ({ resource, pagination, sorters, filters }) => {
        const { current: page = 1, pageSize = 100 } = pagination ?? {};
        const query: {
            page?: number;
            per_page?: number;
            order?: string;
            where?: string;
            limit?: number;
            token?: string;
        } = {
            page,
            per_page: pageSize,
        };

        if (sorters && generateSort(sorters)) {
            query.order = generateSort(sorters);
        }

        if (pageSize) {
            query.limit = pageSize;
        }

        if (filters) {
            query.where = JSON.stringify(filters);
        }

        const url = `${apiUrl}/${resource}`;
        const { data } = await axiosInstance.get(`${url}/?${queryString.stringify(query)}`, {
            headers: {
                Authorization: "iskksioskassyidd",
            },
        });
        const total = data.total;

        return {
            data: data.items,
            total,
            hasMore: data.hasMore ? data.hasMore : null,
            token: data.token ? data.token : null,
        };
    },

    getOne: async ({ resource, id, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        const { data } = await axiosInstance[requestMethod](url, { headers });
        return {
            data: data?.item,
        };
    },

    create: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}/`;
        const { data } = await axiosInstance.post(url, variables);
        return {
            data,
        };
    },

    deleteOne: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "delete";

        const { data } = await axiosInstance[requestMethod](url, {
            data: variables,
            headers,
        });

        return {
            data,
        };
    },

    getApiUrl(): string {
        return apiUrl;
    },

    update: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "patch";

        const { data } = await axiosInstance[requestMethod](url, variables, {
            headers,
        });

        return {
            data,
        };
    },
});
