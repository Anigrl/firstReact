import React, { useEffect, useState } from 'react'

function PhotoApi() {

  const [picture, setPicture] = useState([])

  async function getPicture() {
    const val = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await val.json()
    console.log(data)
    setPicture(data)
  }

  useEffect(() => {
    getPicture()
  }, [])


  return (
    <>
      <center><h1 >picture api</h1></center>
      <div className='row mt-5'>


        {
          picture.map((item) => {
            return (
              <>
              <div className='col-md-2'></div>

                <div className="card  mb-2" key={item.id} style={{
                  "width": "18rem"
                }}>
                  <img  src={item.url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              <div className='col-md-2'></div>

              </>
            )

          })

        }


      </div>
    </>
  )
}

export default PhotoApi