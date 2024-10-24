import { create as _create, type StateCreator } from "zustand";
import { type StoreApi, type UseBoundStore } from "zustand";

type SuperStoreCategory = "session";

export type StoreCategory = "auth" | SuperStoreCategory;

const storeResetFunctions = new Map<StoreCategory, Set<() => void>>();

export const createClearable = (categories: StoreCategory[]) =>
  (<T>(initializer: StateCreator<T> | undefined) => {
    if (initializer === undefined) {
      return createClearable;
    }

    const store = _create(initializer);
    const initialState = store.getState();

    for (const category of categories) {
      const list = storeResetFunctions.get(category) ?? new Set();
      list.add(() => {
        store.setState(initialState, true);
      });
      storeResetFunctions.set(category, list);
    }

    return store;
  }) as typeof _create;

export const resetStores = (categories: StoreCategory[]) => {
  for (const category of categories) {
    const list = storeResetFunctions.get(category);

    if (list !== undefined) {
      for (const resetStore of list) {
        resetStore();
      }
    }
  }
};

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
