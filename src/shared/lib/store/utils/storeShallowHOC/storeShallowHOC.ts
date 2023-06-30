import { StoreApi } from "zustand";
import { shallow } from "zustand/shallow";
import { UseBoundStore } from "zustand/react";

/**
 * Исключает необходимость каждый раз использовать middleware "shallow" при импорте состояний в react-компонент.
 *
 * @param store Принимает ссылку на стор созданный при помощи create из пакета zustand
 * @returns Возвращает тот же стор, но уже раширенный с функционалом middleware shallow, который можно использовать как useAppSelector в Redux.
 *
 * @abstract
 * import { create } from "zustand";
 *
 * const store = create( ... );
 *
 * export const useMyStore = useShallowZustand(store);
 */
export const storeShallowHOC = <T>(store: UseBoundStore<StoreApi<T>>) => {
  const storeWithShallow: (selector: (state: T) => T) => T = (selector) =>
    store(selector, shallow);
  return storeWithShallow;
};
