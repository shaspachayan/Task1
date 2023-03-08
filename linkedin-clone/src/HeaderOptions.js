import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({ Icon, title }) {
    return (
        <div className='HeaderOptions'>
            {Icon && <Icon className='HeaderOptions__Icon' />}
            <h4 className='HeaderOptions__title'> {title}</h4>
        </div>
    )
}





export default HeaderOptions