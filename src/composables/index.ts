import { Component, reactive } from "vue";
import { unrefElement, useMutationObserver } from "@vueuse/core";

export const useElementBoundingRect = (el: Component) => {
  const element = unrefElement(el);
  const rect = reactive({
    height: 0,
    width: 0,
    left: 0,
    top: 0,
    margin: "0px",
    padding: "0px",
    update,
  });

  function update() {
    if (!element) {
      return;
    }
    const { width, height, left, top } = element.getBoundingClientRect();
    Object.assign(rect, { width, height, left, top });
  }

  return rect;
};
