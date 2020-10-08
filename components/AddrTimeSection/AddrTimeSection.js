import classNames from 'classnames';

import addrTimeSectionStyles from './addrTimeSection.module.scss';

export default function MSection() {
  return (        
    <section className={classNames(addrTimeSectionStyles.addrTimeSection, "wrapper")}>
      <div className={addrTimeSectionStyles.addrTimeItem}>
        <h3 className={addrTimeSectionStyles.addrItemTitle}>Data e ora</h3>
        <div className={addrTimeSectionStyles.itemCard}>
          <div className={addrTimeSectionStyles.itemCardTitleBox}>
            <div className={addrTimeSectionStyles.itemCardImageBox}>
              <img className={addrTimeSectionStyles.itemCardImage} src="images/clock.svg"/>
            </div>
            <span className={addrTimeSectionStyles.itemCardTitle}>Mercoledì 6 Settembre</span>
          </div>
          <span className={addrTimeSectionStyles.itemCardText}>16.00 - 18.00</span>
        </div>
      </div>
      <div className={addrTimeSectionStyles.addrTimeItem}>
        <h3 className={addrTimeSectionStyles.addrItemTitle}>Indirizzo</h3>
        <div className={addrTimeSectionStyles.itemCard}>
          <div className={addrTimeSectionStyles.itemCardTitleBox}>
            <div className={addrTimeSectionStyles.itemCardImageBox}>
              <img className={addrTimeSectionStyles.itemCardImage} src="images/marker.svg"/>
            </div>
            <span className={addrTimeSectionStyles.itemCardTitle}>Milano</span>
          </div>
          <span className={addrTimeSectionStyles.itemCardText}>Via delle meraviglie 22, 20123 (MI)</span>
        </div>
      </div>
    </section> 
  )
}
