import { reactive } from "vue";

const store = { map: null, view: null };

export default function useStore() {
  // if (store.map) {

  return store;
  // } else {
  //   const state = reactive({
  //     map: store.map,
  //     view: store.view,
  //   });
  //   return { ...state };
  // }
}