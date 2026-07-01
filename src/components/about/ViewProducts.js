 import React from "react";

import instagram1 from "../../images/instagram-1.png";
import instagram2 from "../../images/instagram-2.png";
import instagram3 from "../../images/instagram-3.png";
import instagram4 from "../../images/instagram-4.png";

const ViewProducts = () => {
  const posts = [
    {
      image: instagram1,
      link: "https://www.instagram.com/",
      comment:
        "sometimes the best things in life are in the freezer 🧊 Dorot Crushed Garlic, Crushed Ginger and Chopped Basil mean zero prep time to make a flavor-packed meal 😋 th...",
    },
    {
      image: instagram2,
      link: "https://www.instagram.com/",
      comment:
        "Fresh flavor made simple with Dorot Gardens frozen seasoning products.",
    },
    {
      image: instagram3,
      link: "https://www.instagram.com/",
      comment:
        "Pop. Drop. Done. Add herbs and garlic to your favorite meals in seconds.",
    },
    {
      image: instagram4,
      link: "https://www.instagram.com/",
      comment:
        "Delicious recipes start with easy prep and fresh frozen ingredients.",
    },
  ];

  return (
    <section className="w-full bg-[#bd7ab3] px-6 py-10 text-center text-[#720062] md:px-12 md:py-14">
      <h3 className="font-goldplay text-[22px] font-bold leading-tight md:text-[30px]">
        Explore our recipes and discover your new favorite dishes & flavor combinations!
      </h3>

      <h2 className="mt-5 font-gelica text-[34px] font-bold leading-tight md:text-[52px]">
        Follow Us on Instagram
      </h2>

      <div className="mx-auto mt-16 grid max-w-[1500px] grid-cols-1 gap-0 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="group relative block h-[360px] overflow-hidden md:h-[420px]"
          >
            <img
              src={post.image}
              alt="Dorot Gardens Instagram post"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#720062]/0 transition duration-500 group-hover:bg-[#720062]/70" />

            <p className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 text-left font-goldplay text-[18px] font-semibold leading-[1.55] text-white opacity-0 transition duration-500 group-hover:opacity-100">
              {post.comment}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ViewProducts;