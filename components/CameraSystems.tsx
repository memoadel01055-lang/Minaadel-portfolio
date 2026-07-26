import Image from "next/image";

const cameras = [
  {
    name: "ARRI Alexa 35",
    image: "/images/cameras/arri35.jpg",
    description:
      "Professional digital cinema camera system used for high-end film and television productions.",
  },
  {
    name: "Sony VENICE",
    image: "/images/cameras/venice.jpg",
    description:
      "Large format cinema camera workflow support for feature films and international productions.",
  },
  {
    name: "RED Cinema",
    image: "/images/cameras/red.jpg",
    description:
      "RAW cinema workflow, media management and on-set technical support.",
  },
  {
    name: "ARRI Alexa",
    image: "/images/cameras/arri alexa.jpg",
    description:
      "Industry standard cinema camera system for professional productions.",
  },
];


export default function CameraSystems() {
  return (
    <section
      id="cameras"
      className="bg-zinc-950 text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Camera Systems
        </p>


        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          Cinema Cameras
        </h2>


        <p className="mt-6 max-w-3xl text-gray-400 leading-8">
          Experience with professional cinema camera systems,
          supporting camera departments and digital imaging workflows
          on set.
        </p>


        <div className="grid md:grid-cols-4 gap-6 mt-12">


          {cameras.map((camera) => (

            <div
              key={camera.name}
              className="
              group
              bg-black
              border border-white/10
              overflow-hidden
              "
            >

              <div className="relative h-[300px]">

                <Image
                  src={camera.image}
                  alt={camera.name}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                  "
                />

              </div>


              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {camera.name}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-6">
                  {camera.description}
                </p>

              </div>

            </div>

          ))}


        </div>

      </div>

    </section>
  );
}