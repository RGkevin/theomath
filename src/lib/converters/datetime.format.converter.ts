/**
 * Convert the Intl.DateTimeFormat part to an Object data structure
 * @param date
 * @param timeZone
 */
export const datetimeFormatConverter = (date: Date, timeZone: string) => {
  const formattedPart = new Intl.DateTimeFormat([], {
    timeZone,
  }).formatToParts(date);

  return formattedPart.reduce((prev, curr) => {
    return { ...prev, [curr.type]: curr.value };
  }, {});
};
