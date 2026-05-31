import { Fish, ShieldCheck, Globe, KeyRound } from 'lucide-react'

const cards = [
  {
    emoji: '🎣',
    title: 'Oltalama (Phishing)',
    icon: Fish,
    accent: {
      bar: 'bg-brand-danger',
      iconBg: 'bg-red-50',
      iconText: 'text-brand-danger',
      dot: 'text-brand-danger',
    },
    definition:
      'Saldırganların güvenilir kurumları taklit ederek kişisel bilgilerinizi çalmaya çalışması.',
    listTitle: 'Uyarı işaretleri:',
    items: [
      'Aciliyet hissi yaratan mesajlar',
      "Şüpheli veya yanlış yazılmış URL'ler",
      'Beklenmedik şifre sıfırlama talepleri',
      'Kişisel/finansal bilgi isteyen e-postalar',
    ],
  },
  {
    emoji: '🔐',
    title: 'İki Faktörlü Doğrulama (2FA)',
    icon: ShieldCheck,
    accent: {
      bar: 'bg-brand-primary',
      iconBg: 'bg-blue-50',
      iconText: 'text-brand-primary',
      dot: 'text-brand-primary',
    },
    definition:
      'Şifrenizin yanı sıra ikinci bir doğrulama adımı ekleyerek hesap güvenliğinizi artıran sistem.',
    items: [
      'SMS kodu, uygulama (Google Authenticator) veya donanım anahtarı kullanır',
      'Şifreniz çalınsa bile hesabınızı korur',
      'e-Devlet, bankacılık ve e-posta için mutlaka etkinleştirin',
      'SMS kodunu asla kimseyle paylaşmayın',
    ],
  },
  {
    emoji: '🌐',
    title: 'Güvenli Bağlantı',
    icon: Globe,
    accent: {
      bar: 'bg-brand-success',
      iconBg: 'bg-green-50',
      iconText: 'text-brand-success',
      dot: 'text-brand-success',
    },
    definition: 'İnternet üzerinden iletilen verilerinizin şifrelenerek korunması.',
    items: [
      'HTTPS: Bağlantı şifreli (kilit ikonu arayın)',
      'HTTP: Veri açık iletilir, kullanmayın',
      "Halka açık Wi-Fi'dan hassas işlem yapmayın",
      'VPN kullanımı ek güvenlik sağlar',
    ],
  },
  {
    emoji: '🗝️',
    title: 'Şifre Yöneticileri',
    icon: KeyRound,
    accent: {
      bar: 'bg-purple-600',
      iconBg: 'bg-purple-50',
      iconText: 'text-purple-600',
      dot: 'text-purple-600',
    },
    definition:
      'Tüm şifrelerinizi şifreli bir kasa içinde güvenle saklayan uygulamalar.',
    items: [
      'Bitwarden — Ücretsiz, açık kaynak, tavsiye edilir',
      'KeePass — Yerel depolama, çevrimdışı çalışır',
      'Her site için güçlü ve benzersiz şifre üretir',
      'Ana şifrenizi asla unutmayın, kaydedin',
    ],
  },
]

export default function InfoCardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Dijital Güvenlik Rehberi</h1>
        <p className="text-slate-500 mt-1">Temel kavramları öğrenin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article
              key={card.title}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden animate-fadeIn"
            >
              <div className={`absolute top-0 left-0 h-full w-1.5 ${card.accent.bar}`} />
              <div className="p-6 pl-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.accent.iconBg}`}>
                    <Icon className={`w-6 h-6 ${card.accent.iconText}`} />
                  </div>
                  <h2 className="font-bold text-slate-800 text-lg">
                    <span className="mr-1">{card.emoji}</span>
                    {card.title}
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">{card.definition}</p>

                {card.listTitle && (
                  <p className="text-sm font-semibold text-slate-700 mb-2">{card.listTitle}</p>
                )}
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0 ${card.accent.bar}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
