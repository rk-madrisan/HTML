import "./App.css";
import NewsCard from "./Component/NewCard";


function App() {
  const newsItems = [
    {
      head: "Why AIADMK's Palaniswami faces do-or-die situation ahead of 2026 Tamil Nadu polls",
      content:
        "With elections approaching, AIADMK leader faces crucial decisions to stay politically relevant.",
    },
    {
      head: "Tamil Nadu gears up for major infrastructure projects in 2025",
      content:
        "The state government announced a series of new developments aimed at boosting employment.",
    },
    {
      head: "Rising youth interest in state politics reshapes voter dynamics",
      content:
        "Youth participation is changing the narrative in traditional political strongholds.",
    },
  ];
  return(
    <div className="">
      <div className="bg-success d-flex justify-content-around p-5">
        {newsItems.map((item) => (
          <NewsCard head={item.head} content={item.content}></NewsCard>
        ))}
      </div><div className="pt-3 text-center">
      </div>
    </div>
  );
}

export default App;
