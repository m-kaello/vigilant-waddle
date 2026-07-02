import React from 'react';

import ig1 from '../../images/about-ig-1.jpg';
import ig2 from '../../images/about-ig-2.jpg';
import ig3 from '../../images/about-ig-3.jpg';
import ig4 from '../../images/about-ig-4.jpg';
import ig5 from '../../images/about-ig-5.jpg';
import ig6 from '../../images/about-ig-6.jpg';
import ig7 from '../../images/about-ig-7.jpg';
import ig8 from '../../images/about-ig-8.jpg';

const ExploreSection = () => {
  const igFeeds = [
    { id: 1, img: ig1, caption: "Less chopping, more pretending you’re relaxed 🇺🇸. Dorot cubes make it easy to add garlic, herbs, and flavor to burgers, skewers, corn, dips, and dressings straight from the freezer. Less prep, more time by the grill. Drop your Fourth of July must-have dish below and we’ll tell you which Dorot cube to add 👇" },
    { id: 2, img: ig2, caption: "This is what focaccia dimples were made for. 😍 Dorot Crushed Garlic and Basil cubes melt right into the bread as it bakes, filling every golden bite with rich garlic flavor and fresh herby goodness without chopping, peeling, or prepping a thing. 💅 Serve it with dinner, bring it to the summer table, or let it be the reason everyone suddenly “just wants one more piece. Save this for the focaccia upgrade you’ll want to make all summer long! 🍞☀️" },
    { id: 3, img: ig3, caption: "sometimes the best things in life are in the freezer 🤷‍♀️ Dorot Crushed Garlic, Crushed Ginger and Chopped Basil mean zero prep time to make a flavor-packed meal 🥘 the secret to effortless cooking can be found in a @krogerco near you! ✨" },
    { id: 4, img: ig4, caption: "Summer comfort food deserves a spot in your saved folder 😌 🍲 This cozy bowl is packed with tiny pasta, veggies, chicken, broth, and Dorot Crushed Garlic cubes to bring in that fresh garlic flavor without making the prep feel like a whole project. Fresh garlic flavor, no peeling, no chopping, no garlic fingers. Comment BOWL and we’ll send you the recipe! 👇" },
    { id: 5, img: ig5, caption: "I don’t know measurements, I just know Dorot belongs in the pasta salad 😌 Pasta, tomatoes, mozzarella, olive oil, and a few Dorot Garlic and Basil cubes for that fresh flavor moment without chopping a single thing. It’s giving no recipe, no stress, somehow still delicious. Save this for your next summer pasta salad emergency 🥗" },
    { id: 6, img: ig6, caption: "The best kitchen shortcuts are the ones hiding in your freezer 👀. 3 easy hacks to save time, skip the chopping, and still make everything taste like you put in way more effort. Which hack are you trying first? 👇" },
    { id: 7, img: ig7, caption: "we love a lunch that comes together in minutes and still hits the spot 🤤 just pop the Dorot Sautéed Glazed Onions and Dill cubes into a bowl and whisk with cream cheese. top it off with anchovies and an egg to meet those protein goals! 💪 drop a 🧅 in the comments if you’re trying this for your next lunch!" },
    { id: 8, img: ig8, caption: "Join the community and share your creations using our tags! 📸" },
  ];

  return (
    <section className="bg-[#be7ab3] py-12 px-4 md:px-8 text-center">
      {/* Top Tagline */}

      <p
        className="mt-4 text-[#760062] text-[20px] font-semibold md:text-[23px] max-w-6xl mx-auto mb-2 tracking-wide"
      >
        Explore our recipes and discover your new favorite dishes & flavor combinations!
      </p>

      {/* Main Heading */}
      <h2
        className="text-[#720062] text-3xl md:text-4xl mb-8"
        style={{ fontFamily: "gelica, serif", fontWeight: 700 }}
      >
        Follow Us on Instagram
      </h2>

      {/* Instagram Image Grid */}
      <div className="mt-16 mb-16 grid grid-cols-2 md:grid-cols-4 gap-0 max-w-[1300px] mx-auto overflow-hidden">
        {igFeeds.map((feed) => (
          <a
            key={feed.id}
            href={feed.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block h-[285px] bg-[#720062] overflow-hidden"
          >
            <img
              src={feed.img}
              alt={`Instagram post ${feed.id}`}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-45"
            />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#2b1029]/95 via-[#2b1029]/50 to-transparent flex items-end p-4 pointer-events-none">
              <p className="text-white text-[11px] md:text-[15px] text-left line-clamp-5 font-regular leading-relaxed tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {feed.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;