import { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { ButtonSizes, ContainerLayouts } from '../../types';
import { rootStore } from '../../store';

import {
  HLayoutCenterSvg,
  HLayoutLeftSvg,
  HLayoutRightSvg,
  VLayoutBottomSvg,
  VLayoutCenterSvg,
  VLayoutTopSvg,
} from '../../svgComponents';

import styles from './Form.module.scss';

export const Form = observer(() => {
  const {
    container: { layout, changeLayout },
    button: { label, href, size, changeButton },
  } = rootStore;

  const [vLayout, setVLayout] = useState(layout[0]);
  const [hLayout, setHLayout] = useState(layout[1]);

  useEffect(() => {
    const value = `${vLayout}${hLayout}` as ContainerLayouts;
    changeLayout(value);
  }, [vLayout, hLayout]);

  const vLayouts = [
    { icon: <VLayoutBottomSvg />, value: 'b' },
    { icon: <VLayoutCenterSvg />, value: 'c' },
    { icon: <VLayoutTopSvg />, value: 't' },
  ];

  const hLayouts = [
    { icon: <HLayoutRightSvg />, value: 'r' },
    { icon: <HLayoutCenterSvg />, value: 'c' },
    { icon: <HLayoutLeftSvg />, value: 'l' },
  ];

  const handleChangeLabel = ({ target }: ChangeEvent<HTMLInputElement>) =>
    changeButton({ href, size, label: target.value });

  const handleChangeHref = ({ target }: ChangeEvent<HTMLInputElement>) =>
    changeButton({ size, label, href: target.value });

  const handleChangeSize = (value: ButtonSizes) =>
    changeButton({ href, label, size: value });

  return (
    <div>
      <div className={styles.block}>
        <div className={styles.label}>Label</div>
        <input
          type="text"
          value={label}
          onChange={handleChangeLabel}
          className={styles.input}
          placeholder="Button's title"
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.block}>
        <div className={styles.label}>Action</div>
        <input
          type="text"
          value={href}
          onChange={handleChangeHref}
          className={styles.input}
          placeholder="External link or existing page"
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.block}>
        <div className={styles.label}>Size</div>
        <div className={styles.buttonsContainer}>
          {(Object.keys(ButtonSizes) as Array<keyof typeof ButtonSizes>).map(value => (
            <button
              key={value}
              className={classNames({
                [styles.button]: true,
                [styles.sizeBtn]: true,
                [styles.active]: ButtonSizes[value] === size as string,
              })}
              onClick={() => handleChangeSize(ButtonSizes[value])}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={classNames(styles.block, styles.buttonsContainer)}>
        {hLayouts.map(({ icon, value }) => (
          <button
            key={`h-${value}`}
            className={classNames({
              [styles.button]: true,
              [styles.layoutBtn]: true,
              [styles.active]: value === hLayout,
            })}
            onClick={() => setHLayout(value)}
          >
            {icon}
          </button>
        ))}
        {vLayouts.map(({ icon, value }) => (
          <button
            key={`v-${value}`}
            className={classNames({
              [styles.button]: true,
              [styles.layoutBtn]: true,
              [styles.active]: value === vLayout,
            })}
            onClick={() => setVLayout(value)}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
});
