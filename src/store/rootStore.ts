import { makeAutoObservable } from "mobx";

import { RootStoreType } from '../types';

import { ButtonStore, ContainerStore } from "./";

class RootStore {
  container = new ContainerStore();
  button = new ButtonStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  };
};

export const rootStore: RootStoreType = new RootStore();
