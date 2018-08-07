import axios from 'axios';

export const getList = page => {
    return axios.get(`https://b16be56a-9b48-430a-8aad-7fdbc0d24b38.mock.pstmn.io/${page}`);
}

export const getCar = type => {
    return axios.get(`https://1c9d97a1-9f85-48a4-a281-2d1d3974136d.mock.pstmn.io/${type}`);
}