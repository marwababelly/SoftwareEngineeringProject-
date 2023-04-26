export const BASE_URL = "https://software-engineering-project2.onrender.com/"; // api base url

export const BASE_ONLINE_URL = "https://software-engineering-project.com/"; // website base url

const DEVELOPMENT_BASE_URL = BASE_URL;

const DEVELOPMENT_API_BASE_URL = `${BASE_URL}api`;

const PRODUCTION_BASE_URL = BASE_URL;

const PRODUCTION_API_BASE_URL = `${BASE_URL}api`;

export const SERVER_BASE_URL =
  process.env.NODE_ENV === "production"
    ? PRODUCTION_BASE_URL
    : DEVELOPMENT_BASE_URL;

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? PRODUCTION_API_BASE_URL
    : DEVELOPMENT_API_BASE_URL;

export const WEBSITE_BASE_URL = BASE_URL;
