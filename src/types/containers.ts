export enum ContainerLayouts {
  TL = 'tl',
  TC = 'tc',
  TR = 'tr',
  CL = 'cl',
  CC = 'cc',
  CR = 'cr',
  BL = 'bl',
  BC = 'bc',
  BR = 'br',
};

interface ContainerFields {
  layout: ContainerLayouts;
};

export interface ContainerStoreType extends ContainerFields {
  changeLayout: (layout: ContainerLayouts) => void;
};
