import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpPre() {
  return (
    <div>
        <div className='row'>
            <div className='col-3'>
                <button><Link to="/createuser">user</Link></button>
                <button><Link to="/createarchitect">Architect</Link></button>
                <button><Link to="/createpackersmovers">packers movers</Link></button>
                <button><Link to="/createcontractor">contractor</Link></button>
                <button><Link to="/createsupplier">supplier</Link></button>
            </div>
        </div>
    </div>
  )
}
