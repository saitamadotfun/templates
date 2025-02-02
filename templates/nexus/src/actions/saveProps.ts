"use server";

import { XiorError } from "xior";
import { Api } from "saitamadotfun/sdk";

import { saitamaApiKey, saitamaBaseApiUrl, siteId } from "@/config";

export const saveProps = async (props: object) => {
  "use action";
  const api = new Api(saitamaBaseApiUrl, saitamaApiKey);
  return api.site
    .sync(siteId, { document: props })
    .catch((error) => {
      if (error instanceof XiorError)
        return Promise.reject(error.response?.data);
      return Promise.reject(error);
    })
    .then(({ data }) => data);
};

export const getProps = async (): Promise<
  typeof import("../../.saitama/saitama.json")
> => {
  "use action";
  const props = await require("../../.saitama/saitama.json");
  const api = new Api(saitamaBaseApiUrl, saitamaApiKey, { cache: "no-store" });
  return api.site
    .retrieve(siteId)
    .then(async ({ data }) => {
      const sync = await api.collection
        .retrieve(data.sync as unknown as string)
        .then(({ data }) => data);
      return Object.assign(props, sync.document);
    })
    .catch(() => props);
};
