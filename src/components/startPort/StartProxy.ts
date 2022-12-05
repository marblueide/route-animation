import { isObject } from "@vueuse/core";
import { defineComponent, h, isVNode, markRaw, reactive, ref, warn, watch } from "vue";
import { StartPortProxy } from "./StartPortProxy";
import { getInstanceByPort } from "./state";

export const StartProxy = defineComponent({
  inheritAttrs: true,
  props: {
    port: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
      default() {
        return 500;
      },
    },
  },
  setup(props, ctx) {
    const slots = ctx.slots.default?.();
    let context = getInstanceByPort(props.port);
    let component: any;
    let childrenProps:object;
    if (context?.component) {
      component = context.component;
      childrenProps = context.props ?? {}
    } else {
      if (!slots)
        throw new Error("[Vue Starport] Slot is required to use <Starport>");
      if (slots.length !== 1)
        throw new Error(
          `[Vue Starport] <Starport> requires exactly one slot, but got ${slots.length}`
        );

      const slot = slots[0];
      component = slot.type as any;
      childrenProps = slot.props ?? {}
    }

    if (!isObject(component) || isVNode(component)) {
      component = {
        render() {
          return slots;
        },
      };
    }
    return () =>
      h(StartPortProxy, {
        ...props,
        component: markRaw(component),
        props: childrenProps,
      });
  },
});
