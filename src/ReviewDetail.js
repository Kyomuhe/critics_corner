import React from "react";
import { useParams } from "react-router-dom";
import shameless from "./images/shameless.PNG";
import fromm from "./images/fromm.PNG";
import chicago from "./images/chicago.PNG";
import blackish from "./images/blackish.PNG";
import unfort from "./images/unfort.PNG";
import big from "./images/big.PNG";



const reviews = {
  1: {
    title: "Shameless",
    content: `
      This was truly a masterpiece of modern TV drama.
      The show dives into the messy lives of a family dealing with poverty, addiction, and all kinds of chaos—but somehow manages to mix in humor and heartbreak perfectly. Now, let's talk about Fiona Gallagher—because, wow, she truly deserved better! She worked her butt off to keep that family afloat, sacrificing everything for them. And how did they thank her? They didn't! Debbie had the nerve to shut off the water while Fiona was in the shower, just to demand money. Like, seriously? This is the same Fiona who raised you when she didn't have to.
      And let's not forget Lip who didn't even believe Fiona could pull off the laundromat business. Like, come on, Lip, give her some credit! Fiona was out there trying to build something real, and yeah, she got $100,000 in the end, but that's not enough for what she went through. She was supposed to thrive in her real estate career, but nope—everything just fell apart. Honestly, she deserved a whole lot more than what she got.
      Then there's Lip—the genius, the golden child, the one we all had hope in. He was supposed to be the Gallagher who brought the family out of the slums, the one who would finally break the cycle. But nope. What happened? He got kicked out of college started spiraling, and never reached his full potential. He had so much potential, and we all thought he'd make it big,but he ended up stuck in the same mess as the rest of them. Like, seriously, Lip, we were rooting for you!
      And then there's Debbie—oh boy. She thought it was a brilliant idea to get herself pregnant just because she wanted to be a mom. Like, seriously? Yeah, we all have little dreams and ideas about what we want in life, but getting pregnant for fun? Did she not stop for a second to think that babies cost money? Or that maybe, just maybe, this would completely destroy her future? It was such a reckless and ridiculous decision—one that perfectly sums up how impulsive and short-sighted she could be.
      And then there's Carl—honestly, what a surprise he turned out to be! At first, it seemed like he was destined to be the worst of the bunch. I mean, come on, this is the kid who sold drugs at school and had a whole delinquent streak going on. But somehow, against all odds, he cleaned himself up and actually became a police officer. Who saw that coming? It was one of the few times a Gallagher actually turned their life around, and I couldn't help but feel proud of him for it.
      About the ending—what a letdown. Honestly, I thought the whole point of the show was to teach us that even the underprivileged can rise above their circumstances with enough grit and determination. But nope. The Gallaghers ended up exactly where they started—in deep chaos. Take Lip, for example. He had the chance to sell the house for $200,000, which could've been a life-changing moment for him and his son. But what happened? He dragged his feet, and in the end, he sold it for just $75k. Seriously? It felt like the show went out of its way to remind us that no matter how hard they tried, they were stuck in this endless cycle of bad decisions and missed opportunities. The Gallaghers deserved so much more, but instead, we were left with an ending that felt more tragic than anything else.
      `,
    rating: 4.5,
    image: shameless,
    genre: "Drama, Comedy",
    year: "2011-2021"
  },
  2: {
    title: "FROM",
    content: `
    From was one of those shows that had me glued to the edge of my seat every single episode. Honestly, it just kept getting hotter and hotter, with every mystery stranger than the last. At one point, I was convinced it had to be some sort of government experiment, with certain people secretly in on it. But nope—that theory went straight out the window as things got weirder and weirder.
    Let's talk about the strange stuff: the creepy monsters that came out at night and just smiled at their victims before brutally killing them. Like, why are they so happy about it? Then there was that random radio transmission hinting that someone was watching or manipulating the people stuck in the town. And don't even get me started on the bizarre talismans that somehow kept the monsters at bay. Oh, and the trees. Yes, trees that could magically transport you to another part of town—or somewhere even worse. It was all so bizarre, and yet you couldn't stop watching because you just had to know what was going on.
    And then came the ending of season 3. The big plot twist was… rebirth? Really? I mean, after all that suspense, I was expecting something mind-blowing, but instead, it felt like the show threw us a curveball that didn't quite land. It wasn't bad, but I'd definitely built up something bigger in my head. Still, for a series packed with this much mystery and chaos, From definitely knows how to keep you hooked.
    Lets keep waiting for season 4.
    `,
    rating: 4.2,
    image: fromm,
    genre: "Horror, Mystery",
    year: "2022-present"
  },
  3: {
    title: "BIG BANG THEORY",
    content: `
The Big Bang Theory follows the life of Sheldon Cooper, a genius who, in my opinion, was incredibly self-centered and arrogant. Honestly, if I met someone like him in real life, I don't think I could ever be friends with him.

What really stood out to me was how patient his friends were with him. Like, seriously, that level of tolerance doesn't happen in real life! They were always justifying his selfish behavior, making excuses for him, and constantly adapting to his ways. But in the end, there's something oddly heartwarming about their friendship.

Despite his flaws, Sheldon's growth throughout the series is undeniable, and his friends' bond is what makes the show so special. It's funny, sometimes frustrating, but ultimately a great watch, especially if you enjoy nerdy humor and quirky characters.
     `,
    rating: 4.0,
    image: big,
    genre: "Comedy, Sitcom",
    year: "2007-2019"
  },
  4: {
    title: "Chicago PD",
    content: `
One of the things I've always loved about Chicago P.D. is the way Sergeant Voight (Boyd) protects his team. He has this tough, no-nonsense approach, but deep down, his loyalty runs deep. That's why he always says, "Tell me the truth so I can lie for you." It's his way of looking out for his unit, even if it means bending the rules.

Voight is often seen as the villain, but I don't see him that way. Yes, he breaks the law, but he does it for the right reasons. He operates in the gray area of justice, making tough choices that others wouldn't dare to make.

This show has had some truly heartbreaking moments. One that really got to me was Burgess losing her unborn baby. I was so excited for her and Ruzek, and then—just like that—tragedy struck. It felt so unfair, and it was one of those moments that made Chicago P.D. hit even harder.

Overall, this show keeps you on the edge of your seat with intense action, deep character connections, and emotional twists that stay with you. If you love crime dramas that aren't afraid to go dark, Chicago P.D. is definitely worth watching.
     `,
    rating: 4.3,
    image: chicago,
    genre: "Crime, Drama",
    year: "2014-present"
  },
  5: {
    title: "A Series of Unfortunate Events",
    content: `
    Well I decided to watch this serie in the beginning because of its catchy name 'the series of unfortunate events' to be for real the first episode of the first season disapointed me, I wasnt expecting what I saw I was totally caught off guard like asin what the hell, I think its because this serie is kinda old and I was comparing it to the modern series.
    Its sort of a musical kind of movie but not really musical, it would be really good for kids and people who enjoy theatre shows, but any way I watched it till the end because I had no other serie to watch at the moment. 
    But as I continued with it it actually got quiet interesting so I would give it like a solid 5 out of 10.
    My favourite act was sunny because I know most of her parts were literally fake but since they were using a real baby in some parts she really did a great job, Klaus and violet baudelaire really rose up to their parts and executed their roles flawlessly because they had to learn new things about different subjects but they were too much on the sad part like yah you have suffered but dont exaggerate.
    Lets not forget about Esme squalor and rich accent, like for real she ate up her role really well, I feel like no one would do her better than she did.
    Camalita was also extraodinary her tapping shoes, her hairstyle and clothings made her bring out the little spolied brat/ mean girl act, and by the way I want to credit her on her amaizing voice she really can sing.

    I feel like Count olaf and side kicks were doing too much like seriously they were beefing with innocent children and for no justifiable reason, because even thou they tortured or killed them they were literally not going to get their fortune/inherritance all their acts were stupid and actually funny. 
    But I am impressed that we were given a happy ending with count olaf dead and the orphans safe.
    `,
    rating: 3.5,
    image: unfort,
    genre: "Drama, Comedy, Family",
    year: "2017-2019"
  },
  6: {
    title: "Blackish",
    content: "I have not yet reviewed it, but I will soon wait for the tea😊",
    rating: 0,
    image: blackish,
    genre: "Comedy",
    year: "2014-2022"
  },
};

function ReviewDetail() {
  const { id } = useParams();
  const review = reviews[id];
  
  // Original background color from the provided code
  const backgroundColor = "#f9f9f9";
  const textColor = "#344e41";
  const accentColor = "#2a9d8f";

  if (!review) {
    return (
      <div style={{
        padding: "40px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "40px auto",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
        color: textColor
      }}>
        <h1 style={{ 
          color: "#ff6b6b", 
          fontSize: "2.5rem",
          marginBottom: "20px"
        }}>
          Review Not Found
        </h1>
        <p style={{ 
          fontSize: "1.3rem", 
          color: "#6c757d",
          lineHeight: "1.6"
        }}>
          Oops! The TV show review you're looking for doesn't exist in our collection.
        </p>
        <div style={{
          marginTop: "30px"
        }}>
          <a href="/" style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: accentColor,
            color: "white",
            borderRadius: "30px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "500",
            transition: "all 0.3s ease"
          }}>
            Back to Reviews
          </a>
        </div>
      </div>
    );
  }

  const getImageUrl = (title) => {
    return `/api/placeholder/600/400?text=${encodeURIComponent(title)}`;
  };

  // Function to format paragraphs with proper spacing
  const formatContent = (content) => {
    return content.split(/\n\s*\n/).map((paragraph, index) => (
      <p key={index} style={{
        fontSize: "1.2rem",
        marginBottom: "1.2rem",
        lineHeight: "1.8",
        textAlign: "justify",
        textIndent: "2em",
        color: textColor
      }}>
        {paragraph.trim()}
      </p>
    ));
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    if (!rating) return <span style={{ fontStyle: "italic", color: "#777" }}>Not rated yet</span>;
    
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{
            color: i < Math.floor(rating) ? "#ffc107" : "#e0e0e0",
            fontSize: "1.5rem",
            marginRight: "2px"
          }}>
            ★
          </span>
        ))}
        <span style={{ 
          marginLeft: "10px", 
          fontWeight: "600",
          color: "#444" 
        }}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      backgroundColor: backgroundColor,
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      color: textColor
    }}>
      {/* Hero Image */}
      <div style={{
        position: "relative",
        height: "300px",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
      }}>
        <img 
          src={review.image}
          alt={review.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
          padding: "80px 40px 20px 40px",
          color: "white",
        }}>
          <h1 style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            margin: "0",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}>
            {review.title}
          </h1>
        </div>
      </div>

      {/* Review Meta */}
      <div style={{
        padding: "20px 40px",
        borderBottom: "1px solid #eee",
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <div>
          <div style={{ marginBottom: "5px" }}>
            <StarRating rating={review.rating} />
          </div>
          <div style={{
            color: "#666",
            fontSize: "0.95rem",
          }}>
            <span style={{ 
              backgroundColor: accentColor, 
              color: "white", 
              padding: "4px 10px", 
              borderRadius: "20px",
              display: "inline-block",
              marginRight: "10px",
              fontSize: "0.85rem",
            }}>
              {review.genre}
            </span>
            <span>{review.year}</span>
          </div>
        </div>
        <div>
        </div>
      </div>

      {/* Review Content */}
      <div style={{
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        margin: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
      }}>
        {review.content.trim() ? (
          formatContent(review.content)
        ) : (
          <div style={{
            padding: "30px",
            textAlign: "center",
            backgroundColor: backgroundColor,
            borderRadius: "8px",
          }}>
            <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
              This review hasn't been written yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Share and Comments Section */}
      <div style={{
        padding: "20px 40px",
        backgroundColor: backgroundColor,
        margin: "0 20px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div>
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              Share this review:
            </span>
            <div style={{ marginTop: "8px" }}>
              {["Twitter", "Facebook", "Reddit", "Email"].map(platform => (
                <button key={platform} style={{
                  backgroundColor: "#e9ecef",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  marginRight: "8px",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  color: textColor
                }}>
                  {platform}
                </button>
              ))}
            </div>
          </div>
          <div>
            <button style={{
              backgroundColor: accentColor,
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "10px 16px",
              fontSize: "1rem",
              cursor: "pointer",
            }}>
              Leave a Comment
            </button>
          </div>
        </div>
      </div>

      {/* Related Reviews */}
      <div style={{
        padding: "30px 40px 40px",
        backgroundColor: backgroundColor,
      }}>
        <h3 style={{ 
          fontSize: "1.4rem", 
          marginBottom: "20px",
          color: accentColor,
        }}>
          You May Also Like
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}>
          {Object.keys(reviews)
            .filter(key => key !== id && reviews[key].content.trim())
            .slice(0, 3)
            .map(key => (
              <a 
                key={key} 
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}>
                  <div style={{
                    height: "120px",
                    backgroundColor: "#f0f0f0",
                  }}>
                    <img 
                      src={reviews[key].image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{
                    padding: "15px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                    <h4 style={{ 
                      margin: "0 0 8px 0",
                      fontSize: "1.1rem",
                      color: accentColor
                    }}>
                      {reviews[key].title}
                    </h4>
                    <div style={{ 
                      fontSize: "0.9rem",
                      color: "#777",
                    }}>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{
                            color: i < Math.floor(reviews[key].rating) ? "#ffc107" : "#e0e0e0",
                            fontSize: "0.9rem",
                          }}>
                            ★
                          </span>
                        ))}
                      </div>
                      <div style={{ marginTop: "5px" }}>
                        {reviews[key].year}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewDetail;