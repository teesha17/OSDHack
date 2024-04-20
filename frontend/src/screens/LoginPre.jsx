import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPre() {
  return (
    <div>
        <div className='row'>
            <div className='col-3'>
                <button><Link to="/loginuser">user</Link></button>
                <button><Link to="/loginarchitect">Architect</Link></button>
                <button><Link to="/loginpackersmovers">packers movers</Link></button>
                <button><Link to="/logincontractor">contractor</Link></button>
                <button><Link to="/loginsupplier">supplier</Link></button>
            </div>
        </div>
    </div>
  )
}
