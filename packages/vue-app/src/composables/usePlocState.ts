import { Ploc } from "@ecommerce/core";
import { Ref, ref } from "vue";

export function usePlocState<S>(ploc: Ploc<S>) {

  const state = ref(ploc.state) as Ref<S>;

  const subscribeState = (newState: S) => {
    state.value = newState;
  }

  const subscribe = () => {
    ploc.subscribe(subscribeState);
  }

  const unsubscribe = () => {
    ploc.unsubscribe(subscribeState);
  }

  return { 
    state,
    subscribe,
    unsubscribe
  };
}