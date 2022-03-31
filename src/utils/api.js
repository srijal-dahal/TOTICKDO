const api = {
  Dev_api_url: process.env.REACT_APP_DEV_API_URL,
  Prod_api_url: process.env.REACT_APP_PROD_API_URL,
};

export default process.env.NODE_ENV === "development"
  ? api.Dev_api_url
  : api.Prod_api_url;
