const navItems = ['About', 'Skills', 'Projects', 'Contact'];

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
            <div className="mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              I enjoy learning new technologies, building practical projects, and improving my problem-solving skills. I am eager to learn, adapt, and contribute to innovative and impactful solutions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
