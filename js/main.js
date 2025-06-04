
  document.addEventListener("DOMContentLoaded", () => {
    const includes = [
      { id: "navbar", file: "navbar.html" },
      { id: "footer", file: "footer.html" }
    ];

    includes.forEach(include => {
      fetch(include.file)
        .then(response => response.text())
        .then(data => {
          document.getElementById(include.id).innerHTML = data;

          if (include.id === "navbar") {
            $('nav i, aside i').click(function () {
              $('aside').toggleClass('open');
            });
          }
        });
    });
  });
