import React from "react";

function Shades(props) {
    const {r, g, b} = props;
    const shades = [`rgb(${r*0.7}, ${g*0.7}, ${b*0.7})`, `rgb(${r*0.8}, ${g*0.8}, ${b*0.8})`, `rgb(${r*0.9}, ${g*0.9}, ${b*0.9})`, `rgb(${r*0.95}, ${g*0.95}, ${b*0.95})`, `rgb(${r}, ${g}, ${b})`,`rgb(${r/0.8}, ${g/0.8}, ${b/0.8})`, `rgb(${r/0.7}, ${g/0.7}, ${b/0.7})`,  `rgb(${r/0.6}, ${g/0.6}, ${b/0.6})`, `rgb(${r/0.5}, ${g/0.5}, ${b/0.5})`,]
    return (
        shades.map((shades, i) => <div key={i} style={{height: 20, width: 20, padding: 10, margin: "2px", borderRadius: "10px", backgroundColor: shades}}/>)
    )
}

export default Shades