import { contactLinks } from '../data/content';

export default function ContactContent() {
  return (
    <>
      <h2 className="mt-4 text-3xl font-semibold text-white">Let's connect</h2>
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
    </>
  );
}
