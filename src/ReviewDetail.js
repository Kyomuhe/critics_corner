import React from "react";
import { useParams } from "react-router-dom";

const reviews = {
  1: {
    title: "Shameless",
    content: `
      This was truly a masterpiece of modern TV drama.
      The show dives into the messy lives of a family dealing with poverty, addiction, and all kinds of chaos—but somehow manages to mix in humor and heartbreak perfectly. Now, let’s talk about Fiona Gallagher—because, wow, she truly deserved better! She worked her butt off to keep that family afloat, sacrificing everything for them. And how did they thank her? They didn’t! Debbie had the nerve to shut off the water while Fiona was in the shower, just to demand money. Like, seriously? This is the same Fiona who raised you when she didn’t have to.
      And let’s not forget Lip who didn’t even believe Fiona could pull off the laundromat business. Like, come on, Lip, give her some credit! Fiona was out there trying to build something real, and yeah, she got $100,000 in the end, but that’s not enough for what she went through. She was supposed to thrive in her real estate career, but nope—everything just fell apart. Honestly, she deserved a whole lot more than what she got.
      Then there’s Lip—the genius, the golden child, the one we all had hope in. He was supposed to be the Gallagher who brought the family out of the slums, the one who would finally break the cycle. But nope. What happened? He got kicked out of college started spiraling, and never reached his full potential. He had so much potential, and we all thought he’d make it big,but he ended up stuck in the same mess as the rest of them. Like, seriously, Lip, we were rooting for you!
      And then there’s Debbie—oh boy. She thought it was a brilliant idea to get herself pregnant just because she wanted to be a mom. Like, seriously? Yeah, we all have little dreams and ideas about what we want in life, but getting pregnant for fun? Did she not stop for a second to think that babies cost money? Or that maybe, just maybe, this would completely destroy her future? It was such a reckless and ridiculous decision—one that perfectly sums up how impulsive and short-sighted she could be.
      And then there’s Carl—honestly, what a surprise he turned out to be! At first, it seemed like he was destined to be the worst of the bunch. I mean, come on, this is the kid who sold drugs at school and had a whole delinquent streak going on. But somehow, against all odds, he cleaned himself up and actually became a police officer. Who saw that coming? It was one of the few times a Gallagher actually turned their life around, and I couldn’t help but feel proud of him for it.
      About the ending—what a letdown. Honestly, I thought the whole point of the show was to teach us that even the underprivileged can rise above their circumstances with enough grit and determination. But nope. The Gallaghers ended up exactly where they started—in deep chaos. Take Lip, for example. He had the chance to sell the house for $200,000, which could’ve been a life-changing moment for him and his son. But what happened? He dragged his feet, and in the end, he sold it for just $75k. Seriously? It felt like the show went out of its way to remind us that no matter how hard they tried, they were stuck in this endless cycle of bad decisions and missed opportunities. The Gallaghers deserved so much more, but instead, we were left with an ending that felt more tragic than anything else.






      `,
  },
  2: {
    title: "FROM",
    content: `
      A nostalgic dive into 80s sci-fi with great storytelling. 
      The show captures the eerie vibe of small-town mysteries 
      with a brilliant mix of suspense, drama, and supernatural elements. 
      The characters are well-crafted, and the unfolding mystery keeps you hooked 
      from start to finish. FROM is a delightful blend of nostalgia and originality, 
      leaving viewers eager for more answers with every episode.
    `,
  },
  
  3: {
    title: "BIG BANG THEORY",
    content:
      "A nostalgic dive into 80s sci-fi with great storytelling. The show captures the eerie vibe of small-town mysteries with a brilliant mix of suspense, drama, and supernatural elements. The characters are well-crafted, and the unfolding mystery keeps you hooked from start to finish. FROM is a delightful blend of nostalgia and originality, leaving viewers eager for more answers with every episode.",
  },

};

function ReviewDetail() {
  const { id } = useParams();
  const review = reviews[id];

  if (!review) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ color: "#ff6b6b" }}>Review not found</h1>
        <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          Oops! The review you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.8",
        maxWidth: "800px",
        margin: "0 auto",
        color: "#344e41",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#2a9d8f",
          marginBottom: "20px",
        }}
      >
        {review.title}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "justify",
          textIndent: "2em",
          whiteSpace: "pre-wrap", // Preserves formatting for long texts
        }}
      >
        {review.content}
      </p>
    </div>
  );
}

export default ReviewDetail;
