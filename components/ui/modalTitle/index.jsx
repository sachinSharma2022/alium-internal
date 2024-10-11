import styles from "./style.module.scss";
import Image from "next/image";

function ModalTitle({ children, className, backHandler }) {
  return (
    <div>
      <h4 className={`${styles.modalTitle} ${className}`}>
        {backHandler && (
          <button type="button" onClick={backHandler}>
            <Image
              src="/images/close.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        )}
        {children}
      </h4>
    </div>
  );
}
export default ModalTitle;
