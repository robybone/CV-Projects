import { Globe, Linkedin, Mail, MapPin } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { profile, ui } from '../content/cv'
import { Reveal, SectionHeading } from './ui'

export default function Contact() {
  const { t } = useLang()
  const rows = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), href: profile.linkedin },
    { icon: Globe, label: 'Web', value: profile.website.replace('https://www.', ''), href: profile.website },
    { icon: MapPin, label: t(ui.basedIn), value: t(profile.location) },
  ]
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="section pt-8">
        <div className="container-x">
          <SectionHeading code="§ 06" id="contact-title" title={t(ui.sections.contact)} lead={t(ui.sectionLeads.contact)} />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <dl className="divide-y divide-line border-y border-line">
                {rows.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 py-4">
                    <Icon className="h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
                    <dt className="w-32 shrink-0 font-mono text-xs uppercase tracking-widest text-muted">{label}</dt>
                    <dd className="min-w-0 truncate font-medium">
                      {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-accent-ink hover:underline underline-offset-4">{value}</a> : value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
              <a href={`mailto:${profile.email}`} className="btn-primary py-3.5 text-base"><Mail className="h-5 w-5" aria-hidden="true" />{t(ui.writeMe)}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost py-3.5 text-base"><Linkedin className="h-5 w-5" aria-hidden="true" />LinkedIn</a>
            </Reveal>
          </div>
        </div>
      </section>
      <footer className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name} · RB Consulting · {profile.vat}</p>
          <p className="font-mono text-xs">DWG RB-CV · REV {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
