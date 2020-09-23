export function isFirstInMap(index: number): boolean {
  if (index === 0) {
    return true;
  } else {
    return false;
  }
}

export function isShopping(route: string): boolean {
  if (route === '/shop') {
    return true;
  } else {
    return false;
  }
}
