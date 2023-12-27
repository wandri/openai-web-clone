export type Navigation = {
  icon?: string,
  name: string,
  route?: string[],
  children?: Navigation[],
  run?: () => void
};
