type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([className, value]) => {
        return Boolean(value);
      })
      .map(([className, value]) => {
        return className;
      }),
    ...additional,
  ].join(" ");
}
