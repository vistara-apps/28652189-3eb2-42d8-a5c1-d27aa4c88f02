export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading CitizenShield</h2>
        <p className="text-white text-opacity-70">Preparing your rights and safety tools...</p>
      </div>
    </div>
  );
}
