import type { UseNamedStateReturnType } from "./useNamedState";
/**
 *
 * Assert: If localStorageKey is not disabled, T must be
 * serializable with JSON.stringify.
 *
 * const { useFoo } = createUseGlobalState2({
 *     "getDefaultState": ()=> 33,
 *     "name": "foo"
 * });
 *
 * const { foo, setFoo  } = useFoo();
 */
export declare function createUseGlobalState<T, Name extends string>(name: Name, 
/** If function called only if not in local storage */
initialState: T | (() => T), params?: {
    doDisableLocalStorage?: boolean;
}): Record<`use${Capitalize<Name>}`, () => UseNamedStateReturnType<T, Name>>;