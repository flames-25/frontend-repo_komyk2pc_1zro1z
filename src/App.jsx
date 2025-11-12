import { useEffect, useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
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
import { DemoVariant1 } from '@/components/ui/demo'

const brand = {
  primary: '#0A2540',
  accent: '#F2C335'
}

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const SectionHeading = ({ kicker, title, subtitle, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    {kicker && (
      <p className="uppercase tracking-wider font-semibold text-[#F2C335] mb-2">{kicker}</p>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0A2540] via-[#113a63] to-[#0A2540]">
        {title}
      </span>
    </h2>
    {subtitle && (
      <p className="mt-3 text-slate-600 text-base md:text-lg">{subtitle}</p>
    )}
  </motion.div>
)

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.2 })
  return (
    <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-[3px] origin-left z-[70]">
      <div className="h-full w-full bg-gradient-to-r from-[#F2C335] via-amber-300 to-[#F2C335]" />
    </motion.div>
  )
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mesh gradient backdrop */}
      <div className="absolute inset-0 opacity-90" style={{
        background:
          'radial-gradient(1200px_600px_at_20%_-10%, rgba(242,195,53,0.18), transparent), radial-gradient(1000px_600px_at_110%_10%, rgba(10,37,64,0.18), transparent), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }} />
      {/* Floating aurora ribbons */}
      <motion.div
        className="absolute -top-24 -left-24 w-[60vw] h-[60vw] rounded-full blur-3xl"
        style={{ background: 'conic-gradient(from 90deg at 50% 50%, rgba(242,195,53,.25), rgba(10,37,64,.15), transparent)' }}
        animate={{ x: [0, 20, -10, 0], y: [0, 10, -20, 0], rotate: [0, 10, -6, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[55vw] h-[55vw] rounded-full blur-3xl"
        style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(10,37,64,.2), rgba(242,195,53,.18), transparent)' }}
        animate={{ x: [0, -15, 10, 0], y: [0, -10, 15, 0], rotate: [0, -8, 6, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.075] mix-blend-overlay" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)'
      }} />
    </div>
  )
}

function Spotlight() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 300, damping: 40, mass: 0.4 })
  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-[5]"
      style={{
        background:
          sx && sy ? undefined : undefined
      }}
    >
      <motion.div
        className="absolute w-[50vmin] h-[50vmin] rounded-full"
        style={{
          left: sx,
          top: sy,
          translateX: '-50%',
          translateY: '-50%',
          background: `radial-gradient(closest-side, rgba(242,195,53,.25), rgba(242,195,53,.08), transparent 70%)`,
          filter: 'blur(20px)'
        }}
      />
    </motion.div>
  )
}

function MagneticButton({ href, children, variant = 'gold', className = '', ...rest }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tx = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.3 })
  const ty = useSpring(my, { stiffness: 300, damping: 20, mass: 0.3 })
  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    mx.set(dx * 0.2)
    my.set(dy * 0.2)
  }
  const onLeave = () => { mx.set(0); my.set(0) }
  const base = variant === 'gold' ? 'text-[#0A2540] bg-[#F2C335]' : 'text-white bg-[#0A2540] hover:bg-[#0b2c4c]'
  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: tx, y: ty }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold relative overflow-hidden ${base} ${className}`}
      {...rest}
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{
        background: 'radial-gradient(600px_200px at var(--x,50%) 0%, rgba(255,255,255,.35), transparent 40%)'
      }} />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-5 h-5 relative z-10" />
    </motion.a>
  )
}

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const sx = useSpring(rx, { stiffness: 200, damping: 18 })
  const sy = useSpring(ry, { stiffness: 200, damping: 18 })
  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rx.set(-py * 10)
    ry.set(px * 12)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sx, rotateY: sy, transformStyle: 'preserve-3d' }}
      className={`relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-lg transition will-change-transform ${className}`}
    >
      {/* Halo */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-[#F2C335]/40 to-transparent blur-xl opacity-40" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

function DividerWave({ flip = false }) {
  return (
    <div className={`relative h-16 ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120">
        <path d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,80C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#f1f5f9" />
      </svg>
    </div>
  )
}

function Navbar() {
  const links = useMemo(
    () => [
      { href: '#tentang', label: 'Tentang' },
      { href: '#keunggulan', label: 'Keunggulan' },
      { href: '#program', label: 'Program' },
      { href: '#aktivitas', label: 'Aktivitas' },
      { href: '#mitra', label: 'Mitra' },
      { href: '#testimoni', label: 'Testimoni' },
      { href: '#output', label: 'Output' },
      { href: '#demo-bg', label: 'Demo BG' }
    ],
    []
  )

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <div className={`w-9 h-9 rounded-lg grid place-items-center shadow-[0_0_0_2px_rgba(10,37,64,.06)]`} style={{ background: brand.accent }}>
            <GraduationCap className="w-5 h-5" style={{ color: brand.primary }} />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold" style={{ color: brand.primary }}>SMK Bisa</div>
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
          <MagneticButton href="#daftar" variant="gold" className="hidden sm:inline-flex">Daftar Program</MagneticButton>
          <MagneticButton href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" variant="dark">Hubungi Kami</MagneticButton>
        </div>
      </Container>
    </motion.header>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])

  return (
    <section id="home" className="relative pt-24 overflow-hidden min-h-[820px] grid place-items-center">
      <BackgroundFX />
      <Spotlight />

      {/* Spline parallax */}
      <div className="absolute inset-0">
        <motion.div style={{ y }} className="w-full h-full">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white" />

      <Container className="relative grid lg:grid-cols-2 gap-12 items-center py-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0A2540] bg-[#F2C335]/30 rounded-full px-3 py-1 mb-4">
              <Sparkles className="w-4 h-4 text-[#F2C335]" /> Program Vokasi Digital
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#0A2540_0%,#113a63_100%)]">SMK Bisa: Jembatan Nyata SMK dan Industri Digital</span>
            </h1>
            <p className="mt-4 text-slate-700 text-base md:text-lg">
              Belajar langsung dari mentor profesional, praktik proyek nyata, dan siap kerja. Desain modern, inspiratif, dan ramah untuk generasi digital.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <MagneticButton href="#daftar" variant="gold">Daftar Program</MagneticButton>
              <MagneticButton href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" variant="dark">Konsultasi Gratis</MagneticButton>
            </div>
            <motion.div className="mt-6 grid grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              {[
                { label: 'Mentor Profesional', icon: BadgeCheck },
                { label: 'Proyek Nyata', icon: Briefcase },
                { label: 'Sertifikat Industri', icon: Crown }
              ].map((f) => (
                <motion.div key={f.label} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-2 text-sm text-[#0A2540]">
                  <f.icon className="w-4 h-4 text-[#F2C335]" /> {f.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98, y: 10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="relative hidden lg:block h-[560px]">
          <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur shadow-xl" />
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#F2C335]/0 via-[#F2C335]/25 to-transparent rounded-3xl blur-2xl pointer-events-none" />
        </motion.div>
      </Container>

      <motion.a href="#daftar" className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text[#0A2540] bg-[#F2C335] shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
        <span className="absolute inset-0 rounded-full blur-md opacity-60 bg-[#F2C335]" />
        <span className="relative">Daftar Sekarang</span>
        <ArrowRight className="w-4 h-4 relative" />
      </motion.a>
    </section>
  )
}

function TentangKami() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white relative">
      <Container className="grid lg:grid-cols-2 gap-12 items-start relative">
        <SectionHeading kicker="Tentang Kami" title="Divisi Vokasi Digital dari ALC Group" subtitle="Kami menghadirkan kurikulum kekinian yang relevan dengan kebutuhan industri, dipandu mentor berpengalaman, dan berbasis proyek nyata. Fokus kami: membangun talenta siap kerja dari bangku SMK." />
        <motion.div className="grid gap-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
          <TiltCard>
            <h3 className="font-semibold text-[#0A2540] mb-1">Visi</h3>
            <p className="text-slate-700">Menjadi penghubung utama antara pendidikan vokasi SMK dan industri digital Indonesia.</p>
          </TiltCard>
          <TiltCard>
            <h3 className="font-semibold text-[#0A2540] mb-1">Misi</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Menghadirkan pembelajaran berbasis proyek dan target nyata.</li>
              <li>Membangun budaya disiplin, adaptif, dan profesional pada siswa.</li>
              <li>Memperkuat kolaborasi sekolah–industri untuk penyerapan tenaga kerja.</li>
            </ul>
          </TiltCard>
        </motion.div>
      </Container>
      <DividerWave />
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
        <SectionHeading kicker="Tujuan & Keunggulan" title="Kenapa Memilih SMK Bisa" subtitle="Kami merancang pengalaman belajar yang relevan, disiplin, dan menyenangkan—berorientasi hasil." align="center" />
        <motion.div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
          {items.map((it) => (
            <motion.div key={it.title} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 16 }} className="">
              <TiltCard>
                <div className={`w-10 h-10 rounded-lg grid place-items-center mb-3 shadow-inner`} style={{ background: brand.accent }}>
                  <it.icon className="w-5 h-5" style={{ color: brand.primary }} />
                </div>
                <h3 className="font-semibold text-[#0A2540]">{it.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((h) => (
            <span key={h.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-sm text-[#0A2540] shadow-sm">
              <h.icon className="w-4 h-4" style={{ color: brand.accent }} /> {h.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProgramUtama() {
  return (
    <section id="program" className="py-16 md:py-24 bg-white relative">
      <Container>
        <SectionHeading kicker="Program Utama" title="Jalur Belajar dan Karier yang Jelas" subtitle="Pilih program yang sesuai kebutuhan sekolah dan siswa." align="center" />

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
          ].map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: idx * 0.05 }} whileHover={{ y: -6 }}>
              <TiltCard>
                <div className={`w-12 h-12 rounded-xl grid place-items-center mb-4 shadow-inner`} style={{ background: brand.accent }}>
                  <p.icon className="w-6 h-6" style={{ color: brand.primary }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540]">{p.title}</h3>
                <p className="text-slate-700 mt-2">{p.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc pl-5">
                  {p.metas.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
      <DividerWave flip />
    </section>
  )
}

function MarqueePartners() {
  // Replace with real logos later
  const partners = ['Safwan Qur\'an', 'SMK DT Aa Gym', 'PT Skinsol', 'ALC Group', 'Tech Creative Studio', 'Media Kreasi', 'Startup Lokal']
  const row = [...partners, ...partners]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />
      <motion.div className="flex gap-6 py-4 will-change-transform" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, ease: 'linear', repeat: Infinity }}>
        {row.map((p, i) => (
          <div key={p + i} className="rounded-xl px-6 py-3 text-center text-[#0A2540] font-semibold min-w-[220px] bg-slate-50/80 border border-slate-200 shadow-sm">
            {p}
          </div>
        ))}
      </motion.div>
    </div>
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
        <SectionHeading kicker="Aktivitas & Dokumentasi" title="Kolaborasi, Workshop, dan Kegiatan Magang" subtitle="Potret proses belajar dan karya siswa bersama mitra industri." align="center" />
        <motion.div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          {imgs.map((src, i) => (
            <motion.figure key={src} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="overflow-hidden rounded-2xl border border-slate-200 bg-white group relative">
              <img src={src} alt={`Galeri ${i + 1}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-[#0A2540]/50 to-transparent" />
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function Mitra() {
  return (
    <section id="mitra" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading kicker="Mitra & Kolaborasi" title="Berkolaborasi dengan Sekolah dan Industri" subtitle="Mari jembatani kebutuhan kurikulum dan dunia kerja. Kami terbuka bagi mitra baru." align="center" />
        <div className="mt-6">
          <MarqueePartners />
        </div>
        <div className="mt-8 text-center">
          <MagneticButton href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" variant="gold" className="mx-auto">Ajak Kolaborasi Sekarang</MagneticButton>
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
        <SectionHeading kicker="Testimoni" title="Apa Kata Siswa dan Guru" align="center" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4 }} className="">
              <TiltCard>
                <Quote className="w-6 h-6" style={{ color: brand.accent }} />
                <p className="mt-3 text-slate-700">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full grid place-items-center font-bold`} style={{ background: brand.accent, color: brand.primary }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CountUpNumber({ to, label }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf
    const duration = 1400
    const start = performance.now()
    const animate = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setValue(Math.floor(to * (0.2 + 0.8 * p)))
      if (p < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [to])
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur p-4 border border-slate-200 text-center shadow-sm">
      <div className="text-2xl font-extrabold text-[#0A2540]">{value.toString()}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  )
}

function OutputProgram() {
  return (
    <section id="output" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading kicker="Output Program" title="Hasil Nyata yang Terukur" subtitle="Kami menargetkan pencapaian konkret sebagai indikator kesiapan kerja." align="center" />
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
            <TiltCard>
              <h3 className="font-semibold text-[#0A2540] flex items-center gap-2">
                <Star className="w-5 h-5" style={{ color: brand.accent }} /> Infografik Hasil Program
              </h3>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
                <li>Omzet hingga 60 juta/akun dalam 6 bulan (studi kasus).</li>
                <li>Portofolio kampanye iklan dan konten dengan KPI terukur.</li>
                <li>Tim kecil yang berfungsi layaknya squad industri.</li>
              </ul>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <CountUpNumber to={60} label="Omzet/akun (JT)" />
                <CountUpNumber to={6} label="Durasi (Bulan)" />
                <CountUpNumber to={10} label="Proyek Nyata" />
              </div>
            </TiltCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <TiltCard>
              <h3 className="font-semibold text-[#0A2540] flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" style={{ color: brand.accent }} /> Skill yang Didapat
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
                  <motion.div key={s} whileHover={{ scale: 1.02 }} className="px-4 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-[#0A2540] text-sm font-medium shadow-sm">
                    {s}
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
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
          <MagneticButton href="https://forms.gle/example" target="_blank" rel="noreferrer" variant="gold">Daftar Sekarang</MagneticButton>
          <MagneticButton href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" variant="dark">WhatsApp Admin</MagneticButton>
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
            <div className={`w-9 h-9 rounded-lg grid place-items-center`} style={{ background: brand.accent }}>
              <GraduationCap className="w-5 h-5" style={{ color: brand.primary }} />
            </div>
            <div className="font-extrabold" style={{ color: brand.primary }}>SMK Bisa</div>
          </div>
          <p className="text-slate-600 mt-3">Divisi vokasi digital dari ALC Group. Misi kami: menjembatani SMK dengan industri kreatif dan teknologi.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#0A2540] mb-2">Kontak</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" style={{ color: brand.accent }} /> +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" style={{ color: brand.accent }} /> admin@smkbisa.id</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: brand.accent }} /> Bandung, Indonesia</li>
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

// Simple in-file icons to avoid rare imports
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
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
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1">
        {/* Demo section for AnimatedGradientBackground */}
        <section id="demo-bg" className="relative h-screen">
          <DemoVariant1 />
        </section>
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
