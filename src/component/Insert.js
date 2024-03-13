import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FPAI2 from './FAPI2'
import { useNavigate } from 'react-router-dom'


function Insert() {


    const [name, setName] = useState('')
    const [course, setCourse] = useState('')

    let navigation = useNavigate() //navigaation hook
    const localData = async function () {

        try {
            const res = await axios.post("http://localhost:3000/student", {

                "name": name,
                "course": course,
            })
            navigation('/fapi2')

        }
        catch (error) {
            console.log(error)
        }

    }



    return (

        <>

            <div>
                <center><div className='fs-1'>Insert Data</div></center>
                <div className='container row gap-2 ' style={{
                    maxWidth: '500px',
                    margin: "0 auto"
                }}>

                    <div className='col-md-12'>
                        <label className='form-label' htmlFor='name'>name</label>
                        <input className='form-control' type='text' id='name' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor='course'>course</label>
                        <input className='form-control' type='text' id='course' onChange={(e) => setCourse(e.target.value)}></input>
                    </div>

                    <button className='btn btn-primary col-md-2 mx-auto mt-2' onClick={() => {
                        localData()

                    }}>insert</button>
                </div>
            </div>



        </>
    )
}

export default Insert