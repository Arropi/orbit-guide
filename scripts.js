const data = {
  manufaktur: {
    title: "Manufaktur",
    description: "Sedang memanufaktur",
  },
  distribusi: {
    title: "Distribusi",
    description: "Sedang mendistribusi",
  },
  retail: {
    title: "Retail",
    description: "Sedang meretail",
  },
  logistik: {
    title: "Logistik",
    description: "Sedang melogistik",
  },
  keuangan: {
    title: "Keuangan",
    description: "Sedang menguangkan",
  },
  kesehatan: {
    title: "Kesehatan",
    description: "Sedang menyehatkan",
  },
  pendidikan: {
    title: "Pendidikan",
    description: "Sedang mendidik",
  },
  lainnya: {
    title: "Lainnya",
    description: "Sedang melakukan hal lain",
  },
};

function mulai() {
  const container = document.querySelector(".grid-content");
  const title = document.getElementById("title");
  const desc = document.getElementById("description");

  container.addEventListener("click", function (event) {
    const target = event.target.closest("[data-id]");
    if (!target) return;

    const id = target.getAttribute("data-id");
    const sectorData = data[id];

    if (!sectorData) return;

    title.textContent = sectorData.title;
    desc.textContent = sectorData.description;
  });
}

mulai();
