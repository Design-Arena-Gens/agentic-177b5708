export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 py-10 px-4 text-white">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10">
        <h1 className="text-center text-3xl font-bold uppercase tracking-[0.3em] text-slate-200">
          5s Reel: Web Studio Chaos
        </h1>
        <div className="video-frame relative w-full max-w-[380px] overflow-hidden rounded-[32px] border-4 border-white/40 shadow-[0_25px_80px_rgba(15,23,42,0.55)]">
          <div className="scene scene-client">
            <div className="scene-bg client-bg" />
            <div className="scene-content">
              <div className="tag">Client:</div>
              <div className="character client">
                <div className="bubble">I want a simple website!</div>
              </div>
            </div>
          </div>

          <div className="scene scene-chaos">
            <div className="scene-bg chaos-bg animate-chaos-pulse" />
            <div className="scene-content">
              <div className="tag">Also client:</div>
              <p className="chaos-text">
                Add animations, 3D, booking, payment, app… everything.
              </p>
              <div className="chaos-grid">
                <div className="chaos-card card-1">🔥 Launch Page</div>
                <div className="chaos-card card-2">🎯 Funnels</div>
                <div className="chaos-card card-3">💳 Payments</div>
                <div className="chaos-card card-4">📱 Native App</div>
                <div className="chaos-card card-5">🌀 3D Hero</div>
                <div className="chaos-card card-6">🤹 Animations</div>
              </div>
            </div>
          </div>

          <div className="scene scene-designer">
            <div className="scene-bg designer-bg" />
            <div className="scene-content">
              <div className="designer">
                <div className="mug" />
                <div className="eye left" />
                <div className="eye right" />
                <div className="smirk" />
              </div>
              <div className="tag designer-tag">Sure… simple.</div>
            </div>
          </div>

          <div className="ending-card">
            <div>Web design studio life 😂</div>
            <div>@six.solutions</div>
          </div>
        </div>

        <div className="w-full max-w-[380px] text-sm text-slate-300/80">
          Built for a 9:16 Instagram reel. Recording tip: capture the animation
          at 60fps for crisp export.
        </div>
      </div>
    </main>
  );
}
