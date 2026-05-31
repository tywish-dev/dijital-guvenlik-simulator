export const questions = [
  {
    id: 1,
    question:
      "E-posta kutuna 'e-Devlet hesabın kilitlendi, şifreni buradan güncelle' konulu bir mesaj geldi. Ne yaparsın?",
    scenario:
      "📧 Gelen Kutusu: 'Sayın kullanıcı, hesabınız şüpheli aktivite nedeniyle askıya alındı. Şifrenizi güncellemek için tıklayın: http://e-devlet-giris.net'",
    options: [
      'Linke tıklarım, hesabım kilitlenmiş olabilir',
      'Linki görmezden gelir, e-devlet.gov.tr adresine kendim giderim',
      'Linki arkadaşıma gönderirim',
    ],
    correct: 1,
    explanation:
      'Bu klasik bir oltalama (phishing) saldırısıdır. Resmi kurumlar asla e-posta ile şifre güncelleme linki göndermez. Her zaman tarayıcınıza resmi adresi kendiniz yazın: e-devlet.gov.tr',
  },
  {
    id: 2,
    question:
      "Kafede ücretsiz herkese açık Wi-Fi kullanırken e-Devlet'e giriş yapmak ister misin?",
    scenario:
      "☕ Bir kafede oturuyorsun. 'FreeWifi_Cafe' ağına bağlısın ve acil e-Devlet işlemin var.",
    options: [
      'Evet giriş yaparım, şifrem güçlü zaten',
      'Hayır, mobil verimi kullanırım',
      'Evet ama gizli sekme açarım',
    ],
    correct: 1,
    explanation:
      "Halka açık Wi-Fi ağlarında verileriniz şifrelenmemiş olabilir. Saldırganlar 'man-in-the-middle' yöntemiyle oturum bilgilerinizi ele geçirebilir. Kamu ve bankacılık işlemlerinizi sadece güvenilir ağlardan yapın.",
  },
  {
    id: 3,
    question:
      "Telefonda seni arayan 'banka yetkilisi', SMS ile gelen doğrulama kodunu istedi. Ne yaparsın?",
    scenario:
      "📱 Telefon çalıyor: 'Merhaba, bankanızın güvenlik birimi arıyor. Hesabınızda şüpheli işlem var. Güvenliğiniz için SMS kodunuzu alabilir miyiz?'",
    options: [
      'Kodu veririm, yetkili biri istedi',
      'Kapatır, bankamı resmi numarasından ararım',
      'Sadece son 3 rakamını söylerim',
    ],
    correct: 1,
    explanation:
      'Hiçbir banka veya devlet kurumu sizden SMS doğrulama kodunu telefonda istemez. Bu sosyal mühendislik saldırısıdır. Hemen kapatın ve bankanızı resmi numarasından arayın.',
  },
  {
    id: 4,
    question:
      "Tarayıcında şu adresi gördün: 'https://www.e-d3vlet.gov.tr' — Bu siteye güvenir misin?",
    scenario:
      "🌐 Arama motorunda e-Devlet'i arattın ve ilk sonuç olarak bu link çıktı: https://www.e-d3vlet.gov.tr",
    options: [
      'Evet, HTTPS var ve güvenli görünüyor',
      "Hayır, alan adında '3' harfi var, sahte site",
      'Evet, .gov.tr uzantısı güvenlidir',
    ],
    correct: 1,
    explanation:
      "URL'de 'devlet' yerine 'e-d3vlet' yazıyor. Rakam '3' ile sahte domain oluşturulmuş. HTTPS bağlantının şifreli olduğunu gösterir ama sitenin gerçek olduğunu kanıtlamaz. Adresi her zaman dikkatlice okuyun.",
  },
  {
    id: 5,
    question: 'Tüm hesapların için aynı şifreyi kullanıyor musun?',
    scenario:
      '🔑 E-Devlet, e-posta, sosyal medya, alışveriş siteleri... Hepsinde aynı şifreyi kullanmak ne kadar riskli?',
    options: [
      'Kullanıyorum, tek şifre ezberlemek kolay',
      'Hayır, her hesap için farklı şifre kullanıyorum',
      '2-3 farklı şifre arasında değişiyorum',
    ],
    correct: 1,
    explanation:
      "Bir platformda veri sızıntısı olduğunda aynı şifreyi kullanan tüm hesaplarınız tehlikeye girer. Buna 'Credential Stuffing' saldırısı denir. Her hesap için benzersiz şifre kullanın, şifre yöneticilerinden faydalanın.",
  },
  {
    id: 6,
    question: 'e-Devlet şifreni nereye kaydediyorsun?',
    scenario:
      '📝 Şifrenizi unutmamak için not almak istiyorsunuz. En güvenli yöntem hangisi?',
    options: [
      'Not defterine yazıp cüzdanımda taşıyorum',
      'Bitwarden gibi şifreli bir şifre yöneticisi kullanıyorum',
      'Telefonumun not uygulamasına yazıyorum',
    ],
    correct: 1,
    explanation:
      'Fiziksel not taşımak kaybolma ve çalınma riski yaratır. Telefon not uygulamaları şifrelenmemiş olabilir. Bitwarden veya KeePass gibi ücretsiz şifre yöneticileri şifrelerinizi güvenle saklar.',
  },
]

export default questions
