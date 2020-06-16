export const integerFormatter = (val) => {
  if (val === '-' ) return '-'
  return isNaN(parseInt(val)) ? '' : parseInt(val);
}
