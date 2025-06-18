//  נור צובח 214459463
// ביסאם פרח 211861208
"use strict";
// משתנים לקישור לאלמנטים מה-DOM
const listEl = document.getElementById("contactsList");
const contactCountEl = document.querySelector(".contact-count");
const searchInput = document.getElementById("searchInput");
const addBtn = document.getElementById("addBtn");
const effectBtn = document.getElementById("effectBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const popupOverlay = document.getElementById("popupOverlay");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const addressInput = document.getElementById("addressInput");
const notesInput = document.getElementById("notesInput");
const tagsInput = document.getElementById("tagsInput");
const favoriteInput = document.getElementById("favoriteInput");
const imageInput = document.getElementById("imageInput");
const cancelBtn = document.getElementById("cancelBtn");

const infoOverlay = document.getElementById("infoOverlay");
const infoContent = document.getElementById("infoContent");

// מערך נתונים התחלתי של אנשי קשר
let contactsArr = [
  {
    id: generateID(),
    name: "Roni",
    phone: "0525252525",
    email: "Roni@gmail.com",
    address: "Haifa",
    notes: "",
    tags: "Coworker",
    favorite: false,
    image: "./images/Roni.png",
  },
  {
    id: generateID(),
    name: "Kai",
    phone: "0585858585",
    email: "Kai@gmail.com",
    address: "Tel-Aviv",
    notes: "",
    tags: "Client",
    favorite: false,
    image: "./images/Kai.png",
  },
  {
    id: generateID(),
    name: "Lisa Rosy",
    phone: "0549123126",
    email: "LisaRosy@gmail.com",
    address: "Haifa",
    notes: "",
    tags: "Coworker",
    favorite: true,
    image: "./images/Lisa.webp",
  },
  {
    id: generateID(),
    name: "Barbara Rosy",
    phone: "0549123126",
    email: "BarbaraR@gmail.com",
    address: "Haifa",
    notes: "Lisa's cousin",
    tags: "Client",
    favorite: false,
    image: "./images/barbara.webp",
  },
  {
    id: generateID(),
    name: "David",
    phone: "0528412329",
    email: "David@gmail.com",
    address: "Tel-Aviv",
    notes: "",
    tags: "Client",
    favorite: false,
    image: "./images/David.png",
  },
];

let editingId = null; // מזהה עריכה של איש קשר

// פונקציה שמציגה את רשימת אנשי הקשר במסך
function renderContacts() {
  listEl.innerHTML = ""; // איפוס תוכן קודם
  const searchValue = searchInput.value.toLowerCase();

  let filtered = contactsArr.filter(
    (c) =>
      c.name.toLowerCase().includes(searchValue) ||
      (c.tags && c.tags.toLowerCase().includes(searchValue))
  );

  filtered.sort((a, b) => b.favorite - a.favorite); // מיון לפי מועדפים

  contactCountEl.textContent = `${filtered.length} contacts`;

  for (let c of filtered) {
    const li = document.createElement("li");
    li.className = "contact-card";
    li.innerHTML = `
        <img src="${c.image || "/images/default.webp"}" alt="Avatar" " class>
          <div class="contact-info">
            <h3>${c.name}</h3>
            <p>${c.phone}</p>
          </div>
        <div class="contact-actions">
          <button onclick="showInfo('${c.id}')">ℹ️</button>
          <button onclick="editContact('${c.id}')">📝</button>
          <button onclick="deleteContact('${c.id}')">🗑️</button>
          <button onclick="toggleFavorite('${c.id}')">${
      c.favorite ? "⭐" : "☆"
    }</button>
        </div>
      `;
    listEl.appendChild(li);
  }
}

// פונקציה שמחזירה מזהה ייחודי
function generateID() {
  return Date.now().toString() + Math.random().toString(36).slice(2);
}

// איפוס הטופס לערך ריק
function resetForm() {
  contactForm.reset();
  editingId = null;
  imageInput.value = "";
}
