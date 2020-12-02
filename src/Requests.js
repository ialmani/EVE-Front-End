import {API_BASE} from "./Config";

export const getBlogs = () => {
    return fetch(API_BASE+'api/blogs').then(response => response.json());
};