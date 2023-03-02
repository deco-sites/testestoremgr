import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 545,
  site: "testestoremgr",
  domains: ["testestoremgr.deco.site"],
});