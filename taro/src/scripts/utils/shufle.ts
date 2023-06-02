function shufle<T>(arr: Array<T>): Array<T> {
  const arrShuf = [...arr];
  for(let i=0; i< arr.length; i++) {
    const j = Math.floor(Math.random() * (arr.length));
    [arrShuf[i], arrShuf[j]] = [arrShuf[j], arrShuf[i]];
  }
  return arrShuf
}
export default shufle