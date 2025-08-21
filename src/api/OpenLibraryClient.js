import queryString from "query-string";

export const BASE_DOMAIN = "openlibrary.org";

const get = async (uri, params) => {
  const url = `https://${BASE_DOMAIN}${uri}?${queryString.stringify(params)}`;

  const response = await fetch(url, {
    cache: "no-cache",
    headers: {
      Accept: "application/json",
    },
  });

  return await response.json();
};

export const findBooks = (title) => get("/search.json", { title });
