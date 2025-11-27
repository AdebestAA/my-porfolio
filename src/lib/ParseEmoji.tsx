import twemoji from "twemoji";

export const parseTwemoji = () => {
  twemoji.parse(document.body, {
    folder: "svg",
    ext: ".svg",
  });
};
