'use client'
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    setTimeout(() => {
        setCount(count + 1)
    }, 1000)
    return (
        <div>
           the count is {count}
        </div>
    );
}