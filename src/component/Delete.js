import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {

    let {id} = useParams()
    let nav = useNavigate()

    const localData = async function(){
        try{

            await axios.delete(`http://localhost:3000/student/${id}`)
            alert("data is deleted")
            nav('/fapi2')
        }
        catch(error){
            console.log("error is generated" ,error)
        }

    }

    useEffect(()=>{
        localData()
    },[])


    // localData()

  return (
    <div>
        record deleted
    </div>
  )
}

export default Delete