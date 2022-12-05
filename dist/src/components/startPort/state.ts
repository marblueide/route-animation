import { reactive, Component } from "vue";
import { createInstance, StartPortInstance } from "./instance";

const portMap = reactive(new Map<string, StartPortInstance>());
const globalState = reactive<{
  reSizeTransition:boolean
}>({
  reSizeTransition:false
})

const getInstance = (port: string, component?: Component): StartPortInstance => {
  let context = portMap.get(port) as StartPortInstance;
  if (!context) {
    context = createInstance(port, component)
    portMap.set(port, context);
  }
  return context
};

const getInstanceByPort = (port: string) => {
  return portMap.get(port)
}

const dispose = (port: string) => {
  const context = portMap.get(port);
  context?.trrigerIslanded(false);
  portMap.delete(port);
};

export { getInstance, dispose, portMap,globalState,getInstanceByPort };
