import Head from 'next/head'
import Link from 'next/link'
import classNames from 'classnames';

// import shippingStyles from '../styles/shipping.module.scss'

import shippingStyles from '../styles/shipping.module.scss';
import headerStyles from '../styles/header.module.scss';
import mSectionStyles from '../styles/mSection.module.scss';
import addrTimeStyles from '../styles/addrTime.module.scss';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Blink test</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <header className={headerStyles.header}>
        <div className={headerStyles.logoContainer}>
          <Link href="/">
            <a><img src="images/logo.svg" className={headerStyles.logo}/></a>
          </Link>
        </div>
        <nav className={headerStyles.nav}>
          <Link href="#">
            <a>Vai al sito</a>
          </Link>
        </nav>
      </header>
      <main className={classNames(shippingStyles.page,"main")}>             
        <section className={mSectionStyles.mSection}>
          <div className={mSectionStyles.mSectionBg}>
            <div className={classNames(mSectionStyles.mSectionContent,"wrapper")}>
              <span className={mSectionStyles.t1}>SPEDIZIONE N° 1234567890</span>
              <div className={mSectionStyles.bottomText}>
                <h2 className={mSectionStyles.t2}>Ciao <span className={mSectionStyles.t21}>Marco</span></h2>
                <span className={mSectionStyles.t3}>La tua spedizione è stata</span>
                <h3 className={mSectionStyles.t4}>IN CONSEGNA</h3>
              </div>
            </div>
          </div>
        </section>
        <section className={classNames(addrTimeStyles.addrTimeSection, "wrapper")}>
          <div className={addrTimeStyles.addrTimeItem}>
            <h3 className={addrTimeStyles.addrItemTitle}>Data e ora</h3>
            <div className={addrTimeStyles.itemCard}>
              <div className={addrTimeStyles.itemCardTitleBox}>
                <div className={addrTimeStyles.itemCardImageBox}>
                  <img className={addrTimeStyles.itemCardImage} src="images/clock.svg"/>
                </div>
                <span className={addrTimeStyles.itemCardTitle}>Mercoledì 6 Settembre</span>
              </div>
              <span className={addrTimeStyles.itemCardText}>16.00 - 18.00</span>
            </div>
          </div>
          <div className={addrTimeStyles.addrTimeItem}>
            <h3 className={addrTimeStyles.addrItemTitle}>Indirizzo</h3>
            <div className={addrTimeStyles.itemCard}>
              <div className={addrTimeStyles.itemCardTitleBox}>
                <div className={addrTimeStyles.itemCardImageBox}>
                  <img className={addrTimeStyles.itemCardImage} src="images/marker.svg"/>
                </div>
                <span className={addrTimeStyles.itemCardTitle}>Milano</span>
              </div>
              <span className={addrTimeStyles.itemCardText}>Via delle meraviglie 22, 20123 (MI)</span>
            </div>
          </div>
        </section>
        <div className={shippingStyles.changeBtnContainer}>
          <button className={shippingStyles.changeBtn} onClick={()=>console.log(" Modify delivery button was clicked")}>
            <svg className="md-down" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.25 16.875H18.75V18.125H1.25V16.875ZM15.8813 5.62499C16.116 5.39053 16.2479 5.07238 16.2479 4.74062C16.2479 4.40886 16.116 4.0907 15.8813 3.85624L13.6438 1.61874C13.4093 1.38402 13.0911 1.25214 12.7594 1.25214C12.4276 1.25214 12.1095 1.38402 11.875 1.61874L2.5 10.9937V15H6.50625L15.8813 5.62499ZM12.7578 2.50018L15.0016 4.74393L13.1266 6.61893L10.8828 4.37518L12.7578 2.50018ZM3.75 13.75V11.5062L10 5.25624L12.2437 7.49999L5.99375 13.75H3.75Z" fill="white"/>
            </svg>
            <span className="lg-only">Modifica info spedizione</span>
          </button>
        </div>
        <div className={shippingStyles.linkContainer}>
          <Link href="#">
            <a className={shippingStyles.anotherShipmentLink}>
              Cerca un’altra spedizione
            </a>
          </Link>
        </div>
      </main>
      {/* <footer className="footer"></footer> */}
    </React.Fragment>
  )
}
