import React from 'react'
import '../Navbar/Navbar.css'

export default function Navbar({fetchUsers}) {
    
    return (
        <header>
            <span className="logo"><i className="fas fa-users"></i> LetsGrowMore TASK 2</span>
            <button onClick={fetchUsers}>Get Users</button>
        </header>
    )
}