const searchInput = document.querySelector("#guideline-search");
const cards = [...document.querySelectorAll(".guideline-card")];
const emptyState = document.querySelector("#empty-state");
const searchStatus = document.querySelector("#search-status");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  let visibleCount = 0;

  cards.forEach((card) => {
    const matches = card.textContent.toLocaleLowerCase("es").includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyState.hidden = visibleCount > 0;
  searchStatus.textContent = query
    ? `${visibleCount} ${visibleCount === 1 ? "lineamiento encontrado" : "lineamientos encontrados"}.`
    : "";
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) &&
    !document.activeElement.isContentEditable
  ) {
    event.preventDefault();
    searchInput.focus();
  }
});
