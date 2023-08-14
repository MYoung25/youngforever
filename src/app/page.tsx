export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center place-content-center p-24">
      <div className="px-4 pt-3 pb-5 bg-red relative place-items-center text-center rounded-md border-4 border-gold border-double">
        <div className="font-debonair text-6xl mb-4 text-gold">The Redmoor</div>
        <div className="text-5xl text-gold bg-red font-showtime">
          [10/12/2024]
        </div>
        <div className="text-4xl text-gold font-debonair mt-6">5pm - 11pm</div>
      </div>
    </main>
  );
}
