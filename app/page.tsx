export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-post git releases to{" "}
          <span className="text-[#58a6ff]">Slack channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repos and instantly deliver beautifully formatted changelog updates to the right Slack channels — no manual copy-paste ever again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">GitHub</div>
            <div className="text-sm text-[#8b949e] mt-1">& GitLab support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Instant</div>
            <div className="text-sm text-[#8b949e] mt-1">webhook delivery</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Rich</div>
            <div className="text-sm text-[#8b949e] mt-1">Slack formatting</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "Unlimited Slack channels",
              "GitHub & GitLab webhooks",
              "Rich formatted messages",
              "Custom notification rules",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it work?</h3>
            <p className="text-[#8b949e] text-sm">You add a webhook URL to your GitHub or GitLab repository. When a new release is published, the webhook fires and we automatically format the changelog and post it to your configured Slack channel.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which Slack permissions are needed?</h3>
            <p className="text-[#8b949e] text-sm">We only require the <code className="text-[#58a6ff] bg-[#0d1117] px-1 rounded">chat:write</code> scope to post messages. We never read your Slack messages or access private data.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I map different repos to different channels?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Each repository can be mapped to one or more Slack channels. You can also set custom filters so only certain release types trigger a notification.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Git Changelog Slack Notifier. All rights reserved.
      </footer>
    </main>
  );
}
