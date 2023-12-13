export type Navigation = {
  icon?: string,
  name: string,
  route?: string[],
  isSubRoute?: boolean,
  hasSubRoutes?: boolean,
  run?: () => void
};
