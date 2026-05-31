// "Sahte mi / Gercek mi?" tanima oyunu ornekleri.
// type: 'sms' | 'email' | 'url'  -  isSafe: guvenli mi?
export const samples = [
  {
    id: 1,
    type: 'sms',
    from: 'Bilinmeyen Numara',
    content:
      'e-Devlet borcunuz bulunmaktadır. Ödeme yapmazsanız hesabınız kapatılacaktır. Hemen ödeyin: http://e-devlet-odeme.xyz',
    isSafe: false,
    explanation:
      'Sahte! Aciliyet hissi yaratıyor ve resmi olmayan bir adres (.xyz) veriyor. Resmi e-Devlet adresi turkiye.gov.tr’dir. Bu tür bağlantılara tıklamayın.',
  },
  {
    id: 2,
    type: 'url',
    from: 'Tarayıcı adres çubuğu',
    content: 'https://turkiye.gov.tr',
    isSafe: true,
    explanation:
      'Güvenli. Bu, e-Devlet’in gerçek adresidir; ".gov.tr" ile biter ve başında kilit (https) vardır.',
  },
  {
    id: 3,
    type: 'sms',
    from: 'KARGO',
    content: 'Paketiniz teslim edilemedi. Adresinizi güncelleyin: bit.ly/kargo-guncelle',
    isSafe: false,
    explanation:
      'Sahte! Kısaltılmış bağlantılar (bit.ly) gerçek adresi gizler. Kargo firmasının kendi resmi uygulamasını veya sitesini kullanın.',
  },
  {
    id: 4,
    type: 'email',
    from: 'destek@garanti-guvenlik-merkezi.com',
    content:
      'Sayın müşterimiz, hesabınızda şüpheli işlem var. Kartınızı doğrulamak için bilgilerinizi girin.',
    isSafe: false,
    explanation:
      'Sahte! Bankalar e-posta ile kart/şifre bilgisi istemez. Gönderen adresi de bankanın gerçek adresi değil. Bankanızı resmi numarasından arayın.',
  },
  {
    id: 5,
    type: 'sms',
    from: 'BANKA',
    content: 'Tek kullanımlık şifreniz: 482913. Bu kodu kimseyle paylaşmayın.',
    isSafe: true,
    explanation:
      'Güvenli. Bu normal bir doğrulama mesajıdır; banka size kodu gönderir ve paylaşmamanızı söyler. Unutmayın: banka bu kodu sizden ASLA istemez.',
  },
  {
    id: 6,
    type: 'url',
    from: 'Tarayıcı adres çubuğu',
    content: 'http://turkiye-govtr.com/giris',
    isSafe: false,
    explanation:
      'Sahte! Adres ".com" ile bitiyor ve "https" / kilit yok. Gerçek adres turkiye.gov.tr şeklindedir. Benzer yazılışlara kanmayın.',
  },
  {
    id: 7,
    type: 'email',
    from: 'bilgi@kykburs-basvuru.net',
    content: 'KYK bursunuz onaylandı! Parayı almak için IBAN ve şifre bilgilerinizi girin.',
    isSafe: false,
    explanation:
      'Sahte! Hiçbir kurum şifrenizi istemez. "Para vereceğiz" diyerek bilgi isteyen mesajlar dolandırıcılıktır.',
  },
  {
    id: 8,
    type: 'sms',
    from: 'e-Nabız',
    content: 'Randevunuz 14 Mart 10:00’da onaylandı. Bilgi: turkiye.gov.tr',
    isSafe: true,
    explanation:
      'Güvenli. Bilgilendirme amaçlı; sizden şifre/bilgi istemiyor ve resmi adresi gösteriyor.',
  },
]

export default samples
