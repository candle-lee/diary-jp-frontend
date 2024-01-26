import Cookies from "js-cookie";

export const hasPasscodeCookie = () => {
    return Cookies.get("passcode") !== undefined;
};