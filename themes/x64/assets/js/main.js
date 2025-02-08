// open external links in new tab
Array.from(document.querySelectorAll("a"))
  .filter((a) => {
    return a.hostname && a.hostname !== location.hostname;
  })
  .forEach(
    (a) =>
      a.setAttribute("target", "_blank") && a.setAttribute("rel", "external")
);