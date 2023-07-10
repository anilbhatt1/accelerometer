import axios from "axios";

export function adddata(x, y ,z) {
    if (x == null) {
        x = 0.01
    }
    if (y == null) {
        y = 0.01
    }
    if (z == null) {    
        z = 0.01
    }

    return axios.post('https://api.neuralorbs.com:8000/accel/',
    {   
        id: null,
        x_accel: x,
        y_accel: y,
        z_accel: z,
        create_at: null,
    })
    .then(res => {
        return res.data
    })}

export function getdata() {  
    return axios.get('https://api.neuralorbs.com:8000/accel/')
    .then(res => {
        return res.data
    })}