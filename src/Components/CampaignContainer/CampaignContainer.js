import styles from "./CampaignContainer.module.scss";
import { NavLink } from "react-router-dom";

function CampaignContainer({children}) {
  return (
    <div className={styles.campaign}>
        {/* ====================== Options ====================== */}
        <div className={styles.campaign__options}>
          <div className={styles.first}>
            <NavLink activeClassName={styles.activeLink} exact to="/campaigns">Campaigns</NavLink>
            <NavLink activeClassName={styles.activeLink} exact to="/campaigns/activity">Activity</NavLink>
          </div>
          <div className={styles.down}>
            <h3>Settings</h3>
            <NavLink activeClassName={styles.activeLink} exact to="/">Settings</NavLink>
            <NavLink activeClassName={styles.activeLink} exact to="/">Templates</NavLink>
            <NavLink activeClassName={styles.activeLink} exact to="/">Unsubscription</NavLink>
          </div>
        </div>

        {/* ====================== Operations ====================== */}
        <div className={styles.campaign__operations}>
            {children}
        </div>
    </div>
  )
}

export default CampaignContainer