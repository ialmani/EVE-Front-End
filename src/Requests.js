import {API_BASE} from './Config';
import {authFail, authSuccess, checkAuthTimeout} from "./store/actions/auth";

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
            'Authorization': 'Token '+localStorage.getItem("token"),
        },
        body: JSON.stringify(newArticle)
    }).then(response => response.json());
};

export const uploadVideo = (newVideo) => {
    return fetch(API_BASE + 'videos/upload', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+localStorage.getItem("token"),
        },
        body: JSON.stringify(newVideo)
    }).then(response => response.json());
}