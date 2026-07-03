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
    <section id="instagram" className="explore-section bg-[#be7ab3] py-12 px-4 md:px-8 text-center">
      <style>{`
        @media (max-width: 1279px) {
          .explore-section {
            padding: 56px 36px;
          }

          .explore-tagline {
            max-width: 100%;
            margin: 0 auto;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0;
          }

          .explore-title {
            margin: 0;
            padding-top: 10px;
            font-size: 36px;
            line-height: 42px;
          }

          .explore-grid {
            width: 100%;
            margin: 48px auto 0;
          }

          .explore-card {
            height: auto;
            aspect-ratio: 1 / 1;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: portrait) {
          .explore-section {
            padding: 16px 52px 48px;
          }

          .explore-tagline {
            font-size: 16px;
            line-height: 20px;
          }

          .explore-title {
            font-size: 28px;
            line-height: 48px;
          }

          .explore-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            max-width: 660px;
            margin-top: 24px;
          }

          .explore-card {
            aspect-ratio: 4 / 3;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) and (orientation: landscape) {
          .explore-section {
            padding: 32px 36px 72px;
          }

          .explore-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 650px;
            margin-top: 24px;
          }

          .explore-title {
            font-size: 36px;
            line-height: 42px;
          }

          .explore-card p {
            opacity: 1;
          }
        }

        @media (max-width: 767px) {
          .explore-section {
            padding: 16px 10px;
          }

          .explore-tagline {
            font-size: 16px;
            line-height: 20px;
          }

          .explore-title {
            font-size: 28px;
            line-height: 48px;
          }

          .explore-grid {
            margin-top: 24px;
          }
        }

        @media (max-width: 767px) and (orientation: portrait) {
          .explore-section {
            padding: 28px 22px 24px;
          }

          .explore-tagline {
            font-size: 16px;
            line-height: 20px;
          }

          .explore-title {
            font-size: 28px;
            line-height: 48px;
          }

          .explore-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 600px;
            margin-top: 32px;
          }
        }

        @media (max-width: 991px) and (max-height: 599px) and (orientation: landscape) {
          .explore-section {
            padding: 20px 36px 48px;
          }

          .explore-tagline {
            font-size: 16px;
            line-height: 20px;
          }

          .explore-title {
            font-size: 28px;
            line-height: 42px;
          }

          .explore-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 650px;
            margin-top: 48px;
          }

          .explore-card p {
            opacity: 1;
          }
        }
      `}</style>
      {/* Top Tagline */}

      <p
        className="explore-tagline mt-4 text-[#760062] text-[20px] font-semibold md:text-[23px] max-w-6xl mx-auto mb-2 tracking-wide"
      >
        Explore our recipes and discover your new favorite dishes & flavor combinations!
      </p>

      {/* Main Heading */}
      <h2
        className="explore-title text-[#720062] text-3xl md:text-4xl mb-8"
        style={{ fontFamily: "gelica, serif", fontWeight: 700 }}
      >
        Follow Us on Instagram
      </h2>

      {/* Instagram Image Grid */}
      <div className="explore-grid mt-16 mb-16 grid grid-cols-2 md:grid-cols-4 gap-0 max-w-[1300px] mx-auto overflow-hidden">
        {igFeeds.map((feed) => (
          <div
            key={feed.id}
            className="explore-card relative group block h-[285px] bg-[#720062] overflow-hidden"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
