function loadingEffect(div) {
  console.log("DIV: " + div);
  div.style.display = "none";
  toggleVisibility(div);
  setTimeout(() => {
    console.log(div);
    toggleVisibility(div);
  }, 3000);
}

function toggleVisibility(div) {
  if (div.style.display === "none") {
    console.log("NONe");
    div.style.display = "block";
  } else {
    console.log("BLOCK");
    div.style.display = "none";
  }
}

export { loadingEffect, toggleVisibility };
