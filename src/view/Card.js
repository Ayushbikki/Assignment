import React from 'react'
import '../App.css'
import blankPort from '../assets/blankPort.jpg'

function Card({user}) {
    let image=blankPort
  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 rows-cols-lg-2">

    {user &&
        user.map((ele, index) => {
            return (
               
                    <div className="card" key={ele.age}>
                        <img  src={image} className="card-img-top cardImg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h5>{ele.occupation}</h5>
                  
                          <h5>{ele.age}</h5>
                        </div>
                    </div>
             

            )
        })
    }

</div>
  )
}

export default Card