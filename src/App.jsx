import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ChevronDown, Menu, X, Play, GraduationCap, Trophy, Globe2,
  FlaskConical, Search, Lightbulb, Medal, Microscope, Factory, Award,
  CheckCircle2, Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail,
  ExternalLink, BookOpen, Dumbbell, Building2, HeartPulse
} from "lucide-react";

const stats = [
  ["50,000+", "Students across SRMIST"],
  ["170+", "International MoUs signed"],
  ["₹130+ Cr", "External funding"],
  ["#11", "NIRF University ranking 2025"]
];

const schools = [
  { title: "Engineering & Technology", image: "/images/academics/engineering.jpg", text: "Research-led engineering education focused on innovation, design and technology." },
  { title: "Management", image: "/images/academics/management.jpg", text: "Management education designed to develop capable, industry-ready professionals." },
  { title: "Computer Applications", image: "/images/academics/law.jpg", text: "BCA, MCA, computer science and future-focused application programmes." },
  { title: "Science & Humanities", image: "/images/academics/science-humanities.jpg", text: "Basic and applied sciences with a strong focus on education and research." }
];

const placementStats = [
  ["₹60 LPA", "Highest Package"],
  ["1,010+", "Recruitment Drives"],
  ["9,670+", "Job Offers"],
  ["7.3 LPA", "Average Package"]
];

const recruiters = [
  { name: "recruiters-01", logo: "/images/placements/recruiters/recruiters-01.jpg" },
  { name: "recruiters-02", logo: "/images/placements/recruiters/recruiters-02.jpg" },
  { name: "recruiters-03", logo: "/images/placements/recruiters/recruiters-03.jpg" },
  { name: "recruiters-04", logo: "/images/placements/recruiters/recruiters-04.jpg" },
  { name: "recruiters-05", logo: "/images/placements/recruiters/recruiters-05.jpg" },
  { name: "recruiters-06", logo: "/images/placements/recruiters/recruiters-06.jpg" },
  { name: "recruiters-07", logo: "/images/placements/recruiters/recruiters-07.jpg" },
  { name: "recruiters-08", logo: "/images/placements/recruiters/recruiters-08.jpg" },
  { name: "recruiters-09.", logo: "/images/placements/recruiters/recruiters-09.jpg" },
  { name: "recruiters-10", logo: "/images/placements/recruiters/recruiters-10.jpg" },
  { name: "recruiters-11", logo: "/images/placements/recruiters/recruiters-11.jpg" }
];

const placementStudents = [
  { name: "Rajashree Ramamoorthy", package: "50", company: "Emory Healthcare", image: "/images/placements/students/rajashree-ramamoorthy.webp", companyLogo: "/images/placements/company-logos/emory-healthcare.webp" },
  { name: "Aditya Thakur", package: "30", company: "brytecam", image: "/images/placements/students/aditya-thakur.webp", companyLogo: "/images/placements/company-logos/brytecam.webp" },
  { name: "K Hemanth", package: "26.8", company: "LAVA", image: "/images/placements/students/k-hemanth.webp", companyLogo: "/images/placements/company-logos/lava.webp" },
  { name: "Mayank Kumar", package: "20", company: "Microsoft", image: "/images/placements/students/mayank-kumar.webp", companyLogo: "/images/placements/company-logos/microsoft.webp" }
];

const achievements = [
  { icon: Factory, metric: "₹36+ Cr", eyebrow: "Industry • Innovation", title: "Siemens Centre of Excellence", text: "A major academia–industry initiative with specialised labs for product digitalisation, production planning, biotech, simulation and CNC control." },
  { icon: Microscope, metric: "25", eyebrow: "Research • 2023–24", title: "Patents in 2023–24", text: "Official AQAR records report 25 patents published or awarded during the 2023–24 academic year." },
  { icon: Award, metric: "109", eyebrow: "Recognition • 2023–24", title: "Research & innovation recognitions", text: "Institution, teachers, research scholars and students received 109 research/innovation awards or recognitions in 2023–24." },
  { icon: Lightbulb, metric: "5", eyebrow: "Innovation ecosystem", title: "Centres of Excellence", text: "Drug Design, Innovation & Entrepreneurship, ACMA, Siemens and Bosch-linked industry–academic initiatives." },
  { icon: Globe2, metric: "5G / 6G", eyebrow: "Collaboration", title: "Research collaboration", text: "A 2026 MoU with Norwaves Systems AS supports research collaboration in next-generation communications." },
  { icon: Medal, metric: "Gold • Silver • Bronze", eyebrow: "Student excellence", title: "University medals", text: "SRM University awards Gold, Silver, Bronze and Chancellor medals to recognise academic excellence." }
];

const recognitionCards = [
  { title: "University Grants Commission", short: "UGC", image: "/images/recognition/ugc.webp" },
  { title: "Department of Science & Industrial Research", short: "DSIR", image: "/images/recognition/dsir.webp" },
  { title: "Association of Indian Universities", short: "AIU", image: "/images/recognition/aiu.webp" },
  { title: "Bar Council of India", short: "BCI", image: "/images/recognition/bci.webp" },
  { title: "National Council for Hotel Management", short: "NCHMCT", image: "/images/recognition/nchmct.webp" }
];

const campusCards = [
  { title: "Campus Overview", image: "/images/campus/campus-overview.png", text: "A 27.14-acre green campus with modern academic infrastructure, laboratories, hostels, AC classrooms and student facilities." },
  { title: "Library", image: "/images/campus/library.jpg", text: "The Central Library houses more than 50,000 books, journals, magazines, digital content and online learning resources." },
  { title: "Sports & Recreation", image: "/images/campus/sports.png", text: "Football, volleyball, badminton, basketball, tennis, cricket practice and indoor games support an active student life." },
  { title: "Accommodation", image: "/images/campus/accommodation.jpg", text: "Separate hostel facilities for boys and girls, with AC and non-AC rooms, dining, Wi-Fi, recreation and round-the-clock security." },
  { title: "Medical Facility", image: "/images/campus/healthcare.jpg", text: "On-campus medical support with medical staff and an ambulance available for student health and emergencies." },
  { title: "Transport", image: "/images/campus/transport.webp", text: "AC and non-AC transport facilities connect students with Delhi and the wider NCR region." }
];

const nav = [
  { label: "About", items: ["Overview", "Vision & Mission", "Leadership", "Accreditation & Rankings"] },
  { label: "Academics", items: ["Programmes", "Faculties", "Departments", "Research & Innovation"] },
  { label: "Admissions", items: ["Admission Process", "Programmes & Fees", "Scholarships", "Apply Now"] },
  { label: "Placements", items: ["Placement Overview", "Recruiters", "Career Development", "Success Stories"] },
  { label: "Campus Life", items: ["Campus", "Facilities", "Clubs & Events", "Student Life"] }
];

function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, decimals = 0, prefix = "", suffix = "", duration = 1500 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{prefix}{display.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

function SectionGraphic({ dark = false }) {
  return (
    <div className={`section-graphic ${dark ? "dark" : ""}`} aria-hidden="true">
      <span className="graphic-orbit orbit-a" />
      <span className="graphic-orbit orbit-b" />
      <span className="graphic-orbit orbit-c" />
      <span className="graphic-grid" />
      <span className="graphic-dot dot-a" />
      <span className="graphic-dot dot-b" />
    </div>
  );
}

function ImagePlaceholder({ src, alt, className = "", label = "Image placeholder" }) {
  return (
    <div className={`media-placeholder ${className}`}>
      <img src={src} alt={alt} onLoad={(e) => { if (e.currentTarget.naturalWidth > 10) e.currentTarget.parentElement.classList.add("has-image"); }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
      <span>{label}</span>
    </div>
  );
}

function LogoLockup() {
  return (
    <div className="logo-lockup">
      <img src="/images/logos/srm/srm-university-logo.webp" alt="SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad (U.P.)" />
      <span className="logo-divider" />
      <img className="naac-logo" src="/images/logos/srm/naac-a-plus-logo.png" alt="NAAC A++ accredited" />
    </div>
  );
}

function RecruiterSlider() {
  const track = [...recruiters, ...recruiters];
  return (
    <div className="recruiter-window" aria-label="Recruiter logos">
      <div className="recruiter-track">
        {track.map((company, i) => (
          <div className="recruiter-logo" key={`${company.name}-${i}`} title={company.name}>
            <img src={company.logo} alt={company.name} />
            <span>{company.name} logo</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLinks() {
  const links = [
    [Instagram, "Instagram", "https://www.instagram.com/srmistup_official/"],
    [Facebook, "Facebook", "https://www.facebook.com/srmup/"],
    [Linkedin, "LinkedIn", "https://www.linkedin.com/company/srmistup/"],
    [Youtube, "YouTube", "https://www.youtube.com/channel/UCrP6mKDz2wVmHTCH--A4G3A"]
  ];
  return (
    <div className="social-links" aria-label="Official social links">
      {links.map(([Icon, label, href]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon size={17} /></a>
      ))}
    </div>
  );
}

export default function App() {
  const [mobile, setMobile] = useState(false);
  const [openNav, setOpenNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const recognitionRef = useRef(null);
  const placementStudentsRef = useRef(null);
  const [recognitionIndex, setRecognitionIndex] = useState(0);
  const [placementStudentIndex, setPlacementStudentIndex] = useState(0);

  useEffect(() => {
    const slider = recognitionRef.current;
    if (!slider) return;
    const mq = window.matchMedia("(max-width: 650px)");
    const updateIndex = () => {
      if (!mq.matches || !slider.clientWidth) return;
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      setRecognitionIndex(Math.max(0, Math.min(index, recognitionCards.length - 1)));
    };
    slider.addEventListener("scroll", updateIndex, { passive: true });
    const onChange = () => updateIndex();
    mq.addEventListener?.("change", onChange);
    updateIndex();
    const timer = window.setInterval(() => {
      if (!mq.matches || !slider.clientWidth) return;
      const next = (Math.round(slider.scrollLeft / slider.clientWidth) + 1) % recognitionCards.length;
      slider.scrollTo({ left: next * slider.clientWidth, behavior: "smooth" });
      setRecognitionIndex(next);
    }, 4800);
    return () => {
      slider.removeEventListener("scroll", updateIndex);
      mq.removeEventListener?.("change", onChange);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const slider = placementStudentsRef.current;
    if (!slider) return;
    const mq = window.matchMedia("(max-width: 650px)");
    const updateIndex = () => {
      if (!mq.matches || !slider.clientWidth) return;
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      setPlacementStudentIndex(Math.max(0, Math.min(index, placementStudents.length - 1)));
    };
    slider.addEventListener("scroll", updateIndex, { passive: true });
    const onChange = () => updateIndex();
    mq.addEventListener?.("change", onChange);
    updateIndex();
    const timer = window.setInterval(() => {
      if (!mq.matches || !slider.clientWidth) return;
      const next = (Math.round(slider.scrollLeft / slider.clientWidth) + 1) % placementStudents.length;
      slider.scrollTo({ left: next * slider.clientWidth, behavior: "smooth" });
      setPlacementStudentIndex(next);
    }, 5200);
    return () => {
      slider.removeEventListener("scroll", updateIndex);
      mq.removeEventListener?.("change", onChange);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 45);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobile(false);
    setOpenNav(null);
  };

  const handleNavItem = (item) => {
    if (item === "Apply Now") window.open("https://admissions.srmuniversity.ac.in", "_blank");
    else if (item === "Placement Overview") scrollTo("placements");
    else if (item === "Programmes") scrollTo("academics");
    else if (item === "Campus") scrollTo("campus-life");
    else setOpenNav(null);
  };

  return (
    <div className="site">
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad (U.P.) home"><LogoLockup /></button>
          <nav
            className={`nav-links ${mobile ? "mobile-open" : ""}`}
            onMouseLeave={() => !mobile && setOpenNav(null)}
          >
            {nav.map((item, index) => (
              <div
                className={`nav-item ${openNav === index ? "is-open" : ""}`}
                key={item.label}
                onMouseEnter={() => !mobile && setOpenNav(index)}
              >
                <button
                  onClick={() => mobile && setOpenNav(openNav === index ? null : index)}
                  aria-expanded={openNav === index}
                >
                  {item.label}<ChevronDown size={14} />
                </button>
                {openNav === index && (
                  <div className="dropdown">
                    {item.items.map((x) => (
                      <button key={x} onClick={() => handleNavItem(x)} className={x === "Apply Now" ? "dropdown-apply" : ""}>
                        <span>{x}</span>
                        {x === "Apply Now" && <ArrowRight size={15} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="nav-search" aria-label="Search"><Search size={17} /></button>
            <a className="apply-btn" href="https://admissions.srmuniversity.ac.in" target="_blank" rel="noreferrer">Apply Now <ArrowRight size={15} /></a>
          </nav>
          <button className="menu-btn" onClick={() => setMobile(!mobile)} aria-label="Toggle menu">{mobile ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-tech"><span /><span /><span /></div>
          <div className="hero-image-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-student-wrap">
            <ImagePlaceholder src="/images/hero/hero-student.png" alt="SRM student" className="hero-student" label="Hero student image" />
          </div>
          <div className="hero-content">
            <div className="eyebrow"><span /> SRM INSTITUTE OF SCIENCE & TECHNOLOGY • DELHI-NCR CAMPUS • GHAZIABAD (U.P.)</div>
            <h1>Learn. <em>Lead.</em><br />Leap into the future.</h1>
            <p>A multidisciplinary university where ambitious students build knowledge, experience and careers through future-focused education.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("academics")}>Explore programmes <ArrowRight size={18} /></button>
              <button className="ghost-btn" onClick={() => scrollTo("experience")}><Play size={15} fill="currentColor" /> Discover SRM</button>
            </div>
          </div>
          <div className="hero-bottom"><span>Delhi-Meerut Road, Modinagar, Ghaziabad (U.P.) – 201204</span><span>Admissions 2026–27 <b>Open</b></span></div>
        </section>

        <section className="stats-strip section-with-graphic">
          <SectionGraphic />
          <div className="stats-inner">
            {stats.map(([value, label], i) => (
              <Reveal className="stat-card" key={label} delay={i * 0.08} y={24}>
                <div className="stat-accent" />
                <div className="stat-number">{value}</div>
                <div className="stat-line" />
                <span>{label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section intro section-with-graphic" id="experience">
          <SectionGraphic />
          <Reveal><div className="section-kicker">THE SRM EXPERIENCE</div></Reveal>
          <div className="intro-grid">
            <Reveal><div><h2>Built for the<br /><span>world ahead.</span></h2></div></Reveal>
            <Reveal delay={0.12}><div><p className="lead">SRM Institute of Science and Technology, Delhi-NCR Campus is a place for learning, discovery, innovation, expression and discourse.</p><p>The campus offers graduate, postgraduate and doctoral education across engineering, management, computer applications, pharmacy, hotel management, science and humanities.</p><button className="text-btn">Discover SRM <ArrowRight size={17} /></button></div></Reveal>
          </div>
        </section>

        <section className="blue-feature">
          <SectionGraphic dark />
          <div className="blue-feature-inner">
            <Reveal><div className="section-kicker light">AT A GLANCE</div></Reveal>
            <div className="glance-grid">
              <Reveal className="know-card" y={36}>
                <div className="card-orbit" />
                <div className="know-title">Do you <span>know?</span></div>
                <div className="know-stats">
                  <div><strong>50,000+</strong><span>Students</span></div><div><strong>20,512+</strong><span>Publications</span></div>
                  <div><strong>170+</strong><span>International MoUs</span></div><div><strong>₹130+ Cr</strong><span>External funding</span></div>
                  <div><strong>3,200+</strong><span>Faculties</span></div><div><strong>#11</strong><span>NIRF University ranking 2025</span></div>
                </div>
              </Reveal>
              <Reveal delay={0.12} className="empower-panel">
                <div className="panel-kicker">ACADEMICS THAT EMPOWER</div><h2>Knowledge with<br /><span>purpose.</span></h2>
                <p>SRM combines a multidisciplinary academic ecosystem with industry exposure, research opportunities and global engagement.</p>
                <div className="empower-points">
                  {[ ["Global learning experience", "170+ international MoUs and academic engagement beyond the classroom."], ["Industry-focused outcomes", "Industry-aligned programmes and placement support through the Career Development Centre."], ["Innovation & research", "Research, innovation and academic initiatives across a multidisciplinary ecosystem."], ["Trusted recognition", "NAAC A++, UGC Category-1, NIRF 2025 rank 11, AICTE and PCI approvals."] ].map(([title, text]) => <div key={title}><CheckCircle2 size={20} /><span><strong>{title}</strong><small>{text}</small></span></div>)}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="academics">
          <SectionGraphic dark />
          <div className="section-head"><div><div className="section-kicker light">ACADEMIC EXCELLENCE</div><h2>Find your <span>direction.</span></h2></div><button className="outline-btn">All programs <ArrowRight size={16} /></button></div>
          <div className="school-grid">
            {schools.map((school, i) => <Reveal key={school.title} delay={i * 0.08}><motion.article whileHover={{ y: -8 }} transition={{ duration: 0.25 }} className="school-card"><ImagePlaceholder src={school.image} alt={school.title} label={`${school.title} image`} /><div className="school-overlay"><div><h3>{school.title}</h3><p>{school.text}</p></div><span className="circle-arrow"><ArrowRight size={17} /></span></div></motion.article></Reveal>)}
          </div>
        </section>

        <section className="section why section-with-graphic">
          <SectionGraphic />
          <Reveal><div className="section-kicker">WHY SRM</div></Reveal>
          <Reveal><div className="why-title"><h2>More than <span>a degree.</span></h2></div></Reveal>
          <div className="why-layout">
            <div className="why-items why-items-left">
              {[[GraduationCap, "Industry-aligned learning", "Curricula designed to connect academic foundations with practical, future-focused skills."], [FlaskConical, "Innovation & research", "A culture that encourages experimentation, inquiry and interdisciplinary thinking."]].map(([Icon, title, text], i) => <Reveal key={title} delay={i * 0.09} y={22}><article className="why-item"><div className="icon-box"><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}
            </div>
            <Reveal delay={0.08} y={30} className="why-girl-wrap"><ImagePlaceholder src="/images/why-srm/why-srm-student.webp" alt="SRM student" className="why-girl" label="Why SRM student image" /></Reveal>
            <div className="why-items why-items-right">
              {[[Globe2, "Global perspective", "International and industry collaborations that broaden learning beyond the classroom."], [Trophy, "Recognition & achievement", "A university ecosystem built around excellence in academics, innovation and student outcomes."]].map(([Icon, title, text], i) => <Reveal key={title} delay={0.12 + i * 0.09} y={22}><article className="why-item"><div className="icon-box"><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section recognition section-with-graphic">
          <SectionGraphic />
          <Reveal><div className="section-kicker">RECOGNITION</div></Reveal>
          <div className="recognition-heading"><Reveal><h2>Your future, backed by<br /><span>official recognitions.</span></h2></Reveal><Reveal delay={0.12}><p>Accredited standards and professional affiliations that reinforce academic quality, institutional credibility and student trust.</p></Reveal></div>
          <div className="recognition-slider-wrap">
            <div className="recognition-cards" ref={recognitionRef}>
              {recognitionCards.map((card, i) => <Reveal key={card.short} delay={i * 0.06} y={24}><article className="recognition-card"><div className="recognition-logo"><ImagePlaceholder src={card.image} alt={`${card.title} logo`} label={`${card.short} logo`} /></div><div className="recognition-copy"><strong>{card.short}</strong><span>{card.title}</span></div></article></Reveal>)}
            </div>
            <div className="mobile-slider-dots recognition-dots" aria-label="Recognition slider">
              {recognitionCards.map((card, i) => <button key={card.short} className={i === recognitionIndex ? "active" : ""} onClick={() => recognitionRef.current?.scrollTo({ left: i * recognitionRef.current.clientWidth, behavior: "smooth" })} aria-label={`Show ${card.short}`} />)}
            </div>
          </div>
        </section>

        <section className="placement-section" id="placements">
          <div className="placement-inner">
            <Reveal><div className="section-kicker">CAREER OUTCOMES</div></Reveal>
            <Reveal className="placement-heading-centered">
              <h2>Trusted by top recruiters.<br /><span>Proven by our graduates.</span></h2>
              <p>Current official placement information reports 9,670+ job offers, 1,010 recruitment drives, a ₹60 LPA highest package and a ₹7.3 LPA average package. Recruiters include Microsoft, Deloitte, IBM, Infosys, JPMorgan, TCS, Visa, Twilio and many more.</p>
            </Reveal>
            <Reveal className="placement-stat-row">{placementStats.map(([value, label]) => {
              const clean = value.replace(/[^0-9.]/g, "");
              const numeric = Number(clean);
              const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
              const prefix = value.startsWith("₹") ? "₹" : "";
              const suffix = value.includes("+") ? "+" : value.includes("LPA") ? " LPA" : "";
              return <div key={label}><strong><CountUp value={numeric} decimals={decimals} prefix={prefix} suffix={suffix} /></strong><span>{label}</span></div>;
            })}</Reveal>
            <Reveal delay={0.1}><RecruiterSlider /></Reveal>
            <div className="student-placement-slider-wrap">
              <div className="student-placement-grid" ref={placementStudentsRef}>
                {placementStudents.map((student, i) => <Reveal key={student.name} delay={i * 0.08} y={34}><article className="student-card"><ImagePlaceholder src={student.image} alt={student.name} className="student-photo" label="Student image" /><div className="student-info"><div className="student-name">{student.name}</div><div className="student-package"><strong>{student.package}</strong><span> LPA</span></div><div className="placed-at"><span>Placed at</span><div className="company-logo"><ImagePlaceholder src={student.companyLogo} alt={`${student.company} logo`} label={`${student.company} logo`} /></div></div></div></article></Reveal>)}
              </div>
              <div className="mobile-slider-dots placement-dots" aria-label="Student placement slider">
                {placementStudents.map((student, i) => <button key={student.name} className={i === placementStudentIndex ? "active" : ""} onClick={() => placementStudentsRef.current?.scrollTo({ left: i * placementStudentsRef.current.clientWidth, behavior: "smooth" })} aria-label={`Show ${student.name}`} />)}
              </div>
            </div>
            <div className="center-action"><a className="primary-btn" href="https://admissions.srmuniversity.ac.in" target="_blank" rel="noreferrer">Explore admissions <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="achievement-section">
          <SectionGraphic dark />
          <div className="achievement-inner">
            <Reveal><div className="section-kicker light">ACHIEVEMENTS & IMPACT</div></Reveal>
            <div className="achievement-heading"><Reveal><h2>Ideas become<br /><span>impact.</span></h2></Reveal><Reveal delay={0.12}><p>From research laboratories and industry collaborations to patents, innovation recognitions and student excellence, SRM creates visible outcomes beyond the classroom.</p></Reveal></div>
            <div className="achievement-grid-new">{achievements.map((a, i) => { const Icon = a.icon; return <Reveal key={a.title} delay={i * 0.07} y={32}><article className={`achievement-card ${i === 0 ? "featured" : ""}`}><div className="achievement-icon"><Icon size={21} /></div><div className="achievement-eyebrow">{a.eyebrow}</div><div className="achievement-metric">{a.metric}</div><h3>{a.title}</h3><p>{a.text}</p><span className="card-arrow"><ArrowRight size={16} /></span></article></Reveal>; })}</div>
          </div>
        </section>

        <section className="section campus-section section-with-graphic" id="campus-life">
          <SectionGraphic />
          <div className="section-head"><div><div className="section-kicker">CAMPUS LIFE</div><h2>Live the <span>experience.</span></h2></div><button className="text-btn">Explore campus <ArrowRight size={17} /></button></div>
          <div className="campus-grid">
            {campusCards.map((card, i) => <Reveal key={card.title} delay={i * 0.06} className={`campus-card ${i === 0 ? "large" : ""}`}><article><ImagePlaceholder src={card.image} alt={card.title} label={`${card.title} image`} /><div className="campus-card-copy"><div><h3>{card.title}</h3><p>{card.text}</p></div><span className="circle-arrow"><ArrowRight size={17} /></span></div></article></Reveal>)}
          </div>
        </section>

        <section className="section enquiry" id="enquiry">
          <div className="enquiry-card"><div><div className="section-kicker light">START YOUR JOURNEY</div><h2>See yourself<br />at SRM?</h2><p>Explore programmes, campus life and opportunities designed for the future.</p></div><form onSubmit={e => { e.preventDefault(); alert("Prototype enquiry submitted."); }}><input placeholder="Full name" required /><input type="email" placeholder="Email address" required /><input placeholder="Mobile number" required /><select defaultValue=""><option value="" disabled>Programme interested in</option><option>Engineering & Technology</option><option>Management</option><option>Computer Applications</option><option>Science & Humanities</option><option>Pharmacy</option><option>Hotel Management</option></select><button className="primary-btn" type="submit">Submit enquiry <ArrowRight size={17} /></button></form></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand"><LogoLockup /><p className="footer-title">Delhi-NCR Campus</p><p className="footer-title">The Dean</p><p className="footer-address"><MapPin size={14} /> SRM Institute of Science and Technology, Delhi-Meerut Road, Modinagar, Ghaziabad (U.P.) – 201204</p><p className="footer-address"><Phone size={14} /> Toll free: 1800 889 3496</p><p className="footer-address"><Mail size={14} /> dean.ncr@srmist.edu.in</p><p className="footer-title">The Director</p><p className="footer-address"><MapPin size={14} /> SRM Group New Delhi Administration Office, 21, Ring Rd, Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024</p><p className="footer-address"><Phone size={14} /> 01141676464</p><p className="footer-address"><Mail size={14} /> director.ncr@srmist.edu.in</p><SocialLinks /><a className="footer-apply apply-btn" href="https://admissions.srmuniversity.ac.in" target="_blank" rel="noreferrer">Apply Now <ArrowRight size={15} /></a></div>
          <div><h3 className="footer-title">Explore</h3><div className="footer-links"><a href="#experience">About SRM</a><a href="#academics">Academics</a><a href="#placements">Placements</a><a href="#campus-life">Campus Life</a><a href="#enquiry">Enquire Now</a></div></div>
          <div><h3 className="footer-title">Admissions & Contact</h3><div className="footer-contact"><a href="https://www.srmist.edu.in/admissions/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Admissions 2026–27</a><a href="tel:18008893496"><Phone size={14} /> 1800 889 3496</a><a href="mailto:dean.ncr@srmist.edu.in"><Mail size={14} /> dean.ncr@srmist.edu.in</a><a href="https://www.srmup.in/contact-us" target="_blank" rel="noreferrer">Contact & campus information <ArrowRight size={14} /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SRM Institute of Science and Technology, Delhi-NCR Campus. Prototype.</span><span>Official website: srmup.in</span><span>Privacy • Terms • Accessibility</span></div>
      </footer>
    </div>
  );
}
