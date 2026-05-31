# 🛡️ Dijital Güvenlik Simülatörü

Türkçe bir dijital güvenlik farkındalık uygulaması. React + Vite + Tailwind CSS ile geliştirilmiştir.

## 🎯 Amaç

Bu uygulama, "kırsalda yaşayan ve teknoloji kullanma yetkinliği düşük olan kişilerin dijitalleşen devlet sistemlerini güvenle kullanabilmesi" temalı bir Bilişim Etiği çalışması kapsamında geliştirilmiştir. Hedef kitleyi düşünerek **sade dil**, **sesli okuma**, **büyük yazı** ve **yüksek kontrast** gibi erişilebilirlik özellikleri içerir.

## ✨ Özellikler

Uygulama beş sekmeden oluşur:

- **🎯 Senaryo Simülatörü** (`/`) — Oltalama, sosyal mühendislik ve güvenli bağlantı konularında 6 soruluk interaktif test. Şıklar her denemede karıştırılır (doğru cevap hep aynı yerde değildir), her cevaptan sonra açıklama gösterilir ve sonunda cevaplar tek tek gözden geçirilir.
- **🔐 Şifre Oluşturucu** (`/sifre`) — Uzunluk ve karakter türü seçenekleriyle güçlü şifreler üretir, gücünü ölçer ve tek tıkla kopyalama sağlar.
- **🧭 Güvenli Giriş Rehberi** (`/rehber`) — e-Devlet’e adım adım güvenli giriş canlandırması; bazı adımlarda doğru/yanlış seçim noktaları.
- **🕵️ Sahte mi Gerçek mi?** (`/tani`) — Gösterilen SMS / e-posta / internet adresinin güvenli mi şüpheli mi olduğunu tahmin etme oyunu.
- **📚 Hızlı Bilgi** (`/bilgi`) — Phishing, 2FA, güvenli bağlantı ve şifre yöneticileri hakkında özet bilgi kartları.

### ♿ Erişilebilirlik

Üst kısımdaki erişilebilirlik çubuğundan **Büyük Yazı**, **Yüksek Kontrast** açılabilir; metinler **Sesli Oku** düğmeleriyle Türkçe sesli dinlenebilir (tarayıcı desteğine bağlıdır). Tercihler tarayıcıda hatırlanır.

## ☁️ Yayınlama (Deploy)

- **Vercel (önerilen):** Depoyu Vercel’e bağlamanız yeterli. Proje kökündeki `vercel.json`, tüm yolları `index.html`’e yönlendirir; böylece `/sifre`, `/rehber` gibi alt sayfalar yenilendiğinde 404 alınmaz.
- **GitHub Pages:** Alt yol tabanlı yayınlamada `vite.config.js` içine `base: '/<repo-adi>/'` eklemeniz ve SPA için bir `404.html` kopyası koymanız gerekir. Vercel daha kolaydır.

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
