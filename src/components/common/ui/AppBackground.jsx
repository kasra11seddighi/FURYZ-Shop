export default function AppBackground({ children, className = "" }) {
  return (
    <div className={`relative min-h-screen bg-[#050816] ${className}`}>
      
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,255,0,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_35%),linear-gradient(180deg,#040612_0%,#070b1a_45%,#03040a_100%)]" />

        <div className="absolute -top-24 left-[-80px] h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute top-[35%] right-[-60px] h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[20%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
