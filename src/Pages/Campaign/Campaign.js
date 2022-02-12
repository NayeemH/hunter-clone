import { useState } from "react";
import styles from "./Campaign.module.scss";
import { Link } from "react-router-dom";
// icons
import { FiSearch } from "react-icons/fi";
import { BsMegaphone } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
// components
import Navigation from "../../Components/Navigation.js/Navigation";
import CampaignContainer from "../../Components/CampaignContainer/CampaignContainer";
import CampaignFilterEmpty from "../../Components/CampaignFilterEmpty/CampaignFilterEmpty";

function Campaign() {
  const [filterType, setFilterType] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Navigation />
      <CampaignContainer>
        <div className={styles.camp}>
          {/* ============= Heading ============= */}
          <div className={styles.camp__heading}>
            <h3>Campaigns</h3>
            <Link to="/campaigns/add">+ New Campaign</Link>
          </div>

          {/* ============= Options ============= */}
          <div className={styles.camp__options}>
            <div className={styles.options}>
              <div
                className={
                  filterType === "all"
                    ? `${styles.option} ${styles.active}`
                    : `${styles.option}`
                }
                onClick={() => setFilterType("all")}
              >
                All
              </div>
              <div
                className={
                  filterType === "active"
                    ? `${styles.option} ${styles.active}`
                    : `${styles.option}`
                }
                onClick={() => setFilterType("active")}
              >
                Active
              </div>
              <div
                className={
                  filterType === "paused"
                    ? `${styles.option} ${styles.active}`
                    : `${styles.option}`
                }
                onClick={() => setFilterType("paused")}
              >
                Paused
              </div>
              <div
                className={
                  filterType === "draft"
                    ? `${styles.option} ${styles.active}`
                    : `${styles.option}`
                }
                onClick={() => setFilterType("draft")}
              >
                Draft
              </div>
              <div
                className={
                  filterType === "advanced"
                    ? `${styles.option} ${styles.active}`
                    : `${styles.option}`
                }
                onClick={() => setFilterType("advanced")}
              >
                Advanced
              </div>
            </div>
            <div className={styles.search}></div>

            <form className={styles.search}>
              <input
                type="text"
                placeholder="Search a campaign.."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <span>
                <FiSearch />
              </span>
            </form>
          </div>

          {/* ============= Content ============= */}
          <div className={styles.camp__content}>
            <CampaignFilterEmpty
              icon={<BsMegaphone/>}
              heading="Create your first campaign."
              text="All your Campaigns will here"
            >
              <Link to="/" className={styles.eLink}>
                <span><BsQuestionCircle /></span>Tutorial
              </Link>
            </CampaignFilterEmpty>
          </div>
        </div>
      </CampaignContainer>
    </>
  );
}

export default Campaign;
