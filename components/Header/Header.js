import Link from 'next/link'
// import classNames from 'classnames';

import headerStyles from './header.module.scss';

export default function Header() {
  return (        
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
  )
}
