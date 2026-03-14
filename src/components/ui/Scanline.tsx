export default function Scanline() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9900] overflow-hidden mix-blend-overlay opacity-20">
      <div 
        className="absolute inset-[0_-20px] h-[10vh] bg-gradient-to-b from-transparent via-white/10 to-transparent"
        style={{
          animation: "scanline 8s linear infinite",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>
  );
}
