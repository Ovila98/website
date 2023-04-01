import React from 'react'
import { Link } from 'react-router-dom'

import { Section } from '../components'

import ovila from "../res/ovila.jpg"
import zak from "../res/zak.jpg"

export default function About() {
  return (
    <>
    <Section id="team">
      <h1 className="title p-fg">L'équipe VirtuaView</h1>
      <h2 className="subtitle fw-500">Découvrez les experts dédiés à la création de vos expériences immersives.</h2>
      <div className="team-container">
        <div className="team-member">
          <img src={zak} alt="Zakaria Benchouba" className="team-photo"/>
          <h2 className="team-name">Zakaria Benchouba</h2>
          <h3 className="team-role">Agent immobilier</h3>
          <p>Fort de plusieurs années d'expérience dans l'immobilier, Zakaria apporte son expertise pour vous offrir les meilleures visites virtuelles adaptées à vos besoins.</p>
          <div className="team-socials">
            <ul>
              <li><Link>Facebook</Link></li>
              <li><Link>LinkedIn</Link></li>
              <li><Link>Instagram</Link></li>
              <li><Link>Mail</Link></li>
            </ul>
          </div>
        </div>
        <div className="team-member">
          <img src={ovila} alt="Ovila Acolatse" className="team-photo"/>
          <h2 className="team-name">Ovila Acolatse</h2>
          <h3 className="team-role">Développeur et expert en visites virtuelles</h3>
          <p>Passionné par la technologie et les visites virtuelles, Ovila met son savoir-faire en développement et sa maîtrise des outils numériques au service de vos projets.</p>
          <div className="team-socials">
            <ul>
              <li><Link>Facebook</Link></li>
              <li><Link>LinkedIn</Link></li>
              <li><Link>GitHub</Link></li>
              <li><Link>Mail</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    </>
  )
}
