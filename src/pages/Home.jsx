import Banner from "../components/Banner";
import Donate from "../components/Donate";
import RecentQueries from "../components/RecentQueries";
import Slider from "../components/Slider";
import WeWorkFor from "../components/WeWorkFor";

function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Slider></Slider>
      <Banner></Banner>
      <RecentQueries></RecentQueries>
      <Donate></Donate>
      <WeWorkFor></WeWorkFor>
    </div>
  );
}

export default Home;
