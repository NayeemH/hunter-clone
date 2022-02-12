import { Link } from "react-router-dom";
import styles from "./CampaignActivity.module.scss";
// icons
import { FiActivity } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
// components
import Navigation from "../../Components/Navigation.js/Navigation";
import CampaignContainer from "../../Components/CampaignContainer/CampaignContainer";
import CampaignFilterEmpty from "../../Components/CampaignFilterEmpty/CampaignFilterEmpty";

function CampaignActivity() {
  return (
      <>
        <Navigation />
        <CampaignContainer>
            <div className={styles.campaignActivity}>
                <CampaignFilterEmpty 
                    icon={<FiActivity />} 
                    heading="No activity yet." 
                    text="You can follow when the emails you send are opened or replied in this section." 
                >
                  <Link to="/" className={styles.eLink}>
                    <span><AiOutlinePlus /></span>New Campaign
                  </Link>
                </CampaignFilterEmpty>
            </div>
        </CampaignContainer>
      </>
  )
}

export default CampaignActivity