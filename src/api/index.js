import axios from 'axios';

export const getList = page => {
    return axios.get(`https://b16be56a-9b48-430a-8aad-7fdbc0d24b38.mock.pstmn.io/${page}`);
}