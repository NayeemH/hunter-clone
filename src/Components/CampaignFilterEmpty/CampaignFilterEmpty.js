import styles from "./CampaignFilterEmpty.module.scss";

function CampaignFilterEmpty({ icon, heading, text, children }) {
  return (
    <div className={styles.campaignFilterEmpty}>
      <div>{icon}</div>
      <h4>{heading}</h4>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default CampaignFilterEmpty;
