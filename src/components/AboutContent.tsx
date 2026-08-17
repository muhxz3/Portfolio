import { interests } from '../data/content';

export default function AboutContent() {
  return (
    <>
      <h2 className="mt-4 text-3xl font-semibold text-white">A curious learner building practical software</h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">
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
          href="/Resume.pdf"
          download
          className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
