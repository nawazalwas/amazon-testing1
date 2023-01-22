import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Image.css';

function Image({image,className,id}) {
  const navigate = useNavigate();
  return (
        <img onClick={()=>{navigate(`/product/${id}`)}} src={image} alt=""  className={className}/>
  )
}

export default Image