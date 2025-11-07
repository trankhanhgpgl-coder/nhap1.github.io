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

// Chuyển sang trang chi tiết
function viewDetail(id) {
  window.location.href = `suppage.html?id=${id}`;
}

// Khi mở trang chính thì render
if (container) renderList();
