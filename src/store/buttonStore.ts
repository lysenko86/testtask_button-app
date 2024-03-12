import { makeAutoObservable } from "mobx";

import { ButtonSizes, ButtonFields } from '../types';

export class ButtonStore {
  label = 'Button';
  href = 'https://google.com';
  size = ButtonSizes.M;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  };

  changeButton({
    label: newLabel,
    href: newHref,
    size: newSize,
  }: ButtonFields) {
    this.label = newLabel;
    this.href = newHref;
    this.size = newSize;
  };
};
