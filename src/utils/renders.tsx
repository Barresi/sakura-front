export function renderIcon<T, P>(icon?: T, icons?: P) {
  const result = icons![icon as keyof typeof icons];

  if (typeof result == "string") {
    return <img src={result} alt="" />;
  } else if (typeof result == "object") {
    return result;
  } else {
    console.error(`Error in renderIcon, button.tsx! ${icon} is not an icon`);
  }
}
