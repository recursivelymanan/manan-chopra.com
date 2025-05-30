import { renderEntries } from "@/utils/filterEntries";
import styles from "@/styles/PortfolioView.module.css";

const PortfolioView = () => {
  return (
    <div className={styles.portfoilioViewContainer}>
      <div className={styles.cardGrid}>{renderEntries("")}</div>
    </div>
  );
};

export default PortfolioView;
