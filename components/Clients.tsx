const clients = [
  "Netflix",
  "MBC",
  "Shahid",
  "Synergy",
  "United Media Services",
];

export default function Clients() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Selected Clients
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          Trusted Productions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {clients.map((client) => (
            <div
              key={client}
              className="border border-white/10 p-6 rounded-lg"
            >
              {client}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}