import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
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
                    <h3 className="h3">Navigation</h3>
                    <ul className="ul">
                    <li className="li"><Link className="a" to="/">Accueil</Link></li>
                    <li className="li"><Link className="a" to="/about">À propos</Link></li>
                    <li className="li"><Link className="a" to="/prestations">Prestations</Link></li>
                    <li className="li"><Link className="a" to="/spaces">Espaces</Link></li>
                    <li className="li"><Link className="a" to="/contact">Nous contacter</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
