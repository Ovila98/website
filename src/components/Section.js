import React from 'react'

export default function Section(props) {
  return (
    <section id={props.id} className={props.className}>
        <div className="section-container">
            {props.children}
        </div>
    </section>
  )
}
