import { createContext } from "react";
import { getCookie } from "cookies-next";

export const CookieContext = createContext(getCookie("session"));
