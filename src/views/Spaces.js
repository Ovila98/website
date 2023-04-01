import React from 'react'
import { Section, ShowroomCard } from '../components'

export default function Spaces() {
  return (
    <>
      <Section id="spaces-header">
        <h1 className="title ff-jkt p-fg">Notre showroom</h1>
        <h2 className="subtitle fw-500">Découvrez une sélection de nos réalisations captivantes, mettant en lumière la qualité et l'expertise de nos visites virtuelles.</h2>
        <div id='vitrine-showroom'>
          <iframe title="frame" src='https://my.matterport.com/show/?m=43MsG2EBfrh' frameBorder='0' allowFullScreen></iframe>
        </div>
        <p className="p-center">Espace à la une ! Belle maison à modéliser selon vos goûts sur une parcelle de 500m² sur Murianette.
          <br/>
        À retrouver chez <a href="https://www.meilleursagents.com/agence-immobiliere/agence-gaya-l-immobilier-engage-73875/" className="out-link fw-600 db-fg">GAYA, l’immobilier engagé à Domène.</a></p>
      </Section>
      <Section>
        <h2 className="alt-title p-fg">
          Autres réalisations
        </h2>
        <div id="showroom">
          <ShowroomCard title="Appartement T3" desc ="Découvrez ce bel appartement de 3 pièces, 70m² exposé Est-Ouest."/>
          <ShowroomCard title="Appartement T2" desc ="Découvrez ce bel appartement de 2 pièces, 45m² exposé Nord-Ouest."/>
          <ShowroomCard title="Villa Meylan" desc ="Découvrez cette belle villa de 250m² exposé sud."/>
        </div>
      </Section>
    </>
  )
}
