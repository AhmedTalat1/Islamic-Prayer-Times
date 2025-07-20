# 🕌 Prayer Times Web App

**A responsive web application that provides accurate daily prayer times for selected cities via the [AlAdhan API](https://aladhan.com/).**  
**Developed using HTML, CSS, and JavaScript.**

---

## 🌍 Live Demo

Check out the live version here: [Islamic Prayer Times on Netlify](https://nimble-maamoul-9d2bb9.netlify.app)

---

## ✨ Features

- 🕋 Display of **daily prayer times**
- 🌐 City selector (default: **Al-Quds / القدس**)  
  Available cities:  
  - Al-Quds (القدس)  
  - Cairo (القاهرة)  
  - Riyadh (الرياض)  
  - Doha (الدوحة)  
  - Dimashq (دمشق)
- 🗓️ Shows both **Gregorian** and **Hijri** dates
- 📱 Fully responsive design (mobile & desktop)
- 🔄 Real-time data fetching using **Axios** and **AlAdhan API**

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Axios
- [AlAdhan API](https://aladhan.com/prayer-times-api)
- Google Fonts: Cairo, El Messiri

---

## 🧠 How It Works

1. Default city is loaded.
2. Gets today’s date + Hijri via AlAdhan API.
3. Updates UI with times dynamically.
4. User can switch cities easily.
