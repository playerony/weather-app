export const isObject = (value: any): value is object =>
  typeof value === 'object' && value === Object(value) && !Array.isArray(value);
