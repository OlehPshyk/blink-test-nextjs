import classNames from 'classnames';

import mSectionStyles from './mSection.module.scss';

export default function MSection({code,status,firstName}) {
  return (        
    <section className={mSectionStyles.mSection}>
      <div className={mSectionStyles.mSectionBg}>
        <div className={classNames(mSectionStyles.mSectionContent,"wrapper")}>
          <span className={mSectionStyles.t1}>SPEDIZIONE N° {code}</span>
          <div className={mSectionStyles.bottomText}>
            <h2 className={mSectionStyles.t2}>Ciao <span className={mSectionStyles.t21}>{firstName}</span></h2>
            <span className={mSectionStyles.t3}>La tua spedizione è stata</span>
            <h3 className={mSectionStyles.t4}>{status}</h3>
          </div>
        </div>
      </div>
    </section>    
  )
}
