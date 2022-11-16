import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString);

    const name = queryParams.get("name");

  return (
    <div>
        <h2> Hey {name}, Contact us here.... </h2>
        <p>Lorem</p>
    </div>
  )
}

export default Contact