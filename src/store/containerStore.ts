import { makeAutoObservable } from "mobx";

import { ContainerLayouts } from '../types';

export class ContainerStore {
  layout = ContainerLayouts.CC;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  };

  changeLayout(newLayout: ContainerLayouts) {
    this.layout = newLayout;
  };
};
