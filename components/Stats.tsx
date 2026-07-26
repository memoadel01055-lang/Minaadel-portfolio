const stats = [
  { number: "100+", label: "Productions" },
  { number: "10+", label: "Years Experience" },
  { number: "4", label: "Countries" },
  { number: "24/7", label: "On Set Support" },
];

export default function Stats() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-black">
              {item.number}
            </h2>

            <p className="mt-4 text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}