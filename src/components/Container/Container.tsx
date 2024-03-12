import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { rootStore } from '../../store';

import styles from './Container.module.scss';

export const Container = observer(({
  children,
}: {
  children: ReactNode;
}) => {
  const { layout } = rootStore.container;

  return (
    <div className={classNames(styles.container, styles[layout])}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
});
