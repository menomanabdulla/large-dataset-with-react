import React from 'react';
import axios from 'axios'
const URL = "https://jsonplaceholder.typicode.com/posts"
export const GetData = async (): Promise<any> => {
    const {data} = await axios.get(URL)
    return data;
}