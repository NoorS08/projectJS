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
