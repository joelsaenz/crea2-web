import { socialLinks } from '@/data/footer'

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg text-dark-800 hover:bg-electric hover:text-white transition-all duration-200 hover:scale-110"
          title={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  )
}
