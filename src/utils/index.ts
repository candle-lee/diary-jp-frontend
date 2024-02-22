export const converToDateTime = (dateTime: string | undefined) => {
    return dateTime ? new Date(parseInt(dateTime, 10)).toUTCString() : null;
}