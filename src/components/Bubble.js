import React from 'react'

export default function Bubble(props) {
  return (
    <div className={"bubble-container "+props.bg} style={{left: props.left ? `${props.left}%` : "", top: props.top ? `${props.top}%` : "", bottom: props.bottom ? `${props.bottom}%` : "", right: props.right ? `${props.right}%` : ""}}>
      <h2 className={props.fg}>{props.title}</h2>
      <p className={props.fg}>{props.description}</p>
    </div>
  )
}
