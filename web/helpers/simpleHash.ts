const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; //eslint-disable-line no-bitwise
    // Convert to 32bit integer
    hash &= hash; //eslint-disable-line no-bitwise
  }
  return new Uint32Array([hash])[0].toString(36);
};

export default simpleHash;
