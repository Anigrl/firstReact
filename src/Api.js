import React, { useEffect, useState } from 'react'



function Api() {

    const [apstate, setApi] = useState([])

    const jsonPlaceholder = async function () {

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const valueArray = await res.json();
        console.log(valueArray)
        setApi(valueArray)
    }

    useEffect(() => {

        jsonPlaceholder()
        // only will run one time when first mount the components
    }, [])



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
                                <th>username:</th>
                                <th>phone:</th>
                                <th>website:</th>
                            </tr>
                            {apstate.map((item) => {
                                return (
                                    <tr>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
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

export default Api