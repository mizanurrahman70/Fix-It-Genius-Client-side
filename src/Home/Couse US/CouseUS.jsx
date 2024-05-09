import React from "react";

const CouseUS = () => {
  return (
    <div>
      <div className="mt-5 mb-5">
        <h1 className="text-4xl font-semibold text-center">Why Choose Us?</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card one 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/XChWCDd/chooseus1-7790b366.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Same Day Service</h2>
            <p>
              When your phone breaks, you don’t want it fixed tomorrow—you need
              it fixed today.
            </p>
          </div>
        </div>
        {/* card one 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/0rdzb2Z/chooseus2-fbadfe4b.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Best Price Guarantee</h2>
            <p>
            Repairing beats replacing, and UCRACKWEFIX beats all other phone repair companies.
            </p>
          </div>
        </div>
        {/* card one 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/qdqLjf8/chooseus3-faf69afc.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Superior Warranty</h2>
            <p>
            Stronger than any phone case, UCRACKWEFIX offers the most reliable warranty in the market.
            </p>
          </div>
        </div>
        {/* card one 4 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/2WM3Rrn/chooseus4-5d41f4e5.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Professional Technician</h2>
            <p>
            Our technicians are experts in the field of handling all the complexities of repairing damaged components.
            </p>
          </div>
        </div>
        {/* card one 5  */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/GvDZqgZ/chooseus5-fb22454f.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Certified Parts</h2>
            <p>
            Using authorized parts is important to us, to maintain high service standards and quality in all our repairs.
            </p>
          </div>
        </div>
        {/* card one  6 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/S7wwt8f/ewaste-97c7da8d.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">E-waste managements</h2>
            <p>
            UCRACKWEFIX ensures that e-waste is channeled to the registered recycler where it is transported and disposed of in a safe manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouseUS;





