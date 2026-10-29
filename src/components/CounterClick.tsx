import { useState } from "react"

function CounterClick() {
    const [count, setCount] = useState(0)
    return (
        <button style={{ "margin": 5 }} onClick={() => setCount(count+1)}>Clicks: {count} </button>
    )
}

export default CounterClick