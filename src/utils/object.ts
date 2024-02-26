import { get } from "lodash";

export const getValue = (obj: object, key: string, defaultValue?: any) => {
  return get(obj, key, defaultValue);
};


