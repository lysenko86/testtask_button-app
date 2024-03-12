import { ReactNode } from 'react';

import { CrossSvg, DotsSvg } from '../../svgComponents';

import styles from './Popup.module.scss';

export const Popup = ({
  isShow,
  title,
  onClose,
  children,
}: {
  isShow?: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) => !isShow ? null : (
  <div className={styles.container}>
    <div className={styles.head}>
      <div className={styles.dots}>
        <DotsSvg />
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => onClose()}
      >
        <CrossSvg />
      </button>
    </div>
    {children}
  </div>
);
