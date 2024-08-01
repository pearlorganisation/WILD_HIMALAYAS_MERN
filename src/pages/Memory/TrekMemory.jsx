import React from "react";

const TrekMemory = () => {
  const images = [
    { path: "/memory1.jpg" },
    { path: "/memory2.jpg" },
    { path: "/memory3.jpg" },
    { path: "/memory4.jpg" },
  ];
  return (
    <>
      <section className="">
        <div className="overflow-hidden grid place-items-center">
          <div className="text-4xl absolute">
            <h1 className="text text-center text-white text-5xl font-bold ">
              Trek Memory
            </h1>

            <p className="text-center text-white py-5 md:text-lg text-sm">
              A PICTURE IS WORTH A THOUSAND WORDS, BUT THE MEMORIES ARE
              PRICELESS...
            </p>
          </div>

          <img
            src="green.jpg"
            alt=""
            className="h-[200px] md:h-[400px] w-full object-cover object-center bg-slate-50/50"
          />
        </div>
      </section>

      <section>
        <div class="p-5 sm:p-8">
          <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="memory1.jpg" />
            <img src="memory2.jpg" />
            <img src="memory3.jpg" />
            <img src="memory4.jpg" />
          </div>
        </div>
      </section>
      {images.map((el, id) => {})}
    </>
  );
};

export default TrekMemory;
