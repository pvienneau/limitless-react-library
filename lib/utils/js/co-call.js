export default function coCall(...fns) {
  return function(...args) {
    fns.forEach(fn => {
      if (typeof fn === 'function') fn.apply(this, args);
    });
  }
}
