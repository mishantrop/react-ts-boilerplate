import React from 'react'

import { Footer, Header } from '@app/components'

import style from './Layout.css'

interface Props {
    main: React.ReactNode;
}

export const Layout = ({ main }: Props) => {
    return (
        <div className={style.content}>
            <Header />

            <main>
                {main}
            </main>

            <Footer />
        </div>
    )
}
