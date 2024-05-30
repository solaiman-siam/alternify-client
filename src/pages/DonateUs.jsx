import { Helmet } from "react-helmet-async";
import Payment from "../components/Payment";

function DonateUs() {
  return (
    <div className="bg-[#ff81321c]  p-14">
      <Helmet>
        <title>Alternify | Donate Us</title>
      </Helmet>
      <div className=" bg-white p-16  mx-auto max-w-7xl">
        <h3 className="text-4xl font-bold pb-8">Donate</h3>
        <h4 className="font-medium text-lg">
          Your support is essential to keep this movement growing.{" "}
        </h4>
        <h4 className="font-thin text-lg pt-3 text-gray-600">
          Donate today to fuel our movement for ethical alternatives.
        </h4>

        <Payment></Payment>
      </div>
    </div>
  );
}

export default DonateUs;
