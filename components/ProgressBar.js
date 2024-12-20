import React from 'react';
import styles from "../styles/Dashboard.module.css";

const ProgressBar = () => {
  const steps = [
    { title: "Preliminary", time: "" },
    { title: "Your Details", time: "" },
    { title: "KYC", time: "" },
    { title: "Parties", time: "(Approx 5 Min)" },
    { title: "Claim", time: "(Approx 5 Min)" },
    { title: "Review", time: "(Approx 5 Min)" },
    { title: "Payment", time: "(Approx 5 Min)" },
  ];

  return (
    <div className={styles.progressBar}>
      {steps.map((step, index) => (
        <div key={index} className={styles.stepWrapper}>
          {/* Connecting Lines */}
          {index > 0 && (
            <div
              className={`${styles.connectingLine} ${
                index < 3
                  ? styles.lineBlueFull
                  : index === 3
                  ? styles.lineBlueDotted
                  : styles.lineGray
              }`}
            />
          )}

          {/* Step Circle */}
          <div
            className={`${styles.stepCircle} ${
              index < 3
                ? styles.circleActive
                : index === 3
                ? styles.circleCurrent
                : styles.circleInactive
            }`}
          >
            {index < 3 ? "✓" : index + 1}
          </div>

          {/* Step Title */}
          <div className={styles.stepTitle}>
            <span className={styles.stepNumber}>
              {String(index + 1).padStart(2, '0')}
            </span>{' '}
            <span className={styles.stepName}>{step.title}</span>
          </div>

          {/* Step Time */}
          {step.time && <div className={styles.stepTime}>{step.time}</div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;