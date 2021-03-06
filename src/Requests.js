import {API_BASE} from './Config';

export const loginUser =(user)=>{
    return fetch(API_BASE+'api/token', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(response => response.json());
}

export const logoutUser =(user)=>{
    return fetch(API_BASE+'api/user/logout/blacklist', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(response => response.json());
}

//get user details
export const getUserDetails = ()=>{
    return fetch(API_BASE+'auth/api/getUserDetails', {
        headers: {
            'Authorization': 'Bearer '+ localStorage.getItem("access_token"),
        },
    }).then(response => response.json());
}

export const createUser =(newUser)=>{
    return fetch(API_BASE+'auth/api/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
    }).then(response => response.json());
}

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
            'Authorization': 'Bearer '+localStorage.getItem("access_token"),
        },
        body: JSON.stringify(newArticle)
    }).then(response => response.json());
};

export const getAllVideos = () => {
    return fetch(API_BASE+'videos').then(response => response.json());
};

export const getVideo = (id) => {
    return fetch(API_BASE+'videos/'+id).then(response => response.json());
};

export const createVideo = (newVideo) => {
    return fetch(API_BASE + 'videos/create', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("access_token"),
        },
        body: JSON.stringify(newVideo)
    }).then(response => response.json());
}

export const createComment = (resourceID, resource, comment)=>{
    return fetch(API_BASE + resource+'/'+resourceID+'/comments/create', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("access_token"),
        },
        body: JSON.stringify(comment)
    }).then(response => response.json());

}

export const getArticleComments= (articleID)=>{
    return fetch(API_BASE+'articles/'+articleID+'/comments').then(response => response.json());
}

export const getUser=(userID)=>{
    return fetch(API_BASE+'auth/users/'+userID).then(response=>response.json());
}

export const createZoom = (newZoom) => {
    return fetch(API_BASE+'zoom/create', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("access_token"),
        },
        body: JSON.stringify(newZoom)
    }).then(response => response.json());
};

export const getAllZooms = () => {
    return fetch(API_BASE+'zoom').then(response => response.json());
};

export const getZoom = (id) => {
    return fetch(API_BASE+'zoom/'+id).then(response => response.json());
};

export const createInPersonEvent = (newInPersonEvent) => {
    return fetch(API_BASE+'inPersonEvent/create', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("access_token"),
        },
        body: JSON.stringify(newInPersonEvent)
    }).then(response => response.json());
};

export const getAllInPersonEvent = () => {
    return fetch(API_BASE+'inPersonEvent').then(response => response.json());
};

export const getInPersonEvent = (id) => {
    return fetch(API_BASE+'inPersonEvent/'+id).then(response => response.json());
};