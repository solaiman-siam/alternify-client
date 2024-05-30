import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon";

function CheckoutForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    if (price > 0) {
      axiosCommon
        .post(`/create-payment-intent`, {
          price: price,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.log(err));
    }
  }, [price, axiosCommon]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error?.message);
    } else {
      console.log("payment method", paymentMethod);
      setPaymentError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setPaymentError(confirmError?.message);
    } else {
      setPaymentId(paymentIntent.id);
      if (paymentIntent.status === "succeeded") {
        setPaymentError("");
        const donationInfo = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          date: new Date(),
          price: price,
        };

        axiosCommon.post("/donations", donationInfo).then((res) => {
          if (res.data?.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Donation successful. Thank your for your kindness",
              showConfirmButton: false,
              timer: 2000,
            });
            setPaymentError("");
          }
        });
        navigate("/");
      }
    }
  };

  return (
    <div className="px-52 my-10 ">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mt-6 my-8">
          <p className="px-4 py-2 font-thin text-gray-700 rounded-l-sm  bg-gray-200">
            USD $
          </p>
          <input
            className="  text-gray-600 border-none bg-gray-100  rounded-r-sm "
            type="text"
            placeholder="Enter Amount"
            name="price"
            onBlur={() => setPrice(event.target.value)}
            id=""
          />
        </div>
        <CardElement
          className="w-full border p-4 roounded-sm"
          options={{
            style: {
              base: {
                fontSize: "22px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center my-6">
          <button
            className="bg-green-500 text-xl flex justify-center gap-2 items-center cursor-pointer text-white rounded-sm px-4 py-2 my-4"
            type="submit"
            disabled={!stripe}
          >
            Donate Now
            <BiDonateHeart size={24} />
          </button>
        </div>
        {paymentError && (
          <p className="text-red-500 text-center">Error: {paymentError}!</p>
        )}
      </form>
      <p className="text-green-400 font-medium py-4">{paymentId}</p>
    </div>
  );
}

export default CheckoutForm;
