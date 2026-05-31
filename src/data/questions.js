// Not: correct degeri dogru secenegin DATA icindeki sirasidir.
// Test sayfasi (SimulatorPage) secenekleri her denemede karistirir,
// boylece dogru cevap her zaman ayni yerde olmaz.
export const questions = [
  {
    id: 1,
    question: 'E-postanıza "e-Devlet şifrenizi güncelleyin" diyen bir mesaj geldi. Ne yaparsınız?',
    scenario:
      '📧 Gelen mesaj: "Hesabınız kilitlendi. Şifrenizi güncellemek için tıklayın: http://e-devlet-giris.net"',
    options: [
      'Linke tıklarım, hesabım kilitlenmiş olabilir',
      'Linke tıklamam, kendim turkiye.gov.tr yazarım',
      'Linki bir arkadaşıma gönderirim',
    ],
    correct: 1,
    explanation:
      'Bu bir tuzak (oltalama) mesajıdır. Resmi kurumlar e-posta ile şifre değiştirme linki göndermez. Adresi her zaman kendiniz yazın: turkiye.gov.tr',
  },
  {
    id: 2,
    question: 'Kafedeki ücretsiz Wi-Fi ile e-Devlet’e girmeli misiniz?',
    scenario: '☕ Bir kafedesiniz. "FreeWifi_Cafe" ağına bağlısınız ve e-Devlet işiniz var.',
    options: [
      'Evet girerim, şifrem güçlü zaten',
      'Hayır, kendi mobil internetimi kullanırım',
      'Evet ama gizli sekme açarım',
    ],
    correct: 1,
    explanation:
      'Herkese açık Wi-Fi güvenli değildir. Başkaları bilgilerinizi görebilir. Devlet ve banka işlemlerini sadece güvendiğiniz internetle yapın.',
  },
  {
    id: 3,
    question: 'Sizi arayan "banka görevlisi" SMS ile gelen kodu istiyor. Ne yaparsınız?',
    scenario:
      '📱 Telefon çalıyor: "Bankanızdan arıyorum. Hesabınızda sorun var. Güvenlik için SMS kodunuzu söyler misiniz?"',
    options: [
      'Kodu söylerim, sonuçta banka arıyor',
      'Telefonu kapatır, bankamı kendim ararım',
      'Sadece son rakamları söylerim',
    ],
    correct: 1,
    explanation:
      'Hiçbir banka telefonda SMS kodunuzu istemez. Bu bir dolandırıcılıktır. Telefonu kapatın ve bankanızı kartın arkasındaki resmi numaradan arayın.',
  },
  {
    id: 4,
    question: 'Adres çubuğunda "https://www.e-d3vlet.gov.tr" yazıyor. Güvenir misiniz?',
    scenario: '🌐 Aramada çıkan bağlantı: https://www.e-d3vlet.gov.tr',
    options: [
      'Evet, https var güvenli görünüyor',
      'Hayır, adreste "3" var, bu sahte bir site',
      'Evet, .gov.tr yazıyor güvenlidir',
    ],
    correct: 1,
    explanation:
      'Adreste "devlet" yerine "e-d3vlet" yazıyor; harf yerine "3" konmuş. Bu sahte bir sitedir. "https" olması sitenin gerçek olduğunu göstermez. Adresi dikkatle okuyun.',
  },
  {
    id: 5,
    question: 'Tüm hesaplarınızda aynı şifreyi mi kullanıyorsunuz?',
    scenario: '🔑 e-Devlet, e-posta, sosyal medya... Hepsinde aynı şifre ne kadar risklidir?',
    options: [
      'Evet, tek şifre ezberlemesi kolay',
      'Hayır, her hesapta farklı şifre kullanırım',
      'İki üç şifre arasında değiştiririm',
    ],
    correct: 1,
    explanation:
      'Bir site ele geçirilirse, aynı şifreyi kullandığınız tüm hesaplarınız tehlikeye girer. Her hesap için farklı şifre kullanın. Şifre yöneticisi bunu kolaylaştırır.',
  },
  {
    id: 6,
    question: 'e-Devlet şifrenizi nereye yazarsınız?',
    scenario: '📝 Şifrenizi unutmamak için bir yere not almak istiyorsunuz. En güvenlisi hangisi?',
    options: [
      'Bir kâğıda yazıp cüzdanımda taşırım',
      'Bitwarden gibi güvenli bir şifre programına yazarım',
      'Telefonun not defterine yazarım',
    ],
    correct: 1,
    explanation:
      'Kâğıt kaybolabilir veya çalınabilir. Telefon notları korumasız olabilir. Bitwarden veya KeePass gibi ücretsiz şifre programları şifrelerinizi güvenle saklar.',
  },
]

export default questions
