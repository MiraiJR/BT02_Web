import axiosClient from "../libs/axiosClient";

export default {
  search: (query, page, per_page) =>
    axiosClient.get(`/search`, {
      params: {
        query,
        page,
        per_page,
      },
    }),
  getImages: (page, per_page) =>
    axiosClient.get(`/curated`, {
      params: {
        page,
        per_page,
      },
    }),
};
