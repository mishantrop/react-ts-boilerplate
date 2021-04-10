import React from 'react'

import { Layout } from '@app/components'

export const App = () => {
    return (
        <Layout
            main={(
                <>
                    <h1>Заголовок страницы</h1>
                    <p>Привет, это первый абзац.</p>
                    <p>Ф это второй абзац.</p>
                </>
            )}
        />
    )
}
