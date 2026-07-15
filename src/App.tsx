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
                <img src="./muhaz_photo.jpg" className="h-full w-full rounded-full object-cover" />
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
        </section>

        <section id="skills" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Foundational skills I am building with</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-lg leading-8 text-slate-300">
                I am always open to learning, collaborating, and discussing new ideas. Feel free to reach out if you want to connect or discuss a project.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p>Email: abdulrahimanmuhaz@example.com</p>
                <p>Location: India</p>
              </div>
            </div>

            <form className="space-y-4 rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
              <div>
                <label className="mb-2 block text-sm text-slate-300" htmlFor="name">Name</label>
                <input id="name" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" placeholder="Your email" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" placeholder="Write your message" />
              </div>
              <button type="button" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
