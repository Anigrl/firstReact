import React, { useEffect, useState } from 'react'



function FPAII() {

    const [apstate, setApi] = useState([])
    const [loading , setLoading] =useState(false)

    const jsonPlaceholder = async function () {
        setLoading(true)
        const res = await fetch("http://localhost:3000/student");
        const valueArray = await res.json();
        console.log(valueArray)
        setApi(valueArray)
        setLoading(false)
    }

    useEffect(() => {

        jsonPlaceholder()
        // only will run one time when first mount the components
    }, [])


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
                    <table className=' table table-striped table-dark table-hover'>
                        <tbody>
                            <tr>
                                <th>id:</th>
                                <th>name:</th>
                                <th>Course:</th>
                            </tr>
                            {apstate.map((item) => {
                                return (
                                    <tr>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.course}</td>
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

export default FPAII;