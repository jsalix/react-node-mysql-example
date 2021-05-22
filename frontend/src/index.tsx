import React, { useState } from 'react'
import {render} from 'react-dom'

const App = ({apiBaseUrl}: {apiBaseUrl: string}) => {
    const [id, setId] = useState<string>()
    const [name, setName] = useState<string>()

    const getName = async () => {
        const res = await fetch(`http://${apiBaseUrl}/name`)
        const n = await res.text()
        setName(n)
    }
    const putName = () => {
        fetch(`http://${apiBaseUrl}/name`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: name
            })
        })
    }

    return (
        <div>
            <h1>User Manager</h1>
            <p>
                Enter user id to manage:
                <input onChange={v => setId(v.target.value)} value={id} />
            </p>
            <p>
                User name:
                <input onChange={v => setName(v.target.value)} value={name} /><br />
                <button onClick={getName}>Get</button>
                <button onClick={putName}>Put</button>
            </p>
        </div>
    )
}

render(<App apiBaseUrl="localhost:3000" />, document.getElementById('root'))