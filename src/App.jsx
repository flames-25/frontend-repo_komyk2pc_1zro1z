import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  BadgeCheck,
  Users,
  Sparkles,
  Building2,
  Star,
  Quote,
  School,
  Cpu,
  Rocket,
  Crown,
  Briefcase
} from 'lucide-react'

const brand = {
  primary: 'bg-[#0A2540]', // deep navy
  primaryText: 'text-[#0A2540]',
  accent: 'bg-[#F2C335]', // gold
  accentText: 'text-[#F2C335]'
}

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const SectionHeading = ({ kicker, title, subtitle }) => (
  <div className="max-w-3xl">
    {kicker && (
      <p className="uppercase tracking-wider font-semibold text-[#F2C335] mb-2">{kicker}</p>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] leading-tight">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-slate-600 text-base md:text-lg">{subtitle}</p>
    )}
  </div>
)

function Navbar() {
  const links = useMemo(
    () => [
      { href: '#tentang', label: 'Tentang' },
      { href: '#keunggulan', label: 'Keunggulan' },
      { href: '#program', label: 'Program' },
      { href: '#aktivitas', label: 'Aktivitas' },
      { href: '#mitra', label: 'Mitra' },
      { href: '#testimoni', label: 'Testimoni' },
      { href: '#output', label: 'Output' }
    ],
    []
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <Container className="flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <div className={`w-9 h-9 rounded-lg ${brand.accent} grid place-items-center`}>
            <GraduationCap className="w-5 h-5 text-[#0A2540]" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[#0A2540]">SMK Bisa</div>
            <div className="text-xs text-slate-500 -mt-0.5">ALC Group</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-[#0A2540] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#daftar"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#0A2540] bg-[#F2C335] hover:brightness-95 transition"
          >
            Daftar Program
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#0b2c4c] transition"
          >
            Hubungi Kami
          </a>
        </div>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-24 overflow-hidden min-h-[720px] grid place-items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <Container className="relative grid lg:grid-cols-2 gap-10 items-center py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0A2540] bg-[#F2C335]/30 rounded-full px-3 py-1 mb-4">
              <Sparkles className="w-4 h-4 text-[#F2C335]" /> Program Vokasi Digital
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0A2540]">
              SMK Bisa: Jembatan Nyata SMK dan Industri Digital
            </h1>
            <p className="mt-4 text-slate-700 text-base md:text-lg">
              Program terkurasi untuk menghubungkan siswa SMK dengan dunia industri kreatif dan teknologi. Belajar langsung dari mentor profesional, praktik proyek nyata, dan siap kerja.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#daftar" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-[#0A2540] bg-[#F2C335] hover:brightness-95 transition">
                Daftar Program
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white bg-[#0A2540] hover:bg-[#0b2c4c] transition">
                Konsultasi Gratis
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Mentor Profesional', icon: BadgeCheck },
                { label: 'Proyek Nyata', icon: Briefcase },
                { label: 'Sertifikat Industri', icon: Crown }
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-[#0A2540]">
                  <f.icon className="w-4 h-4 text-[#F2C335]" /> {f.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="relative hidden lg:block h-[480px]">
          <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur shadow-xl" />
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#F2C335]/0 via-[#F2C335]/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />
        </div>
      </Container>
    </section>
  )
}

function TentangKami() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white">
      <Container className="grid lg:grid-cols-2 gap-12 items-start">
        <SectionHeading
          kicker="Tentang Kami"
          title="Divisi Vokasi Digital dari ALC Group"
          subtitle="Kami menghadirkan kurikulum kekinian yang relevan dengan kebutuhan industri, dipandu mentor berpengalaman, dan berbasis proyek nyata. Fokus kami: membangun talenta siap kerja dari bangku SMK."
        />
        <div className="grid gap-5">
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
            <h3 className="font-semibold text-[#0A2540] mb-1">Visi</h3>
            <p className="text-slate-700">Menjadi penghubung utama antara pendidikan vokasi SMK dan industri digital Indonesia.</p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
            <h3 className="font-semibold text-[#0A2540] mb-1">Misi</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Menghadirkan pembelajaran berbasis proyek dan target nyata.</li>
              <li>Membangun budaya disiplin, adaptif, dan profesional pada siswa.</li>
              <li>Memperkuat kolaborasi sekolah–industri untuk penyerapan tenaga kerja.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Keunggulan() {
  const items = [
    { icon: Cpu, title: 'Kurikulum Kekinian', desc: 'Materi up-to-date: riset produk, produksi konten, iklan, dan growth.' },
    { icon: Users, title: 'Mentor Profesional', desc: 'Dibimbing praktisi industri yang berpengalaman.' },
    { icon: ClockIcon, title: 'Fleksibel & Efektif', desc: 'Belajar sinkron–asinkron dengan target mingguan yang jelas.' },
    { icon: ShieldIcon, title: 'Disiplin Berprogres', desc: 'Budaya kerja, pelaporan progres, dan evaluasi berkala.' },
    { icon: Briefcase, title: 'Fokus Dunia Kerja', desc: 'Portofolio nyata untuk kesiapan magang/kerja.' }
  ]

  const highlights = [
    { label: 'Uang saku', icon: Crown },
    { label: 'Proyek nyata', icon: Briefcase },
    { label: 'Sertifikat industri', icon: BadgeCheck }
  ]

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          kicker="Tujuan & Keunggulan"
          title="Kenapa Memilih SMK Bisa"
          subtitle="Kami merancang pengalaman belajar yang relevan, disiplin, dan menyenangkan—berorientasi hasil."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className={`w-10 h-10 rounded-lg ${brand.accent} grid place-items-center mb-3`}>
                <it.icon className="w-5 h-5 text-[#0A2540]" />
              </div>
              <h3 className="font-semibold text-[#0A2540]">{it.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {highlights.map((h) => (
            <span key={h.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-[#0A2540]">
              <h.icon className="w-4 h-4 text-[#F2C335]" /> {h.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProgramUtama() {
  return (
    <section id="program" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          kicker="Program Utama"
          title="Jalur Belajar dan Karier yang Jelas"
          subtitle="Pilih program yang sesuai kebutuhan sekolah dan siswa."
        />

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Briefcase,
              title: 'Prakerin 4,5 Bulan',
              desc: 'Penempatan magang terstruktur untuk jurusan RPL, DKV, TKJ, Bisnis Daring, dan lainnya. Lokasi onsite/hybrid/remote.',
              metas: ['Pendampingan mentor', 'Target mingguan', 'Portfolio nyata']
            },
            {
              icon: School,
              title: 'Sekolah Affiliator AI',
              desc: 'Kurikulum 1 tahun (2 semester): strategi riset, konten, automasi AI, iklan, hingga pengelolaan brand.',
              metas: ['Kelas teori + praktik', 'Project-based', 'Coaching bulanan']
            },
            {
              icon: Building2,
              title: 'Guru Tamu & PKWU Digitalpreneur',
              desc: 'Sesi inspiratif dari pelaku industri dan modul kewirausahaan digital untuk siswa.',
              metas: ['Workshop onsite/online', 'Studi kasus industri', 'Sertifikat keikutsertaan']
            }
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <div className={`w-12 h-12 rounded-xl ${brand.accent} grid place-items-center mb-4`}>
                <p.icon className="w-6 h-6 text-[#0A2540]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A2540]">{p.title}</h3>
              <p className="text-slate-700 mt-2">{p.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc pl-5">
                {p.metas.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function AktivitasGaleri() {
  const imgs = [
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529336953121-4a122ff9e6c7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <section id="aktivitas" className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          kicker="Aktivitas & Dokumentasi"
          title="Kolaborasi, Workshop, dan Kegiatan Magang"
          subtitle="Potret proses belajar dan karya siswa bersama mitra industri."
        />
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={src} alt={`Galeri ${i + 1}`} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Mitra() {
  const partners = ['Safwan Qur\'an', 'SMK DT Aa Gym', 'PT Skinsol', 'ALC Group', 'Tech Creative Studio']
  return (
    <section id="mitra" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          kicker="Mitra & Kolaborasi"
          title="Berkolaborasi dengan Sekolah dan Industri"
          subtitle="Mari jembatani kebutuhan kurikulum dan dunia kerja. Kami terbuka bagi mitra baru."
        />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border border-slate-200 p-4 text-center bg-slate-50 text-[#0A2540] font-semibold">
              {p}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#0A2540] bg-[#F2C335] font-semibold hover:brightness-95">
            Ajak Kolaborasi Sekarang
            <Rocket className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </section>
  )
}

function Testimoni() {
  const items = [
    {
      quote:
        'Anak-anak jadi jauh lebih paham proses kerja industri digital. Laporan progres mingguan membuat mereka disiplin dan bertanggung jawab.',
      name: 'Ibu Rina',
      role: 'Guru Produktif RPL'
    },
    {
      quote:
        'Mentornya ramah dan praktis. Saya dapat pengalaman mengelola konten dan iklan yang langsung bisa diterapkan.',
      name: 'Dika',
      role: 'Siswa kelas XII'
    },
    {
      quote: 'Kurikulum relevan, banyak studi kasus nyata. Siswa lebih siap magang dan kerja.',
      name: 'Pak Anton',
      role: 'Waka Kurikulum'
    }
  ]

  return (
    <section id="testimoni" className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading kicker="Testimoni" title="Apa Kata Siswa dan Guru" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Quote className="w-6 h-6 text-[#F2C335]" />
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${brand.accent} grid place-items-center text-[#0A2540] font-bold`}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-[#0A2540]">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}

function OutputProgram() {
  return (
    <section id="output" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          kicker="Output Program"
          title="Hasil Nyata yang Terukur"
          subtitle="Kami menargetkan pencapaian konkret sebagai indikator kesiapan kerja."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold text-[#0A2540] flex items-center gap-2">
              <Star className="w-5 h-5 text-[#F2C335]" /> Infografik Hasil Program
            </h3>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
              <li>Omzet hingga 60 juta/akun dalam 6 bulan (studi kasus).</li>
              <li>Portofolio kampanye iklan dan konten dengan KPI terukur.</li>
              <li>Tim kecil yang berfungsi layaknya squad industri.</li>
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {[
                { k: '60JT+', l: 'Omzet/akun' },
                { k: '6 BLN', l: 'Durasi pencapaian' },
                { k: '10+', l: 'Proyek nyata' }
              ].map((m) => (
                <div key={m.k} className="rounded-xl bg-white p-4 border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-[#0A2540]">{m.k}</div>
                  <div className="text-xs text-slate-500">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold text-[#0A2540] flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-[#F2C335]" /> Skill yang Didapat
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                'Riset Produk & Market Fit',
                'Produksi Konten (Short Video)',
                'Copywriting & Storytelling',
                'TikTok Ads & Campaign',
                'Optimasi Channel Media Sosial',
                'Data & Analytics Dasar',
                'Growth Mindset & Disiplin',
                'Digitalpreneurship'
              ].map((s) => (
                <div key={s} className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0A2540] text-sm font-medium">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function AjakanBergabung() {
  return (
    <section id="daftar" className="py-16 md:py-24 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1000px_600px_at_10%_-10%,#F2C335,transparent)] pointer-events-none" />
      <Container className="grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Waktunya Bergabung. Kuota Terbatas!</h3>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Dapatkan akses ke mentor, kurikulum praktis, dan jaringan industri. Isi formulir pendaftaran atau hubungi admin kami melalui WhatsApp.
          </p>
        </div>
        <div className="flex gap-3 lg:justify-end">
          <a
            href="https://forms.gle/example"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-[#0A2540] bg-[#F2C335] hover:brightness-95"
          >
            Daftar Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-white text-[#0A2540] hover:bg-slate-100"
          >
            WhatsApp Admin
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <Container className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-lg ${brand.accent} grid place-items-center`}>
              <GraduationCap className="w-5 h-5 text-[#0A2540]" />
            </div>
            <div className="font-extrabold text-[#0A2540]">SMK Bisa</div>
          </div>
          <p className="text-slate-600 mt-3">Divisi vokasi digital dari ALC Group. Misi kami: menjembatani SMK dengan industri kreatif dan teknologi.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Kontak</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#F2C335]" /> +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#F2C335]" /> admin@smkbisa.id</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#F2C335]" /> Bandung, Indonesia</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Sosial Media</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>TikTok: @smkbisa</li>
            <li>Instagram: @smkbisa</li>
            <li>YouTube: SMK Bisa Channel</li>
          </ul>
          <a href="#kebijakan" className="inline-block mt-4 text-sm text-slate-600 underline">Kebijakan Privasi</a>
        </div>
      </Container>
      <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} SMK Bisa – ALC Group. All rights reserved.</div>
    </footer>
  )
}

// Simple placeholder icons to avoid rare imports
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path dName="M12 6v6l4 2" d="M12 6v6l4 2" />
    </svg>
  )
}
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TentangKami />
        <Keunggulan />
        <ProgramUtama />
        <AktivitasGaleri />
        <Mitra />
        <Testimoni />
        <OutputProgram />
        <AjakanBergabung />
      </main>
      <Footer />
    </div>
  )
}
