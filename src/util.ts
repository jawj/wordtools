
export const isPOJO = (x: any) =>
  typeof x === 'object' &&
  x !== null &&
  x.constructor === Object &&
  x.toString() === '[object Object]';

export const deterministicReplacer = (_: any, v: any) =>
  typeof v !== 'object' || v === null || Array.isArray(v) ? v :
    Object.fromEntries(Object.entries(v).sort(([ka], [kb]) => ka < kb ? -1 : ka > kb ? 1 : 0));

export const deterministicStringify = (obj: any, space?: string | number | undefined) =>
  JSON.stringify(obj, deterministicReplacer, space);

export function stringWithCommas(n: number) {
  return String(n).replace(/\d(?=(\d{3})+\b)/g, '$&,');
}
