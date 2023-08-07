"use client"
import { useState, useEffect } from 'react'

function getRandomText(length) {
    //const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

export default function RandomText({ text, interval }) {
    const [randomText, setRandomText] = useState(text)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomText(getRandomText(Math.random() * text.length))
        }, interval)

        return () => clearInterval(intervalId)
    }, [text, interval])

    return <div>{randomText}</div>
}
