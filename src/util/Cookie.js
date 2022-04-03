import { Cookies } from "react-cookie";

const cookies = new Cookies();
export const getCookie = (accessToken) => {
  return cookies.get(accessToken);
};
export const setCookie = (cookieName, value, option) => {
  return cookies.set(cookieName, value, { ...option });
};
