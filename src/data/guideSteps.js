// Adim adim "e-Devlet'e guvenli giris" canlandirmasi.
// icon alani, sayfada lucide ikonlarina eslenir.
export const guideSteps = [
  {
    id: 1,
    icon: 'globe',
    title: '1. Adım: Doğru adrese gidin',
    body: 'İnternet tarayıcınızı açın. Adres çubuğuna kendi elinizle "turkiye.gov.tr" yazın. Arama motorunda çıkan reklamlara veya size gelen mesajlardaki bağlantılara tıklamayın.',
    decision: {
      question: 'e-Devlet’e girmek için ne yaparsınız?',
      options: [
        { text: 'Google’da en üstte çıkan reklama tıklarım', safe: false },
        { text: 'Adres çubuğuna kendim "turkiye.gov.tr" yazarım', safe: true },
        { text: 'Telefonuma gelen SMS’teki bağlantıya tıklarım', safe: false },
      ],
      feedbackCorrect:
        'Doğru. Adresi her zaman kendiniz yazın. Böylece sahte sitelere düşmezsiniz.',
      feedbackWrong:
        'Dikkat! Reklamlar ve mesajlardaki bağlantılar sizi sahte sitelere götürebilir. Adresi her zaman kendiniz yazın.',
    },
  },
  {
    id: 2,
    icon: 'search',
    title: '2. Adım: Adresi dikkatlice okuyun',
    body: 'Sahte siteler gerçeğine çok benzer adresler kullanır. Harf veya uzantı değişikliklerine dikkat edin.',
    decision: {
      question: 'Hangisi e-Devlet’in GERÇEK adresidir?',
      options: [
        { text: 'turkiye-gov.net', safe: false },
        { text: 'turkiye.gov.tr', safe: true },
        { text: 'turkiyegov.com', safe: false },
      ],
      feedbackCorrect: 'Doğru. Resmi adres "turkiye.gov.tr" şeklindedir ve ".gov.tr" ile biter.',
      feedbackWrong:
        'Yanlış. Gerçek adres "turkiye.gov.tr"dir. ".net" veya ".com" ile biten benzer adresler sahtedir.',
    },
  },
  {
    id: 3,
    icon: 'lock',
    title: '3. Adım: Kilit işaretini kontrol edin',
    body: 'Adresin başında bir kilit simgesi ve "https" yazısı olmalı. Bu, bağlantınızın şifreli ve güvenli olduğunu gösterir. Kilit yoksa bilgilerinizi girmeyin.',
    tip: 'Kilit işareti, sayfanın gerçek olduğunu garanti etmez; yine de adresi mutlaka kontrol edin.',
  },
  {
    id: 4,
    icon: 'keyboard',
    title: '4. Adım: Bilgilerinizi girin',
    body: 'T.C. kimlik numaranızı ve e-Devlet şifrenizi yalnızca bu resmi sayfaya girin. Şifrenizi hiç kimseyle paylaşmayın, bir kâğıda yazıp ortada bırakmayın.',
    tip: 'Şifrenizi güçlü seçin ve başka hesaplarda kullandığınız şifreden farklı olsun.',
  },
  {
    id: 5,
    icon: 'smartphone',
    title: '5. Adım: SMS doğrulama kodu',
    body: 'Telefonunuza bir doğrulama kodu gelir. Bu kodu yalnızca siz, açtığınız resmi sayfaya yazın.',
    decision: {
      question: 'Sizi telefonla arayan "görevli" SMS kodunuzu istiyor. Ne yaparsınız?',
      options: [
        { text: 'Kodu söylerim, sonuçta görevli istiyor', safe: false },
        { text: 'Kodu kimseye söylemem, telefonu kapatırım', safe: true },
        { text: 'Sadece ilk rakamlarını söylerim', safe: false },
      ],
      feedbackCorrect:
        'Doğru. Hiçbir kurum sizden telefonda SMS kodu istemez. Kodu asla paylaşmayın.',
      feedbackWrong:
        'Dikkat! Bu bir dolandırıcılıktır. Hiçbir kurum telefonda SMS kodunuzu istemez. Kodu asla paylaşmayın.',
    },
  },
  {
    id: 6,
    icon: 'logout',
    title: '6. Adım: Güvenli çıkış yapın',
    body: 'İşiniz bittiğinde "Çıkış Yap" düğmesine basın. Özellikle başkasının bilgisayarını veya ortak bir bilgisayarı kullandıysanız bu çok önemlidir.',
    tip: 'Tarayıcıya "şifreyi kaydet" derken ortak bilgisayarlarda dikkatli olun.',
  },
]

export default guideSteps
