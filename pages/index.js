import Head from 'next/head'
import Link from 'next/link'
import classNames from 'classnames';

// import shippingStyles from '../styles/shipping.module.scss'
import headerStyles from '../styles/header.module.scss'
import mSectionStyles from '../styles/mSection.module.scss'


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Blink test</title>
        <link rel="icon" href="/favicon.ico" />
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
      <main className="main">             
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
      </main>
      {/* <footer className="footer"></footer> */}
    </React.Fragment>
  )
}
