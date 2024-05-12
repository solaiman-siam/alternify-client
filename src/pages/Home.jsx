import Banner from "../components/Banner";
import RecentQueries from "../components/RecentQueries";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Slider></Slider>
      <Banner></Banner>
      <RecentQueries></RecentQueries>
    </div>
  );
}

export default Home;
