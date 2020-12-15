import {API_BASE} from './Config';

export const getAllArticles = () => {
    return fetch(API_BASE+'articles').then(response => response.json());
};

export const getArticle = (id) => {
    return fetch(API_BASE+'articles/'+id).then(response => response.json());
};

export const createArticle = (newArticle) => {
    return fetch(API_BASE+'articles/create', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token acf06a772539f6eef2d911fac57cd3aa8d88d8db',
        },
        body: JSON.stringify(newArticle)
    }).then(response => response.json());
};