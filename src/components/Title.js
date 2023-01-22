import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

function Title({title,className,id}) {
  return (
    <Link className={className + ' link'} to={{
        pathname: `/product/${id}`,
      }}>
        <p>{title}</p>
      </Link>
    
  )
}

export default Title