import muhazPhoto from './muhaz.jpeg';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];
const interests = ['Software Development', 'Artificial Intelligence', 'Machine Learning', 'Problem Solving'];
const skills = [
  { name: 'C', level: 'Foundational knowledge' },
  { name: 'Python', level: 'Basic programming skills' },
  { name: 'Git and GitHub', level: 'Version control basics' },
  { name: 'HTML', level: 'Structure and content basics' },
  { name: 'CSS', level: 'Styling and layout basics' },
];
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, TypeScript, and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Student Task Manager',
    description: 'A simple task planner for organizing daily college work and assignments.',
    tech: ['Python', 'HTML', 'CSS'],
  },
  {
    title: 'Mini Calculator',
    description: 'A beginner-friendly calculator project built to improve core programming fundamentals.',
    tech: ['C', 'Logic', 'Problem Solving'],
  },
];
const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:armuhaz999@gmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/9197467760',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2C6.49 2 2 6.49 2 12c0 2.14.7 4.15 1.9 5.77L2 22l4.35-1.14A9.94 9.94 0 0 0 12 22c5.51 0 10-4.49 10-10S17.51 2 12 2Zm0 18c-1.68 0-3.27-.47-4.63-1.28l-.33-.2-2.58.68.68-2.5-.21-.34A8 8 0 1 1 20 12c0 2.2-.88 4.25-2.33 5.73-.95.96-2.19 1.64-3.66 1.95l-1.24.29Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.5h2.88V18H5.5Zm4.83 0h2.76v1.14h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.91 3.43 4.4V18h-2.88v-7.42c0-1.77-.03-4.04-2.46-4.04-2.47 0-2.84 1.93-2.84 3.92V18H10.33Z" />
      </svg>
    ),
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-xl font-semibold tracking-wide text-cyan-400">
          Abdul Rahiman Muhaz
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-400">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 lg:px-8 lg:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Final Year B.Tech Student
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              I build thoughtful software and keep learning every day.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Hi, I&apos;m Abdul Rahiman Muhaz, a B.Tech Computer Science and Engineering student with a strong interest in software development, artificial intelligence, and machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
            <div className="mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <img src={muhazPhoto} alt="Abdul Rahiman Muhaz" className="h-full w-full rounded-full object-cover" />
            </div>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              I enjoy learning new technologies, building practical projects, and improving my problem-solving skills. I am eager to learn, adapt, and contribute to innovative and impactful solutions.
            </p>
          </div>
        </section>

        <section id="about" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">A curious learner building practical software</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            I am Abdul Rahiman Muhaz, a B.Tech Computer Science and Engineering student who enjoys solving real-world problems through technology. I am constantly learning new tools and concepts, and I want to grow into a strong developer who can build meaningful products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200">
                {interest}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section id="skills" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Foundational skills I am building with</h2>
          <div className="mt-8 flex flex-col gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
                <h3 className="text-lg font-semibold text-cyan-400">{skill.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Projects that reflect my learning journey</h2>
          <div className="mt-8 flex flex-col gap-6">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s connect</h2>
          <div className="mt-8 grid gap-8">
            <div>
              <p className="text-lg leading-8 text-slate-300">
                I am always open to learning, collaborating, and discussing new ideas. Feel free to reach out if you want to connect or discuss a project.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <span className="text-cyan-400">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
