import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Edit from './Edit'



function FPAI2() {

    const [apistate, setApi] = useState([])
    const [loading , setLoading] =useState(false)
    const [error, setError] =useState()



    const jsonPlaceholder = async function () {
        setLoading(true)
        try{

            const res = await axios.get("http://localhost:3000/student")  
            
            console.log(res.data)
            setApi(res.data)
        }catch(e){
            setError(e)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {

        jsonPlaceholder()
        // only will run one time when first mount the components
    }, [])

    if(error){
        return <div>something went wrong, please try again!</div>
    }

    if(loading){
            return <div>loading...</div>
    }

    return (
        <>
        

            <center><h2>Json Placeholder</h2></center>
            <div className='row'>


                <div className='col-md-3'>

                </div>
                <div className='col-md-6'>
                    <Link className='btn btn-success' to="/insert" >Add Record</Link><br /><br />
                    <table className=' table table-striped table-dark table-hover'>
                        <tbody>
                            <tr>
                                <th>id:</th>
                                <th>name:</th>
                                <th>Course:</th>
                                <td>Action</td>

                            </tr>
                            {apistate.map((item) => {
                                return (
                                    <tr>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.course}</td>
                                        <td>
                                            <Link className='btn btn-danger' to={`/delete/${item.id}`}>Delete</Link>
                                            &emsp;
                                            <Link className='btn btn-warning' to={`/edit/${item.id}`} >Edit</Link>

                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FPAI2;