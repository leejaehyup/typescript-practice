/**
 * From T, pick a set of properties whose type are not assignable to U.
 */

type OmitByType<T, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key];
};

/**
 * test
 */
{
  type OmitBoolean = OmitByType<
    {
      name: string;
      count: number;
      isReadonly: boolean;
      isEnable: boolean;
    },
    boolean
  >; // { name: string; count: number }
}
