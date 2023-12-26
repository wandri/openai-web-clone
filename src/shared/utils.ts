export function toBoolean(value: string | boolean): boolean {
  return value !== null && `${value}` !== 'false';
}
