const stripString = string => {
  const newString = Array.prototype.map.call(
    string
      .toLowerCase()
      .replace(/\s+/g,' ')
      .trim(),
    chr => chr.match(/^[a-z0-9 ]+$/)
  ).join('');
  return newString.trim().replace(/\s\s+/g, ' ');
}

export default stripString;