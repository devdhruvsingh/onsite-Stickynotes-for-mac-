// Cross-browser compatibility: Safari prefers `browser`, Chrome uses `chrome`
const runtime = typeof browser !== "undefined" ? browser : chrome;

const note = document.getElementById("sticky-note");
const noteContent = document.getElementById("note-content");
const closeButton = document.getElementById("close-note");

const colors = [
  "#fdf0a8",
  "#ffd9b3",
  "#ffc2c2",
  "#c9f2cf",
  "#bcdcff",
  "#d6ccff",
  "#ffd1f0"
];

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

async function loadNote() {
  const result = await runtime.storage.local.get(["noteContent"]);

  if (result.noteContent !== undefined) {
    noteContent.value = result.noteContent;
  }

  // Always pick a fresh random color every time the popup opens
  const color = getRandomColor();
  note.style.background = color;
}

noteContent.addEventListener("input", async () => {
  await runtime.storage.local.set({
    noteContent: noteContent.value
  });
});

closeButton.addEventListener("click", () => {
  window.close();
});

loadNote();