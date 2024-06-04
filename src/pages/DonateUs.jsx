import { Helmet } from "react-helmet-async";
import Payment from "../components/Payment";

function DonateUs() {
  return (
    <div className="bg-[#ff81321c] p-6 md:p-8  lg:p-14">
      <Helmet>
        <title>Alternify | Donate Us</title>
      </Helmet>
      <div className=" bg-white lg:p-16 md:p-10 p-6  mx-auto max-w-7xl">
        <h3 className="lg:text-4xl md:text-4xl text-2xl font-bold pb-4 lg:pb-8">
          Donate
        </h3>
        <h4 className="font-medium text-lg">
          Your support is essential to keep this movement growing.{" "}
        </h4>
        <h4 className="font-thin text-lg pt-3 text-gray-600">
          Donate today to fuel our movement.
        </h4>

        <Payment></Payment>
      </div>
    </div>
  );
}

export default DonateUs;
