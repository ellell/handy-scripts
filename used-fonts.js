(function getUsedFonts() {
  const els = document.querySelectorAll("*");
  const fonts = {};
  [...els].forEach((el) => {
    const elFamily = getComputedStyle(el)["font-family"];
    const elWeight = getComputedStyle(el)["font-weight"];
    fonts[elFamily] = fonts[elFamily] || {};
    fonts[elFamily][elWeight] = fonts[elFamily]?.[elWeight] + 1 || 1;
  });

  console.log(fonts);
})()

(function getMatchinEls(family, weight) {
  const els = document.querySelectorAll("*");
  const matching = [];
  [...els].forEach((el) => {
    const elFamily = getComputedStyle(el)["font-family"];
    const elWeight = getComputedStyle(el)["font-weight"];
    if (elFamily.includes(family) && elWeight === weight) {
      matching.push(el);
    }
  });

  console.log("matching", matching);
})('Arial', '400')
