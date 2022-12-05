import { defineComponent, h, watch, watchEffect } from "vue";
import { portMap, globalState } from "./state";
import { StarportCraft } from "./index";

export const StarportCrarrier = defineComponent({
  props: {
    reSizeTransition: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, ctx) {
    if (props.reSizeTransition) {
      globalState.reSizeTransition = props.reSizeTransition;
    }
    return () => [
      Array.from(portMap.entries()).map(([port, { component, duration }]) =>
        h(StarportCraft as any, { port, component, duration })
      ),
    ];
  },
});
