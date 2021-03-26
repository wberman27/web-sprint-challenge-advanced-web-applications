import axios from 'axios'

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');

    //creates a stub of an axios call
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers:{
            authorization: token
        },
    })
}

//Task List:
//Build and export a function used to send in our authorization token