export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-4xl font-bold select-none">
          D
        </div>
        <h1 className="text-5xl font-bold tracking-tight">Hey, I'm Denis</h1>
        <p className="text-xl text-muted-foreground max-w-xl">
          Builder, thinker, and all-around good human. Welcome to my corner of the internet.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="mailto:denis@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm Denis — passionate about creating things that matter and connecting with people who
            care. Whether it's a side project, a conversation, or a cup of coffee, I'm always down
            to make something great happen.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Design", desc: "Turning ideas into clean, purposeful visuals." },
              { title: "Build", desc: "Shipping products people actually enjoy using." },
              { title: "Connect", desc: "Bringing the right people together at the right time." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border p-6 flex flex-col gap-2 hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Denis. Made with care.
      </footer>
    </main>
  );
}
