/*
- Functionality to Get the accel data by calling getdata which will access api
*/

import React, {useEffect, useState} from 'react';
import { getdata} from './ApiService';

export default function Get(){

    const [accels, setAccels] = useState([])

    useEffect(()=>{
        let mount = true
        getdata()
            .then(res => {
                console.log('res from api', res)
                setAccels(res)
                return() => mount = false
            })
    },[])

    return(
        <>
            <h3>  ACCEL DATA LIST   </h3> 
            <table border={"2px"} cellPadding={"10px"}>
            <thead>
                <tr>
                    <td> Id</td>
                    <td>Accel X</td>
                    <td>Accel Y</td>
                    <td>Accel Z</td>
                    <td>Created At</td>
                </tr>
            </thead>
            <tbody>
                {accels.map(accel => {
                    return <tr key={accel.id}>
                    <td>{accel.id}</td>
                    <td>{accel.x_accel}</td>
                    <td>{accel.y_accel}</td>
                    <td>{accel.z_accel}</td>
                    <td>{accel.created_at}</td>
                </tr>
                })}            
            </tbody>
            </table>   
        </>
    )
}