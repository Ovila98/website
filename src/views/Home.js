import React from 'react'

import { Section, Bubble } from '../components'
import ArrowDown from "../res/arrow-down.svg"
import MSP from "../res/Matterport-Service-Partner-Logo.png"

export default function Home() {
  return (
    <>
        <div id="fixed-bg" />
        <Section id="hero-section">
            <div id='hero-div'>
                <h1 className="p-fg">VirtuaView</h1>
                <h2 className="s-fg fw-400 ff-jkt">Vos espaces, votre vision</h2>
                <div id="hero-cta">
                    <button className="c-btn fw-500">Découvrir</button>
                    <button className="c-btn fw-500 p-bg dw-fg">Contact</button>
                </div>
            </div>
            <div id="hero-presenter">
                <span className="ff-jkt fw-700 p-fg">Réalisez les meilleures visites virtuelles de la région Grenobloise !</span>
                <img id="present-btn" src={ArrowDown} alt="&#8595;" onClick={() => {document.getElementById("vitrine-container").scrollIntoView()}}></img>
            </div>
        </Section>
        <Section id="vitrine-section">
            <div id="vitrine-container">
                    <div id="leitmotiv"><span className='p-fg fw-700 ff-jkt'>DÉTAIL.</span><span className='p-fg fw-700 ff-jkt'>FLUIDITÉ.</span><span className='p-fg fw-700 ff-jkt'>QUALITÉ.</span></div>
                    <div className="fw-500 ff-jkt">Notre leitmotiv, voyez ci-dessous!</div>
                    <div id="vitrine">
                        <iframe title="frame" src='https://my.matterport.com/show/?m=43MsG2EBfrh' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                    </div>
            </div>
            <div id="advantages-container">
                <div className="advantages-text">Démarquez-vous</div>
                <div className="advantages-text">Optimisez votre temps</div>
                <div className="advantages-text">Une longueur d'avance</div>
                <div className="advantages-text">Jetez un coup d'oeil</div>
            </div>
        </Section>
        <Section id="certif-section" className="section-grad">
            <div id="certif">
                <p className="dw-fg">Nous utilisons la technologie Matterport Pro2, la plus utilisée sur le marché, qui garantit un temps de réalisation rapide et un résultat final plus que satisfaisant.</p>
                <p className="dw-fg">Nous sommes aussi certifiés Matterport Services Partner !</p>
                <img src={MSP} alt="Matterport service partner" />
            </div>
        </Section>
        <Section id="areas-section">
            <div id="areas-content">
                <h1 className="ff-jkt p-fg" id="areas-title">Travaillez avec nous !</h1>
                <p className="ff-jkt" id="areas-subtitle1">Nous coopérons avec des acteurs de différents secteurs d'activités...</p>
                <div id="bubble-group">
                    <Bubble bg="s-bg" fg="dw-fg" left="10" top="10" title="Immobilier" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat nisl nec leo pellentesque, eget tempus mauris ornare. In id mi et urna laoreet luctus."/>
                    <Bubble left="56" title="Architectes" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat nisl nec leo pellentesque, eget tempus mauris ornare. In id mi et urna laoreet luctus."/>
                    <Bubble bg="s-bg" fg="dw-fg" left="20" bottom="1" title="Agence de décoration" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat nisl nec leo pellentesque, eget tempus mauris ornare. In id mi et urna laoreet luctus."/>
                </div>
                <p className="ff-jkt" id="areas-subtitle2">...et si le votre n'apparaît pas, rejoignez-nous ! </p>
            </div>
        </Section>
        <Section id="contact-section" className="section-grad">
            <div id="contact-content">
                <h1>N’hésitez pas, faites appel à nos services !</h1>
                <div id="contact-cta">
                    <button className="c-btn fw-500">Nos prestations</button>
                    <button className="c-btn fw-500 p-bg dw-fg">Nous contacter</button>
                </div>
            </div>
        </Section>
        <footer>
        <div class="footer-container">
            <div class="row">
                <div class="col">
                    <h3 className="h3">VirtuaView</h3>
                    <p className="p">Réalisation de visites virtuelles</p>
                </div>
                <div class="col">
                    <h3 className="h3">Coordonnées</h3>
                    <p className="p">Adresse: 123 Rue des Visites Virtuelles</p>
                    <p className="p">Téléphone: (123) 456-7890</p>
                    <p className="p">Email: contact@virtuaview.com</p>
                </div>
                <div class="col">
                    <h3 className="h3">Liens utiles</h3>
                    <ul className="ul">
                    <li className="li"><a className="a" href="#">Accueil</a></li>
                    <li className="li"><a className="a" href="#">À propos</a></li>
                    <li className="li"><a className="a" href="#">Services</a></li>
                    <li className="li"><a className="a" href="#">Portfolio</a></li>
                    <li className="li"><a className="a" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    </>
  )
}
