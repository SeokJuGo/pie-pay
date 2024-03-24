'use client';

import ReceiptModal from '@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/ReceiptModal';
import * as styles from '@/styles/payment/result/receipt.css';
import ModalCloseButton from '@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/ModalCloseButton';
import { useReceiptModal } from '@/store/useReceiptModal';


export default function Page() {
  const { isVisible, updateState } = useReceiptModal();
  return (<div className={`${isVisible ? styles.container.invisible : styles.container.visible}`}>
    <div className={`${isVisible ? styles.modal.visible : styles.modal.invisible}`}>
      <div className={styles.header}>
        <div/>
        <div/>
        <ModalCloseButton />
      </div>
      <ReceiptModal />
    </div>
  </div>);
}