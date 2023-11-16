/**
 * Implement a generic RequiredByKeys<T,  K> which takes two type argument T and K.
 * K specify the set of properties of T that should set to be required.
 * When K is not provided, it should make all properties required just like the normal Required<T>.
 */

type RequiredByKeys<T, K extends keyof T = keyof T> = {
  [key in keyof T as key extends K ? key : never]-?: T[key];
} & {
  [key in Exclude<keyof T, K>]?: T[key];
};

/**
 * test
 */
{
  interface User {
    name?: string;
    age?: number;
    address?: string;
  }

  type UserRequiredName = RequiredByKeys<User, 'name'>; // { name: string; age?: number; address?: string }
}
