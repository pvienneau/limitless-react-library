import isDate from 'lodash.isdate';

export default function(date) {
  if (!isDate(date)) return date;

  const modifiedDate = new Date(date.getTime());
  modifiedDate.setMonth(modifiedDate.getMonth() + 1);

  return modifiedDate;
}
