import {API_BASE} from "./Config";

export const getAllArticles = () => {
    return fetch(API_BASE+'articles').then(response => response.json());
};

export const getArticle = (id) => {
    return fetch(API_BASE+'articles/'+id).then(response => response.json());
};