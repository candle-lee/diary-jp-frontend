export const converToDateTime = (dateTime: string | undefined) => {
  return dateTime ? new Date(parseInt(dateTime, 10)).toUTCString() : null;
};

export const convertBytes = (bytes: number) => {
  const units = ["bytes", "KB", "MB", "GB"];
  let unitIndex = 0;
  let convertedValue = bytes;

  while (convertedValue >= 1024 && unitIndex < units.length - 1) {
    convertedValue /= 1024;
    unitIndex++;
  }

  return convertedValue.toFixed(2) + " " + units[unitIndex];
};
