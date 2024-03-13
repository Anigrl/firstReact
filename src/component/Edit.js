import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {



    let { id } = useParams()
    const navigate = useNavigate()

    const [nameData, setNameData] = useState() //storing name data from id
    const [courseData, setCourseData] = useState() // storing course data from id


    // getting  data for updating

    const editData = async function () {
        try {
            let editable = await axios.get(`http://localhost:3000/student/${id}`)
            let editableData = editable.data
            //setting variable for name and course
            setNameData(editableData.name)
            setCourseData(editableData.course)

        } catch (error) {
            console.log(error)
        }
    }

    // editing data through put method
    
    async function doEdit() {
        try {
             await axios.put(`http://localhost:3000/student/${id}`,{
                "name" : nameData,
                "course" : courseData
             })
             navigate('/fapi2')

        } catch (error) {
            console.log(error)
            
        }
    }

    // editData()

    useEffect(() => {
        editData()

    }, [])

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
                        <input className='form-control' type='text' id='name' value={nameData} onChange={(e)=>setNameData(e.target.value)} ></input>
                    </div>
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor='course'>course</label>
                        <input className='form-control' type='text' id='course' value={courseData} onChange={(e)=>setCourseData(e.target.value)} ></input>
                    </div>
                    <button className='btn btn-success col-md-2 mx-auto' onClick={doEdit}>Edit</button>


                </div>
            </div>

        </>
    )
}

export default Edit