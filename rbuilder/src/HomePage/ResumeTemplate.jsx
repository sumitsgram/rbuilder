import React from 'react'
import { Link } from 'react-router-dom'

function ResumeTemplate() {
  return (
    <div>
      <h1 style={{color:'brown'}}>Templates</h1>
      <br/>
      <br/>
      <div className='app'>
      <button ><Link to="/myresume">Use Tempate</Link>
      </button>
    </div>
    <div className='app1'>
      <button><Link to="*">Use Tempate</Link></button>
    </div>
    <div className='app2'>
    <button><Link to="*">Use Tempate</Link></button>
    </div>
    <div className='app3'>
    <button><Link to="*">Use Tempate</Link></button>
    </div>
    </div>
  )
}

export default ResumeTemplate



