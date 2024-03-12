export enum ButtonSizes {
  XL = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs',
};

export interface ButtonFields {
  label: string;
  href: string;
  size: ButtonSizes;
};

export interface ButtonStoreType extends ButtonFields {
  changeButton: (newButton: ButtonFields) => void;
};
