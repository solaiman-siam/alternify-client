import { BiDonateHeart } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Donations() {
  return (
    <div className="">
      <div className="bg-[url('https://i.postimg.cc/KzPP4tDC/topographic-large.webp')] w-full h-[450px]">
        <div className=" max-w-7xl mx-auto px-6 md:px-12 lg:pl-52 w-full h-full flex justify-center flex-col items-start">
          <h3 className="text-[#FF7F32] font-semibold uppercase text-xl md:text-xl  lg:text-2xl pb-4">
            ETHICAL CONSUMPTION GUIDE
          </h3>
          <h1 className="font-semibold md:text-4xl text-3xl dark:text-gray-700  lg:text-6xl  pb-6">
            Conscious Consumer Network
          </h1>
          <p className="text-[#57534E] dark:text-gray-500 md:text-lg text-base lg:text-xl  md:w-10/12 lg:md:w-10/12 w-11/12 lg:w-9/12">
            We believe in the power of consumer choices to drive positive
            change. Our platform provides a space for users to share and
            discover alternatives to products from regions with troubling
            policies. Together, we can make a difference by supporting ethical
            consumption and advocating for human rights.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 md:py-24 py-12 lg:py-32 px-6 md:px-12 lg:pl-52">
        <h3 className="text-xl font-semibold text-orange-400">
          URGENT CALL TO ACTION
        </h3>
        <h2 className="lg:text-4xl md:text-3xl text-3xl dark:text-gray-300 font-medium pt-3 pb-4">
          Aid for Gaza in Crisis
        </h2>
        <p className=" text-gray-500 md:w-10/12 w-11/12 lg:md:w-10/12 w-11/12 lg:w-9/12">
          The destruction in Gaza is vast and deep, with entire neighborhoods
          reduced to rubble. The severing of the electricity supply has thrust
          the healthcare system into turmoil, with hospitals, already teeming
          with the injured and ill, now facing a power crisis. Prior to this
          recent surge in violence, Gaza's residents already contended with a
          severe scarcity of essentials—food and water were in short supply, and
          the water that was available was largely undrinkable, with 97% deemed
          unsafe.
        </p>
        <h3 className="text-2xl dark:text-gray-300 font-medium pt-5 pb-3">
          Power Outages Paralyze Hospitals
        </h3>
        <p className=" text-gray-500 md:w-10/12 w-11/12 lg:w-9/12 pb-4">
          The assaults have not spared even the sanctuaries of healing and hope;
          hospitals and ambulances have come under attack, resulting in the
          tragic loss of nine healthcare professionals. Educational institutions
          have ceased operations, while morgues, overwhelmed by the scale of
          casualties, have resorted to placing the deceased upon their cold
          floors.
        </p>
        <h3 className="text-2xl dark:text-gray-300 font-medium pt-5 pb-3">
          Water Crisis and Stricken Infrastructure
        </h3>
        <p className=" text-gray-500 md:w-10/12 w-11/12 lg:w-9/12 pb-4">
          The human toll is staggering, with over 1.7 million people uprooted
          from their homes, desperately seeking safety in the face of relentless
          bombing. They head south, looking for shelter in the homes of
          strangers, in makeshift accommodations, in medical facilities, and in
          schools operated by the UN—yet even these havens are no longer secure
          nor equipped, as even UN shelters have depleted their water reserves.
        </p>
        <h3 className="text-2xl dark:text-gray-300 font-medium pt-5 pb-3">
          The Mass Displacement of Gaza's Residents
        </h3>
        <p className=" text-gray-500 md:w-10/12 w-11/12 lg:w-9/12 pb-4">
          Amid this chaos, Palestinian families, stripped of their homes,
          possessions, and sustenance, find themselves in dire need of aid.
          Patients, crammed into hospitals that are short on supplies and
          electricity, are in a desperate fight for survival, relying on
          generators that are running low on fuel. Likewise, paramedics are
          facing a battle of their own, with fuel shortages hampering their
          life-saving missions to reach and treat the wounded.
        </p>
        <h3 className="text-2xl dark:text-gray-300 font-medium pt-5 pb-3">
          How Your Donation Can Help
        </h3>
        <p className=" text-gray-500 md:w-10/12 w-11/12 lg:w-9/12">
          In this moment of crisis, every second is critical, and every
          donation, no matter its size, has the potential to make a monumental
          impact. Assistance is urgently needed—not tomorrow, not in a few
          hours, but right now. Your contribution could be the one that turns
          the tide, providing a lifeline to those whose lives hang in the
          balance.
        </p>
      </div>
      <div className="bg-[url('https://i.postimg.cc/ZYf5PG3T/topographic-large-grey-1.webp')] lg:h-[1200px] h-[2650px] md:h-[1600px] w-full bg-cover bg-center md:py-14 py-10 lg:py-24">
        <div className="flex flex-col items-center pb-14">
          <h3 className="text-2xl   font-medium text-orange-400 pb-4">
            MAKING A DIFFERENCE
          </h3>
          <h2 className="lg:text-5xl md:text-4xl text-3xl dark:text-gray-700 font-semibold pb-5">
            Our Recommended Charity
          </h2>
          <p className="text-gray-500 text-center md:w-10/12 w-11/12 lg:w-7/12 text-lg">
            Please note, this is not an official partnership but an endorsement
            based on shared values. You can donate directly by visiting their
            website, ensuring your support reaches them without intermediation.
          </p>
        </div>
        <div className="grid max-w-7xl mx-auto lg:px-14 md:px-10 px-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10">
          {/* 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-md p-10">
            <h3 className="text-3xl font-medium pb-4 dark:text-gray-300">
              Save the children
            </h3>
            <h4 className="text-[#059669] pb-2  font-medium w-10/12">
              US Dollars - Children in Gaza and the West Bank
            </h4>
            <p className="pb-5 text-gray-500 w-11/12">
              After decades of conflict, children continue to live in an
              environment characterized by violence, poverty and insecurity.
              Together, we can fight threats to children's lives in Gaza and the
              West Bank.
            </p>
            <a
              target="_blank"
              href="https://www.savethechildren.org/us/where-we-work/west-bank-gaza"
              className="flex hover:bg-opacity-60 transtion-all duration-200  w-fit gap-2 items-center bg-[#059669] px-4 py-2 rounded-md justify-center"
            >
              <span className="font-semibold  text-white ">Donate Now </span>
              <BiDonateHeart size={18} color="white" />
            </a>
          </div>
          {/* 2 */}
          <div className="bg-white dark:bg-gray-900 h-fit rounded-md p-10">
            <h3 className="text-3xl dark:text-gray-300  font-medium pb-4">
              Human Appeal
            </h3>
            <h4 className="text-[#059669] pb-2  font-medium w-10/12">
              UK Pound - Gaza Emergency Donatio
            </h4>
            <p className="pb-5 text-gray-500 w-11/12">
              Thousands of families have fled northern Gaza as the entire
              enclave is plunged into darkness.
            </p>
            <a
              target="_blank"
              href="https://humanappeal.org.uk/appeals/gaza-emergency-appeal"
              className="flex hover:bg-opacity-60 transtion-all duration-200  w-fit gap-2 items-center bg-[#059669] px-4 py-2 rounded-md justify-center"
            >
              <span className="font-semibold  text-white ">Donate Now </span>
              <BiDonateHeart size={18} color="white" />
            </a>
          </div>
          {/* 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-md h-fit p-10">
            <h3 className="text-3xl dark:text-gray-300  font-medium pb-4">
              Medical Aid for Palestine
            </h3>
            <h4 className="text-[#059669] pb-2  font-medium w-10/12">
              UK Pound - Medical Aid for Palestinians in Gaza
            </h4>
            <p className="pb-5 text-gray-500 w-11/12">
              After decades of conflict, children continue to live in an
              environment characterized by violence, poverty and insecurity.
            </p>
            <a
              href="https://www.map.org.uk/donate/donation-details/484"
              target="_blank"
              className="flex hover:bg-opacity-60 transtion-all duration-200  w-fit gap-2 items-center bg-[#059669] px-4 py-2 rounded-md justify-center"
            >
              <span className="font-semibold  text-white ">Donate Now </span>
              <BiDonateHeart size={18} color="white" />
            </a>
          </div>
          {/* 4 */}
          <div className="bg-white dark:bg-gray-900 rounded-md p-10">
            <h3 className="text-3xl dark:text-gray-300  font-medium pb-4">
              UN Population Fund
            </h3>
            <h4 className="text-[#059669] pb-2  font-medium w-10/12">
              Global - Help mothers and newborn in Gaza
            </h4>
            <p className="pb-5 text-gray-500 w-11/12">
              With current escalation in the Gaza Strip, pregnant women, new
              mothers and newborns are among the most impacted.
            </p>
            <a
              href="https://www.unfpa.org/donate/Gaza/1?form=GazaAppeal"
              target="_blank"
              className="flex hover:bg-opacity-60 transtion-all duration-200  w-fit gap-2 items-center bg-[#059669] px-4 py-2 rounded-md justify-center"
            >
              <span className="font-semibold  text-white ">Donate Now </span>
              <BiDonateHeart size={18} color="white" />
            </a>
          </div>
          {/* 5 */}
          <div className="bg-white dark:bg-gray-900 rounded-md p-10">
            <h3 className="text-3xl dark:text-gray-300  font-medium pb-4">
              Danish Muslim Aid
            </h3>
            <h4 className="text-[#059669] pb-2  font-medium w-10/12">
              Danish Kroner - Emergency Donation for Gaza
            </h4>
            <p className="pb-5 text-gray-500 w-11/12">
              Israel imposed a full blockade of Gaza, cutting off both water and
              electricity supplies and preventing the transport of goods,
              including food.
            </p>
            <a
              href="https://dmaid.dk/support-country/palaestina/"
              target="_blank"
              className="flex hover:bg-opacity-60 transtion-all duration-200  gap-2 w-fit items-center bg-[#059669] px-4 py-2 rounded-md justify-center"
            >
              <span className="font-semibold  text-white ">Donate Now </span>
              <BiDonateHeart size={18} color="white" />
            </a>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-md p-10">
            <h3 className="text-3xl dark:text-gray-300  font-medium pb-4">
              Boycott-Israel.org
            </h3>
            <h4 className="text-[#059669] pb-2  font-medium w-10/12">
              Global - Non profit upkeep of Boycott-Israel.org
            </h4>
            <p className="pb-5 text-gray-500 w-11/12">
              Donation for any expense related to keep running
              www.boycott-israel.org.
            </p>
            <a
              target="_blank"
              disabled
              className="flex hover:bg-opacity-60 transtion-all duration-200  gap-2 w-fit items-center opacity-15 bg-[#059669] px-4 py-2 rounded-md justify-center"
            >
              <span className="font-semibold  text-white ">Donate Now </span>
              <BiDonateHeart size={18} color="white" />
            </a>
          </div>
          {/* 6 */}
        </div>
      </div>
      <div className="flex w-full justify-center dark:bg-gray-900 items-center flex-col py-20">
        <h4 className="text-[#FF7F32] lg:text-2xl md:text-2xl text-xl  font-semibold">
          BOYCOTT FOR PEACE
        </h4>
        <h3 className="lg:text-4xl md:text-3xl dark:text-gray-300 text-2xl font-semibold py-4">
          A Path to Ending Suffering
        </h3>
        <p className="lg:w-6/12 md:w-10/12 text-gray-600 dark:text-gray-300  text-center">
          Dive in, explore, and join the movement towards a world where every
          purchase carries the weight of positive impact. Your choice matters –
          let's make it count.
        </p>
        <Link
          to={"/queries"}
          className="flex gap-4 hover:bg-opacity-80 transition duration-200  items-center mt-8 lg:px-6 md:px-5 px-4  font-semibold text-white rounded-md py-2 md:py-3 lg:py-3 bg-[#FF7F32]"
        >
          <button>SEE THE BOYCOTT LIST</button>
          <MdArrowRightAlt size={24} />
        </Link>
      </div>
    </div>
  );
}

export default Donations;
