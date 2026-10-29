import CounterClick from "./CounterClick"

function CounterView() {
    return (
        <>
            <h3>Contadores</h3>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <CounterClick />
                <CounterClick />
            </div>

        </>
    )
}

export default CounterView