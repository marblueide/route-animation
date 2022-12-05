import {
  reactive,
  Component,
} from "vue";

export function createInstance(p: string, component?: Component) {
  let timer: NodeJS.Timeout;

  const state = reactive<{
    el: HTMLElement | undefined;
    props: any;
    landed: boolean;
    duration: number;
    port: string;
    attrs: any;
    rect: DOMRect;
    trrigerIslanded: (b: boolean) => Promise<void>;
    update: () => void;
    isVisvle:boolean
    component?:Component
  }>({
    el: undefined,
    props: {},
    landed: true,
    duration: 500,
    port: p,
    attrs: {},
    rect: {} as DOMRect,
    isVisvle:false,
    component,
    trrigerIslanded: (b: boolean): Promise<void> => {
      return new Promise((resolve, reject) => {
        clearTimeout(timer);
        if (b == true) {
          timer = setTimeout(() => {
            state.landed = b;
            resolve();
          }, state.duration);
        } else {
          state.landed = b;
          resolve();
        }
      });
    },
    update: () => {
      state.rect = state.el?.getBoundingClientRect() || {} as DOMRect;
    },
  });
  return state;
}

export type StartPortInstance = ReturnType<typeof createInstance>;
