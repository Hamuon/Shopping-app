import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProdvicer";
import "./checkout.css";
import { Link } from "react-router-dom";
const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/"> go to shopping? </Link>
      </main>
    );

  return (
    <main className="container mt-10">
      <div className="h-96 grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 space-y-8 px-12">
          <div className="rounded-md ">
            <form id="payment-form" method="POST" action="">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping & Billing Information
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-4">Name:</span>
                    <p>{auth.name}</p>
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-4">Email:</span>
                    <p>{auth.email}</p>
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-4">Address:</span>
                    <input
                      name="address"
                      className="focus:outline-none px-3"
                      placeholder="10 Street XYZ 654"
                    />
                  </label>

                  <label className="inline-flex w-2/4 border-gray-200 py-3">
                    <span className="text-right px-4">Postal</span>
                    <input
                      name="postal_code"
                      className="focus:outline-none px-3"
                      placeholder="98603"
                    />
                  </label>

                  <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                    <span className="text-right px-4">City</span>
                    <div
                      id="country"
                      className="focus:outline-none px-3 w-full flex items-center"
                    >
                      <select
                        name="country"
                        className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                      >
                        <option value="AU">Tabriz</option>
                        <option value="BE">Tehran</option>
                        <option value="BR">Shiraz</option>
                        <option value="CA">Esfahan</option>
                        <option value="FR">Mashhad</option>
                        <option value="GB">Rasht</option>
                        <option value="US" defaultValue={"Tabriz"}>
                          Tabriz
                        </option>
                      </select>
                    </div>
                  </label>
                </fieldset>
              </section>
            </form>
          </div>

          <button className="submit-button px-4 py-3 rounded-full bg-blue-600 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
            Pay {total} $
          </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>

          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-blue-500">
                ${originalTotalPrice}
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Discount</span>
              <span className="font-semibold text-blue-500">
                ${originalTotalPrice - total}
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-blue-500">Free</span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
