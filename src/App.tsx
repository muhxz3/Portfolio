import { useEffect, useRef, useState } from 'react';
import muhazPhoto from './muhaz.jpeg';
import AboutContent from './components/AboutContent';
import SkillsContent from './components/SkillsContent';
import ProjectsContent from './components/ProjectsContent';
import ContactContent from './components/ContactContent';
const navItems = ['About', 'Skills', 'Projects', 'Contact'];

function App() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (!sectionId) return;
          setVisibleSections((prev) => ({
            ...prev,
            [sectionId]: entry.intersectionRatio >= 0.2,
          }));
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const revealClass = (id: string) =>
    visibleSections[id]
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8 pointer-events-none';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-4xl font-semibold tracking-wide text-cyan-400">
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

        <section
          id="about"
          data-section-id="about"
          ref={(el) => (sectionRefs.current.about = el)}
          className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 transition duration-700 ease-out will-change-transform ${revealClass('about')}`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">About</p>
          <AboutContent />
        </section>

        <section
          id="skills"
          data-section-id="skills"
          ref={(el) => (sectionRefs.current.skills = el)}
          className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 transition duration-700 ease-out will-change-transform ${revealClass('skills')}`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Skills</p>
          <SkillsContent />
        </section>

        <section
          id="projects"
          data-section-id="projects"
          ref={(el) => (sectionRefs.current.projects = el)}
          className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 transition duration-700 ease-out will-change-transform ${revealClass('projects')}`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Projects</p>
          <ProjectsContent />
        </section>

        <section
          id="contact"
          data-section-id="contact"
          ref={(el) => (sectionRefs.current.contact = el)}
          className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 transition duration-700 ease-out will-change-transform ${revealClass('contact')}`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Contact</p>
          <ContactContent />
        </section>
      </main>
    </div>
  );
}

export default App;
