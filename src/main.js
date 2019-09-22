import * as components from "./components";

const ComponentLibrary = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  }
};

export default ComponentLibrary;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibrary);
}

/**
 * para usar
 */
// import Vue from 'vue'
// import ComponentLibrary from './main.js'
//
// Vue.use(ComponentLibrary)
