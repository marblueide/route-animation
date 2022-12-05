import {
  computed,
  defineComponent,
  h,
  nextTick,
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { getInstance } from "./state";

export const StartPortProxy = defineComponent({
  inheritAttrs: true,
  props: {
    port: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    component: {
      type: Object,
      required: true,
    },
    props: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    let state = getInstance(props.port, props.component);
    state.duration = props.duration;
    state.props = props.props ?? {};
    state.attrs = ctx.attrs;
    const proxyRef = ref<HTMLElement>();

    // const unWatch =  watch(
    //   () => props.port,
    //   (val) => {
    //     console.log(props.props.src)
    //     state = getInstance(props.port, props.component);
    //     // state = getInstance(props.port, props.component);
    //     // state.duration = props.duration;
    //     // state.props = props.props ?? {};
    //     // state.attrs = ctx.attrs;
    //   }
    // );

    onMounted(() => {
      state.el = proxyRef.value;
      state.isVisvle = false;
      state.trrigerIslanded(true);
      onActivated(() => {
        state.el = proxyRef.value;
        state.isVisvle = false;
        state.trrigerIslanded(true);
      });
    });

    onDeactivated(async () => {
      state.el = undefined;
      state.isVisvle = true;
      state.trrigerIslanded(false);
      await nextTick();
      if (state.el == proxyRef.value) {
        state.rect = {} as any;
      }
    });

    onUnmounted(async () => {
      state.el = undefined;
      state.isVisvle = true;
      state.trrigerIslanded(false);
      await nextTick();
      if (state.el == proxyRef.value) {
        state.rect = {} as any;
      }
    });

    return () =>
      h(
        "div",
        {
          ref: proxyRef,
          class: "startPort-proxy",
          style: {
            transition: `all ${state.duration}ms`,
          },
        },
        ctx.slots.default ? h(ctx.slots.default) : undefined
      );
  },
});
