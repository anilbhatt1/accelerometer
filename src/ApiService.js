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

    // return axios.post('http://127.0.0.1:8000/accel/',
    // return axios.post('http://accelv3alb1-1598609463.us-east-1.elb.amazonaws.com:8000/accel/',
    return axios.post('https://api.neuralorbs.com/accel/',
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
    // return axios.get('http://127.0.0.1:8000/accel/')
    // return axios.get('http://accelv3alb1-1598609463.us-east-1.elb.amazonaws.com:8000/accel/')    
    return axios.post('https://api.neuralorbs.com/accel/')
    .then(res => {
        return res.data
    })}