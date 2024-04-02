import React from "react";
import Banner from "../../assets/images/banner.webp";

const Intro = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="banner-image w-full h-full">
          <img src={Banner} alt="banner" srcset="" />
        </div>
        <div className="flex h-full items-center px-10 flex-col justify-center">
          <h2 className="text-4xl text-black font-semibold my-10 leading-10">
            Why trekking with{" "}
            <span className="text-myStyle font-semibold">Will Himalayas</span>{" "}
            is different
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor
            ullam reprehenderit aut error fugiat similique maxime beatae eum
            quod quasi voluptates accusamus saepe repellendus iusto obcaecati
            suscipit, omnis dicta quibusdam. Similique esse blanditiis
            reiciendis, voluptatem in assumenda dolore ex fugiat nisi rerum amet
            sequi perspiciatis numquam ut ea? Nostrum doloremque delectus
            inventore quod esse, voluptate dolore laudantium veniam obcaecati!
            Vitae laboriosam deserunt, harum nulla ipsum assumenda nihil nobis,
            libero aspernatur consectetur illum tempore at sed et. Hic aliquam,
            quam tempora veritatis velit accusantium eligendi commodi suscipit!
            Placeat suscipit eaque voluptatibus officiis ipsa, quis quidem at
            voluptatem facere magnam. Labore.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
