import {API_BASE} from "./config";

export const getBlogs = () => {
    return fetch(API_BASE+'api/').then(response => response.json());
};