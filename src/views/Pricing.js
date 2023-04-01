import React from 'react'

import { Section } from '../components'

export default function Pricing() {
  return (
    <>
    <Section id="pricing">
    <h1 className="title p-fg">Nos prestations</h1>
    <h2 className="subtitle fw-500">Visites virtuelles de qualité pour valoriser vos espaces, choisissez l'offre parfaite.</h2>
    <div className="pricing-container">
      <div className="pricing-card">
        <h2 className="pricing-title fw-700">Pack Basic</h2>
        <p className="pricing-price fw-600">99€</p>
        <ul className="pricing-features">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className="pricing-card featured section-grad">
        <h2 className="pricing-title fw-700">Pack Premium<br/><span className="fw-400">La meilleure offre</span></h2>
        <p className="pricing-price fw-600">199€</p>
        <ul className="pricing-features">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className="pricing-card">
        <h2 className="pricing-title fw-700">Pack Deluxe</h2>
        <p className="pricing-price fw-600">299€</p>
        <ul className="pricing-features">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  </Section>
  <Section id="faq">
    <h1 className="title p-fg p-left">Foire aux questions</h1>
    <div className="faq-container">
      <details className="faq-item">
        <summary>Lorem ipsum dolor sit amet?</summary>
        <div className="faq-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet massa eget ipsum varius.</p>
        </div>
      </details>
      <details className="faq-item">
        <summary>Lorem ipsum dolor sit amet?</summary>
        <div className="faq-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet massa eget ipsum varius.</p>
        </div>
      </details>
      <details className="faq-item">
        <summary>Lorem ipsum dolor sit amet?</summary>
        <div className="faq-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet massa eget ipsum varius.</p>
        </div>
      </details>
      <details className="faq-item">
        <summary>Lorem ipsum dolor sit amet?</summary>
        <div className="faq-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet massa eget ipsum varius.</p>
        </div>
      </details>
      <details className="faq-item">
        <summary>Lorem ipsum dolor sit amet?</summary>
        <div className="faq-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet massa eget ipsum varius.</p>
        </div>
      </details>
    </div>
  </Section>
</>
  )
}
