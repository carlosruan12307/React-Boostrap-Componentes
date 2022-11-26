import { useState } from "react";

function Junbotron() {
    const [show, setshow] = useState(true);
    return (
        <div>
            <div id="junb" className={"border bg-primary border-danger d-block p-3 my-5 mx-5 rounded" + (show ? "" : "invisible")} style={{ position: "relative", top: "300px" }}>
                <h1 className="text-white">a</h1>
                <hr style={{ border: "none", borderTop: "5px double #333" }} />
                <p className="text-white">aaa</p>
            </div>
            <div style={{ position: "relative", top: "300px" }}>
                <button className="btn btn-secondary" onClick={() => setshow(false)}>ocultar</button>
                <button className="btn btn-primary" onClick={() => setshow(true)}>mostrar </button>
            </div>
        </div>

    )
}

export default Junbotron;