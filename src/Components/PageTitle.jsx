import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

export default function PageTitle() {

  const titleRef = useRef("");

  useEffect(()=>{
    setTimeout(()=>{
      titleRef.current.textContent = "Browse Our Items"
    }, 3000);
    return () => {
      clearTimeout(setTimeout);}
  },[]);

  return (
    <div >
      <h1 className='pageTitle' ref={titleRef}>Welcome to Our Shop</h1>
    </div>
  )
}
