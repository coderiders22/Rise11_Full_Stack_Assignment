import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import ClaimSection from "../components/ClaimSection";


import styles from "../styles/Dashboard.module.css";

export default function Home() {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <ProgressBar />
        <ClaimSection />
    
     
      </main>
    </div>
  );
}
