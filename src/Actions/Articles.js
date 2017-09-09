export function getArticles () {
  const articles = [
    {
      title: "What I didn't learn in my CS degree",
      preview: "Someone please save us, us college kids!\nWhat my parents told me is what I did.\nThey said go to school and be a college kid,\nbut in the end I question why I did...",
      image: "/images/medium/college.jpeg",
      url: "https://medium.com/helpful-human/what-i-didnt-learn-in-my-in-cs-degree-27ff97b06807"
    },
    {
      title: "Drink the Elixir",
      preview: "Think of programming languages as positions on a clock where similar languages are closer together on the clock face. When you go to learn…",
      url: "https://medium.com/helpful-human/drink-the-elixir-87e3143fb9a6"
    },
    {
      title: "Blending Dev with Ops Using Cloud Computing",
      preview: "Your job as VP of IT Operations is to ensure the fast, predictable, and uninterrupted flow of planned work that delivers value to the…",
      url: "https://medium.com/helpful-human/blending-dev-with-ops-using-cloud-computing-d966197ab3d1",
      image: "/images/medium/cloud.jpeg"
    },
    {
      title: "World Adventures: How I Learned all about Slippy Tile Maps",
      preview: "I have to say; it wasn’t until recently that I really began to appreciate the effort that goes into those generic interactive maps that you…",
      url: "https://medium.com/helpful-human/world-adventures-how-i-learned-all-about-slippy-tile-maps-28cd84a89e12",
      image: "/images/medium/world.jpeg"
    }
  ];

  return ({
    type: "SET_ARTICLES",
    articles
  });
}