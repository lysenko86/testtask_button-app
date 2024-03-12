import { MouseEvent } from 'react';
import classNames from 'classnames';

import { ButtonSizes } from "../../types";

import styles from './Button.module.scss';

export const Button = ({
  label,
  href,
  size = ButtonSizes.M,
  onClick,
}: {
  label: string;
  href: string;
  size?: ButtonSizes;
  onClick: () => void;
}) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      className={classNames(styles.button, styles[size])}
      href={href}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};
  