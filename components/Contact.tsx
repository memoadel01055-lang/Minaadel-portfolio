export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="tracking-[0.4em] uppercase text-gray-400 text-sm">
          Contact
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          Let's Work Together
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-8">
          Available for Feature Films, TV Series, Commercials,
          International Productions and Camera Department Services.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="mailto:menaadel1988@gmail.com"
            className="border border-white px-8 py-4 hover:bg-white hover:text-black transition"
          >
            Email
          </a>

          <a
  href="https://wa.me/201005535402"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white px-8 py-4 hover:bg-white hover:text-black transition"
>
  WhatsApp
</a>

<a
  href="https://www.instagram.com/minaadel_dit/"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white px-8 py-4 hover:bg-white hover:text-black transition"
>
  Instagram
</a>

        </div>

      </div>
    </section>
  );
}