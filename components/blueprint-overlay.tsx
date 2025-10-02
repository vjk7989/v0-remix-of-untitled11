export function BlueprintOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Corner brackets - aerospace style */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary" />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Telemetry data points */}
      <div className="absolute top-1/4 left-1/4 text-xs font-mono text-primary">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span>ALT: 120m</span>
        </div>
      </div>
      <div className="absolute top-1/3 right-1/3 text-xs font-mono text-secondary">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span>SPD: 45km/h</span>
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/2 text-xs font-mono text-accent">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span>GPS: LOCKED</span>
        </div>
      </div>
    </div>
  )
}
