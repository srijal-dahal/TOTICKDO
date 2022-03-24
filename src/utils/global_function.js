export function setLocalStorage(key, value, ttl) {
  const now = new Date().getMilliseconds() + ttl;
  let item = {
    value: value,
    ttl: ttl ? now : null,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
export function getLocalStorage(key) {
  let item =  localStorage.getItem(key);
  const date = new Date().getMilliseconds();
  if (item) {
    item = JSON.parse(item);
    if (item.ttl && item.ttl < date) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
  return null;
}
