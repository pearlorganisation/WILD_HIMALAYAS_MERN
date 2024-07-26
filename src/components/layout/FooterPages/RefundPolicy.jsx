import React from "react";
import image from "../../../assets/images/camp3.jpg";
const RefundPolicy = () => {
  return (
    <>
      <section className="">
        <div className="overflow-hidden grid place-items-center">
          <div className="text-4xl absolute">
            <h1 className="text-lg text-center md:text-5xl font-bold text-white">
              REFUND POLICY
            </h1>
          </div>
          <img
            src={image}
            alt=""
            className="h-[200px] md:h-[400px] w-full object-cover object-center bg-slate-50/50"
          />
        </div>
        <div className="p-10">
          <p>
            GREEN TOURISM Green Tourism or Ecotourism was developed in the 1980s
            and is usually based on the natural world and only involving small
            groups of visitors. The strategy also aims to have a low impact on
            local resources than mass tourism (Byrne et al, 2009). Ecotourism is
            predominantly focused on ecological conservation and educating
            travellers on local environments and natural surroundings. Specific
            to a category of vacation such as adventure or cultural, whereas
            sustainability applies to all types of tourism. READ MORE CORE
            VALUESOUR MITSION To provide tourism in the most remote areas of the
            Himalayas and giving both domestic and foreign tourists the
            opportunity to experience and explore various cultures, traditions,
            religions and environments of India. We also endeavour to benefit
            local communities and protect the environment in which they live in.
            READ MORE SUSTAINABLE TRAVEL Sustainability is often associated with
            development ‘meeting the needs of the present without compromising
            the ability of future generations to meet their own needs (1987 UN
            Convention on Environment and Development). Tourism in mountains has
            a long history and attracts more and more visitors each year
            therefore thinking sustainably is becomi
          </p>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
