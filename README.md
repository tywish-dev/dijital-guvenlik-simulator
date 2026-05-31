# 🛡️ Dijital Güvenlik Simülatörü

Türkçe bir dijital güvenlik farkındalık uygulaması. React + Vite + Tailwind CSS ile geliştirilmiştir.

## ✨ Özellikler

Uygulama üç sekmeden oluşur:

- **🎯 Senaryo Simülatörü** (`/`) — Oltalama, sosyal mühendislik ve güvenli bağlantı konularında 6 soruluk interaktif test. Her cevaptan sonra açıklama gösterilir ve sonunda puanınız değerlendirilir.
- **🔐 Şifre Oluşturucu** (`/sifre`) — Uzunluk ve karakter türü seçenekleriyle güçlü şifreler üretir, gücünü ölçer ve tek tıkla kopyalama sağlar.
- **📚 Hızlı Bilgi** (`/bilgi`) — Phishing, 2FA, güvenli bağlantı ve şifre yöneticileri hakkında özet bilgi kartları.

## 🧰 Teknolojiler

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [lucide-react](https://lucide.dev/) (ikonlar)

## 🚀 Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretim için derle
npm run build

# Derlemeyi önizle
npm run preview
```

Geliştirme sunucusu varsayılan olarak http://localhost:5173 adresinde çalışır.

## 📁 Proje Yapısı

```
src/
  components/
    Navbar.jsx
    ProgressBar.jsx
    PasswordStrengthMeter.jsx
  pages/
    SimulatorPage.jsx
    PasswordGeneratorPage.jsx
    InfoCardsPage.jsx
  data/
    questions.js
  App.jsx
  main.jsx
```

## 🎨 Tasarım Sistemi

| Renk      | Değer     |
| --------- | --------- |
| Primary   | `#1d4ed8` |
| Success   | `#16a34a` |
| Danger    | `#dc2626` |
| Warning   | `#d97706` |
| Arka plan | `#f8fafc` |
