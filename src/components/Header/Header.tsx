import React from 'react'

import image from '@app/resources/images/react-logo.png'

import style from './Header.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={image} />
        </header>
    )
}
