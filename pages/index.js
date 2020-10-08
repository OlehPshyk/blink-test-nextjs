import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import MSection from '../components/MSection';
import AddrTimeSection from '../components/AddrTimeSection';
import classNames from 'classnames';
import shippingStyles from '../styles/shipping.module.scss';

export default function Home({ data }) {  
  return (
    <React.Fragment>
      <Head>
        <title>Blink test</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>      
      <Header/>
      <main className={classNames(shippingStyles.page,"main")}>
        <MSection
          code={data.code}
          status={data.status}
          firstName={data.receiver.first_name}
        />
        <AddrTimeSection
          fullAddress={data.receiver.address.full_address}
        />        
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

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`.................`)
  // const data = await res.json()
  const data = {
    "price": 9.7,
    "pickup_ete": "2020-10-05T07:00:00Z",
    "dropoff_ete": "2020-10-05T12:00:00Z",
    "uuid": "98db9f8b-153f-40d9-bbd6-ff6e02a382d4",
    "status": "created",
    "is_critical": false,
    "pickup_start": "2020-10-05T07:00:00Z",
    "pickup_end": "2020-10-05T17:00:00Z",
    "dropoff_start": "2020-10-05T09:00:00Z",
    "dropoff_end": "2020-10-05T12:00:00Z",
    "max_lag": 240,
    "notes": null,
    "external_id": null,
    "code": "JTGE5446",
    "issued_at": "2020-10-02T17:25:29.460211Z",
    "sender": {
      "address": {
        "full_address": "Via Modestino 1, 20144 Milano, MI",
        "interphone": "34567890"
      },
      "email": "mail@mail.com",
      "phone": "34567890",
      "full_name": "jacopo wde",
      "first_name": "jacopo",
      "last_name": "wde",
      "notes": ""
    },
    "receiver": {
      "address": {
        "full_address": "Viale Papiniano 28, 20123 Milano, MI",
        "interphone": "123"
      },
      "email": "mail@mail.com",
      "phone": "34567890",
      "full_name": "jacopo berlu",
      "first_name": "jacopo",
      "last_name": "berlu",
      "notes": ""
    },
    "package_set": [
      {
        "cold": true,
        "warm": false,
        "name": "L",
        "weight": "10.00",
        "width": "60.00",
        "height": "40.00",
        "depth": "40.00",
        "fragile": false,
        "unflippable": true,
        "unstackable": false,
        "notes": "",
        "code": "JTGE5446Q"
      }
    ]
  };
  // Pass data to the page via props
  return { props: { data } }
}
