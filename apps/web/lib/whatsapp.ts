import { site } from "./site";

export const DEFAULT_WA_MESSAGE =
  "Hello Woodex Interior, I'm interested in discussing my project. I would like to talk about the next steps.";

export function waLink(message?: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message ?? DEFAULT_WA_MESSAGE,
  )}`;
}
