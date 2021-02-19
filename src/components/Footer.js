import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <p>© {new Date().getFullYear()} Airbnb Clone! No rights reserved - this is a demo! </p>
            <p>Privacy &#183; Terms &#183; Sitemap &#183; Company Details</p>            
        </div>
    )
}

export default Footer
