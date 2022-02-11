import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
// icons
import { FiUsers, FiLogOut } from "react-icons/fi";
import { BsMegaphone, BsArrowUpCircle, BsCodeSlash } from "react-icons/bs";
import { BiBell, BiHelpCircle, BiChevronDown } from "react-icons/bi";
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlineBarChart } from "react-icons/ai";

function Navigation() {
  const [optionOpen, setOptionOpen] = useState(false);

  return (
    <>
      <div className={styles.navigation}>
        {/* =============== LEFT PART =============== */}
        <div className={styles.navigation__left}>
          {/* brand - icon */}
          <div className={styles.brand}>L</div>
          {/* links */}
          <div className={styles.links}>
            <div className={styles.link}>
              <NavLink activeClassName={styles.activeLink} to="/leads">
                <span><FiUsers /></span>Leads
              </NavLink>
            </div>
            <div className={styles.link}>
              <NavLink activeClassName={styles.activeLink} to="/campaigns">
                <span><BsMegaphone /></span>Campaigns
              </NavLink>
            </div>
          </div>
        </div>

        {/* =============== RIGHT PART =============== */}
        <div className={styles.navigation__right}>
          <div className={styles.link}><BiHelpCircle /></div>
          <div className={styles.link}><BiBell /></div>

          <div className={styles.profile} onClick={() => {setOptionOpen(!optionOpen);}}>
            {/* profile image */}
            <div className={styles.image}>
              <div></div>
            </div>
            {/* user name and plan */}
            <div className={styles.info}>
              <h4>Miznaur Rahman</h4>
              <p>Free plan</p>
            </div>
            {/* icon */}
            <div className={styles.icon}>
              <BiChevronDown />
            </div>
          </div>
        </div>

      </div>

      {/* ============ PROFILE OPTIONS ============ */}
      {optionOpen ? (
        <div className={styles.profileOptions}>
          <div className={styles.wrapper} onClick={() => {setOptionOpen(!optionOpen);}}>
            <div className={styles.container} onClick={(e) => {e.stopPropagation();}}>
              {/* subscription buttons */}
              <div className={styles.subscription}>
                <Link to="/"><span><BsArrowUpCircle/></span>Upgrade</Link>  
              </div>
              {/* links */}
              <Link to="/"><span><AiOutlineUser/></span>Account</Link>
              <Link to="/"><span><BsArrowUpCircle /></span>Subscription</Link>
              <Link to="/"><span><AiOutlineBarChart/></span>Usage</Link>
              <Link to="/"><span><AiOutlinePlusCircle/></span>Add on</Link>
              <Link to="/"><span><BsCodeSlash/></span>Api</Link>
              <Link to="/"><span><FiLogOut/></span>Log out</Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navigation;
