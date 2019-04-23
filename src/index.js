import React from "react"
import {render} from "react-dom"
import "./main.css"
import Kalendar from "./components/Kalendar"

function App() {
    return (<Kalendar/>)
}

render(<App/>, document.getElementById("root"));