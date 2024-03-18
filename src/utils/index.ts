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

export const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
