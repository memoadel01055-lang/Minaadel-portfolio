export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Contact
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          Let's Work Together
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 leading-8">
          Available for feature films, TV series, commercials and
          international productions. Professional DIT services,
          camera department support and secure on-set workflow.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-12">


          <div className="border border-white/10 p-6 bg-black">
            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="mt-3 text-gray-400">
              minaadel1988@gmail.com
            </p>
          </div>



          <div className="border border-white/10 p-6 bg-black">
            <h3 className="text-xl font-semibold">
              Instagram
            </h3>

            <p className="mt-3 text-gray-400">
              @minaadel_dit
            </p>
          </div>



          <div className="border border-white/10 p-6 bg-black">
            <h3 className="text-xl font-semibold">
              Location
            </h3>

            <p className="mt-3 text-gray-400">
              Egypt • International Productions
            </p>
          </div>


        </div>


        <div className="mt-12">

          <a
            href="mailto:minaadel1988@gmail.com"
            className="
            inline-block
            border border-white
            px-10
            py-4
            hover:bg-white
            hover:text-black
            transition
            "
          >
            Contact Me
          </a>

        </div>


      </div>

    </section>
  );
}