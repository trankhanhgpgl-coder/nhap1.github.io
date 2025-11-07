const container = document.getElementById("items");

// Hiển thị danh sách hiện vật
function renderList() {
  container.innerHTML = items
    .map(
      (item) => `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
        <button onclick="viewDetail(${item.id})">🔍 Xem chi tiết</button>
      </div>
    `
    )
    .join("");
}

// Hiển thị chi tiết hiện vật trong cùng trang
function viewDetail(id) {
  const item = items.find((i) => i.id === id);
  if (!item) return;

  container.innerHTML = `
    <div class="detail-card">
      <img src="${item.img}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.desc}</p>
      <hr>
      <h3>English Translation:</h3>
      <p><b>${item.name_en}</b></p>
      <p>${item.desc_en}</p>
      <button class="back-btn" onclick="renderList()">⬅️ Quay lại</button>
    </div>
  `;
}

// Tải danh sách khi mở trang
renderList();

