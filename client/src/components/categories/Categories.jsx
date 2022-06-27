import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./categories.css"

const Categories = () => {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data)
    }
    getCats()
  },[])

  return (
    <div className='category'>
       <select name='filter' id='filter'>
           <option selected disabled>Filter</option>
           <option value='life'>Life</option>
           <option value='music'>Music</option>
           <option value='style'>Style</option>
           <option value='sport'>Sport</option>
           <option value='tech'>Tech</option>
           <option value='cinema'>Cinema</option>
       </select>
      <ul>
        {cats.map(c => (
          <Link to={`/?cat=${c.name}`} className="link">
             <li className='categoryItem'>{c.name}</li>
          </Link>
        
        ))}
         
      </ul>
    </div>
  )
}

export default Categories
