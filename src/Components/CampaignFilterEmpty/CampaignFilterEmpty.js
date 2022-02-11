import styles from "./CampaignFilterEmpty.module.scss";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function CampaignFilterEmpty({ icon, heading, text }) {
  return (
    <div className={styles.campaignFilterEmpty}>
      <div>{icon}</div>
      <h4>{heading}</h4>
      <p>{text}</p>
      <Link to="/"><span><BsQuestionCircle /></span>Tutorial</Link>
    </div>
  );
}

export default CampaignFilterEmpty;
