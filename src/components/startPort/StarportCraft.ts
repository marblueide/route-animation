import { useEventListener, useMutationObserver } from "@vueuse/core";
import {
  computed,
  defineComponent,
  h,
  mergeProps,
  onMounted,
  StyleValue,
  Teleport,
  watch,
} from "vue";
import { getInstance, globalState } from "./state";

export const StarportCraft = defineComponent({
  props: {
    duration: {
      type: Number,
      default() {
        return 500;
      },
    },
    port: {
      type: String,
      required: true,
    },
    component: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    const state = getInstance(props.port, props.component);
    const telport = computed(() => !!(state.el && state.landed));
    const style = computed<StyleValue>(() => {
      const res: StyleValue = {
        position: "absolute",
        transition: `all ${state.duration ?? 500}ms`,
        left: `${state.rect?.left ?? 0}px`,
        top: `${state.rect?.top ?? 0}px`,
        width: `${state.rect?.width ?? 0}px`,
        height: `${state.rect?.height ?? 0}px`,
        pointerEvents:'none',
      };
      if(state.isVisvle){
        res.display = "none"
      }
      return res;
    });

    watch(
      () => state.el,
      (el,oldEl) => {
        if (el) {
          state.update();
          useMutationObserver(el, state.update, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
          });
        }
      }
    );

    useEventListener(window, "resize", () => {
      if (globalState.reSizeTransition) {
        state.update();
        state.trrigerIslanded(false).then(() => {
          state.trrigerIslanded(true);
        });
      }
    });

    return () => {
      return h(
        "div",
        {
          ...state.attrs,
          class: `startport-container ${props.port}`,
          style: style.value,
        },

        h(
          Teleport,
          {
            to: telport.value ? state.el : "body",
            disabled: !telport.value,
          },
          h(props.component, mergeProps(state.props))
        )
      );
    };
  },
});
