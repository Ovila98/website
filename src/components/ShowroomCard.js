import React from 'react'

export default function ShowroomCard(props) {
  return (
    <div className="showroom-card showroom-bs">
            <img src={props.src} alt="Miniature" />
            <h3 className="subtitle">{props.title}</h3>
            <p>{props.desc}</p>
    </div>
  )
}
