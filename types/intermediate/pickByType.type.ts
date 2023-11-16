/**
 * From T, pick a set of properties whose type are assignable to U.
 */

type PickByType<T extends {}, U> = {
  [key in keyof T as T[key] extends U ? key : never]: T[key];
};

/**
 * test
 */
{
  type OnlyBoolean = PickByType<
    {
      name: string;
      count: number;
      isReadonly: boolean;
      isEnable: boolean;
    },
    boolean
  >; // { isReadonly: boolean; isEnable: boolean; }
  const rs: OnlyBoolean = { isReadonly: true, isEnable: true };
}
