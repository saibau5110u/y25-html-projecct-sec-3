// Global JS for all pages
document.addEventListener("DOMContentLoaded", () => {
  const reportForm = document.querySelector(".report-form");
  if (reportForm) {
    reportForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Expense submitted (demo only).");
      reportForm.reset();
    });
  }

  const helpForm = document.querySelector(".help-form");
  if (helpForm) {
    helpForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("HR query sent (demo only).");
      helpForm.reset();
    });
  }

  const suggestForm = document.querySelector(".suggest-form");
  if (suggestForm) {
    suggestForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Lead saved (demo only).");
      suggestForm.reset();
    });
  }
});
