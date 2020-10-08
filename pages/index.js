import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import MSection from '../components/MSection';
import AddrTimeSection from '../components/AddrTimeSection';
import classNames from 'classnames';
import shippingStyles from '../styles/shipping.module.scss';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Blink test</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>      
      <Header/>
      <main className={classNames(shippingStyles.page,"main")}> 
        <MSection/>
        <AddrTimeSection/>        
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
