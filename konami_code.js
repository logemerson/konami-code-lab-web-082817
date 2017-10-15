const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let i = 0;

  function contraCode(e) {
    const stroke = parseInt(e.which || e.detail);

    if (stroke === code[i]) {
      i++;
      if (i === code.length) {
        alert("You've gained 30 lives! Shoot a gun a bunch.");
        i = 0;
      }
    } else {
      i = 0;
    }
  }
  document.body.addEventListener("keydown", contraCode);
}
