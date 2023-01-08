const btn = Array.prototype.slice.call(document.querySelectorAll(".btn"));

function color(row, start) {
  row.map(
    (i, n) =>
      (i.style.backgroundColor = n % 2 === start ? "#769655" : "#eeeed2")
  );
}

const row = Array.from({ length: 8 }, (_, n) => 8 * n).map((i) =>
  btn.slice(i, i + 8)
);

row.forEach((i, n) => {
  color(i, n % 2);
});
