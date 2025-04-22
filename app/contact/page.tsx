'use client'

import MainLayout from '../layouts/MainLayout'
import '../styles/pages/contact.css'

export default function ContactPage() {
  return (
    <MainLayout
      hero={{
        title: 'Contact',
        subtitle: 'Contactgegevens van de Zandvoortse Reddingsbrigade',
      }}
    >
      <section className="content-section">
        <div className="container">
          {/* Algemene Contactgegevens */}
          <div className="contact-section">
            <h2 className="section-title">
              <i className="fas fa-building"></i> 
              <span>Algemene Contactgegevens</span>
            </h2>
            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-home"></i>
                  <h3>Zandvoortse Reddingsbrigade</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-link"></i> <a href="https://www.zrb.info" target="_blank" rel="noopener noreferrer">www.zrb.info</a></p>
                  <p><i className="fas fa-envelope"></i> <a href="mailto:bestuur@zrb.info">bestuur@zrb.info</a></p>
                  <p><i className="fas fa-building"></i> <span>Linnaeusstraat 2, 2041 BR, Zandvoort</span></p>
                  <p><i className="fas fa-hashtag"></i> <span>RSIN: 34.57.138</span></p>
                  <p><i className="fas fa-address-card"></i> <span>KVK: 40594918</span></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-file-signature"></i>
                  <h3>Secretariaat</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-envelope"></i> <a href="mailto:secretariaat@zrb.info">secretariaat@zrb.info</a></p>
                  <p><i className="fas fa-building"></i> <span>Linnaeusstraat 2, 2041 BR, Zandvoort</span></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-newspaper"></i>
                  <h3>Pers & Media</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-user"></i> <span>Ernst Brokmeier</span></p>
                  <p><i className="fas fa-phone"></i> <a href="tel:+31619442879">06-19442879</a></p>
                  <p><i className="fas fa-envelope"></i> <a href="mailto:pr@zrb.info">pr@zrb.info</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-hashtag"></i>
                  <h3>Social Media</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fab fa-twitter"></i> <a href="http://www.twitter.com/reddingsbrigade" target="_blank" rel="noopener noreferrer">Twitter</a></p>
                  <p><i className="fab fa-facebook"></i> <a href="http://www.facebook.com/zandvoortseRB" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                  <p><i className="fab fa-instagram"></i> <a href="https://www.instagram.com/reddingsbrigade/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Reddingsposten */}
          <div className="contact-section">
            <h2 className="section-title">
              <i className="fas fa-life-ring"></i>
              <span>Reddingsposten</span>
            </h2>
            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-building"></i>
                  <h3>Post Kazerne 'Zandvoort'</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-map-marker-alt"></i> <span>Linnaeusstraat 2, 2041 BR, Zandvoort</span></p>
                  <p><i className="fas fa-phone"></i> <a href="tel:+31233690081">023 – 369 00 81</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-umbrella-beach"></i>
                  <h3>Reddingspost Piet Oud 'Noord'</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-map-marker-alt"></i> <span>Boulevard Barnaart 50, 2041 JA, Zandvoort</span></p>
                  <p><i className="fas fa-phone"></i> <a href="tel:+31235712376">023 – 571 23 76</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-umbrella-beach"></i>
                  <h3>Reddingspost Ernst Brokmeier 'Zuid'</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-map-marker-alt"></i> <span>Boulevard Paulus Loot 66, 2042 AE, Zandvoort</span></p>
                  <p><i className="fas fa-phone"></i> <a href="tel:+31235712687">023 – 571 26 87</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-users"></i>
                  <h3>Postcommandanten</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-envelope"></i> <a href="mailto:postcommandanten@zrb.info">postcommandanten@zrb.info</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Organisatie */}
          <div className="contact-section">
            <h2 className="section-title">
              <i className="fas fa-users-cog"></i>
              <span>Organisatie</span>
            </h2>
            <div className="contact-cards-grid two-columns">
              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-user-tie"></i>
                  <h3>Dagelijks Bestuur</h3>
                </div>
                <div className="contact-card-content">
                  <p><i className="fas fa-user-shield"></i> <a href="mailto:voorzitter@zrb.info">voorzitter@zrb.info</a></p>
                  <p><i className="fas fa-coins"></i> <a href="mailto:penningmeester@zrb.info">penningmeester@zrb.info</a></p>
                  <p><i className="fas fa-file-alt"></i> <a href="mailto:secretariaat@zrb.info">secretariaat@zrb.info</a></p>
                </div>
              </div>

              <div className="contact-card wide-card">
                <div className="contact-card-header">
                  <i className="fas fa-users"></i>
                  <h3>Commissarissen & Werkgroepen</h3>
                </div>
                <div className="contact-card-content columns">
                  <div className="column">
                    <p><i className="fas fa-newspaper"></i> <a href="mailto:pr@zrb.info">pr@zrb.info</a></p>
                    <p><i className="fas fa-cogs"></i> <a href="mailto:operationeel@zrb.info">operationeel@zrb.info</a></p>
                    <p><i className="fas fa-tools"></i> <a href="mailto:materiaal@zrb.info">materiaal@zrb.info</a></p>
                    <p><i className="fas fa-child"></i> <a href="mailto:jeugdzaken@zrb.info">jeugdzaken@zrb.info</a></p>
                  </div>
                  <div className="column">
                    <p><i className="fas fa-swimming-pool"></i> <a href="mailto:zwembad@zrb.info">zwembad@zrb.info</a></p>
                    <p><i className="fas fa-graduation-cap"></i> <a href="mailto:opleidingen@zrb.info">opleidingen@zrb.info</a></p>
                    <p><i className="fas fa-user-friends"></i> <a href="mailto:ledenadministratie@zrb.info">ledenadministratie@zrb.info</a></p>
                    <p><i className="fas fa-users"></i> <a href="mailto:postcommandanten@zrb.info">postcommandanten@zrb.info</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertrouwenscontactpersonen */}
          <div className="contact-section" id="vertrouwenscontact">
            <h2 className="section-title">
              <i className="fas fa-hands-helping"></i>
              <span>Vertrouwenscontactpersonen</span>
            </h2>
            <div className="contact-cards-grid">
              <div className="contact-card blue-highlight">
                <div className="contact-card-header">
                  <i className="fas fa-user-shield"></i>
                  <h3>Vertrouwenscontact</h3>
                </div>
                <div className="contact-card-content">
                  <div className="contact-person">
                    <p><i className="fas fa-user"></i> <span className="contact-name">Annemarie Humelink</span></p>
                    <p><i className="fas fa-phone"></i> <a href="tel:+31620975614">06-2097 5614</a></p>
                  </div>
                  <hr />
                  <div className="contact-person">
                    <p><i className="fas fa-user"></i> <span className="contact-name">Nora Mol</span></p>
                    <p><i className="fas fa-phone"></i> <a href="tel:+31644093298">06-4409 3298</a></p>
                  </div>
                  <hr />
                  <div className="contact-person">
                    <p><i className="fas fa-user"></i> <span className="contact-name">Oscar Vos</span></p>
                    <p><i className="fas fa-phone"></i> <a href="tel:+31654283983">06-5428 3983</a></p>
                  </div>
                  <hr />
                  <p><i className="fas fa-envelope"></i> <a href="mailto:vcp@zrb.info">vcp@zrb.info</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Steun de Reddingsbrigade */}
          <div className="contact-section">
            <h2 className="section-title">
              <i className="fas fa-hand-holding-heart"></i>
              <span>Steun de Reddingsbrigade</span>
            </h2>
            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="contact-card-header">
                  <i className="fas fa-donate"></i>
                  <h3>Donaties</h3>
                </div>
                <div className="contact-card-content">
                  <p>Een gift kunt u doen aan:</p>
                  <p><i className="fas fa-building"></i> <strong>Zandvoortse Reddingsbrigade</strong></p>
                  <p><i className="fas fa-map-marker-alt"></i> <span>Linnaeusstraat 2, 2041 BR, Zandvoort</span></p>
                  <p><i className="fas fa-university"></i> <strong>Rabobank:</strong> <span>NL63 RABO 0326 3091 52</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 