"use server";
"use action";

import { cookies } from "next/headers";
import { Api } from "saitamadotfun/sdk";

import { saitamaBaseApiUrl, siteId } from "@/config";

export const saveProps = async (props: object) => {
  "use action";
  const authToken = cookies().get("auth.token");
  if (authToken && authToken.value) {
    const api = new Api(saitamaBaseApiUrl, authToken.value);
    await api.site.sync(siteId, { document: props });
  }

  return { status: "success" };
};

export const getProps = async (): Promise<
  typeof import("../../.saitama/saitama.json")
> => {
  "use action";
  const authToken = cookies().get("auth.token");
  if (authToken && authToken.value) {
    const api = new Api(saitamaBaseApiUrl, authToken.value);
    return api.site
      .retrieve(siteId)
      .then(({ data }) => data.sync.document) as never;
  }

  return import("../../.saitama/saitama.json");
};
