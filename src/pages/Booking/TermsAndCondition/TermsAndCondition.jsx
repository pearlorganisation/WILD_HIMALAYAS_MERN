import React from "react";
import StepForm from "../StepForm/StepForm";

const TermsAndCondition = () => {
  return (
    <>
      <StepForm />
      <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed p-5">
        <header className="bg-gray-600 text-white py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold">Terms & Conditions</h1>
          </div>
        </header>

        <div className="container mx-auto py-8 px-4">
          <div className="content bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Special COVID-19 Terms
              </h2>
              <p>
                Given the current circumstances surrounding COVID-19, if you
                decide to cancel your tour, we completely understand. The health
                and wellbeing of our customers and staff is our number one
                priority.
              </p>
              <p>
                If your tour date is booked inside our cancellation period,
                where our cancellation fees would normally apply, in this
                instance, we’re happy to offer a 100% travel credit with Into
                Wild Himalaya Adventure Tour and Travels, valid for travel until
                1 year.
              </p>
              <p>
                Your contract with Into Wild Himalaya Adventure Tour and Travels
                (Hereafter referred to as the Company) is subject to the terms
                and conditions below. By booking a trip with us, you are deemed
                to have agreed to these Booking Conditions (which constitutes
                the entire agreement between you and us) and your booking will
                be accepted by us on this basis. The services to be provided are
                those referred to in your booking confirmation invoice.
              </p>
              <p>
                Customized tours may be subject to alternative cancellation
                terms, which will be communicated to clients at the time of
                booking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Booking Conditions</h2>
              <p>
                Please take the time to read and understand the conditions of
                booking set out below prior to booking a trip with us. We
                strongly recommend that you also read the Essential Trip
                Information relating to your trip prior to booking to ensure
                that you understand the itinerary, style, and physical demands
                of the trip you are undertaking.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                1. Tour Booking
              </h3>
              <p>
                Once you have confirmed your booking, we will proceed to confirm
                the booking with hotels, transportation, flights, etc. Please
                check that your passport is valid at least within six months of
                your return from your travels. Also, confirm all names are the
                same as the relevant passport, and that travel dates provided
                are correct. It is your responsibility to ensure that you are in
                possession of the correct visas, permits, and certificates for
                your trip; please refer to your trip notes for more information.
                We are not responsible if you are refused entry into a country
                because of problems with your passport, visa, or other travel
                documentation.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                2. Reservation
              </h3>
              <p>
                A non-refundable deposit of 500 USD per person can only be paid
                by bank transfer or via TransferWise for reserving the tour.
              </p>
              <p>
                For our customized private tours, Into Wild Himalaya Adventure
                Tour and Travels reserves the right to request additional
                deposit payment if required by airlines and suppliers. This will
                be communicated at the time of booking.
              </p>
              <p>
                Prices quoted are in USD. At the time of booking, you may
                request to pay in an alternative major currency of your choice,
                including INR. As such, the exact amount will be subject to the
                exchange rate at the time your transaction is processed, which
                we will inform you of prior to payment.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                3. Final Payment
              </h3>
              <p>
                Final payment must be received by the Company 45 days prior to
                the departure date. Failure to comply with this requirement will
                result in automatic cancellation of reservation and forfeiture
                of deposit. If reservation is made within 30 days of departure,
                full payment must be made immediately upon confirmation. The
                Company accepts bank transfer, cash, credit card, and via
                TransferWise.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">
                4. Cancellation & Refund
              </h3>
              <p>
                Once reservation is confirmed, the deposit paid is
                non-refundable. A full refund less deposit paid will be issued
                for any cancellation 60 days before departure. All cancellation
                requests must be made in writing. Penalty for cancellations
                within 60 days of departure will be assessed as follows:
              </p>
              <ul className="list-disc list-inside ml-6">
                <li>59-42 days………………….. 25% of the tour cost</li>
                <li>41-28 days………………….. 50% of the tour cost</li>
                <li>21 days or less……………. 100% of the tour cost</li>
              </ul>
              <p>
                We may cancel a trip at any time prior to departure if, due to
                terrorism, natural disasters, political instability, or other
                external events that render the trip inoperable in accordance
                with the planned itinerary. If we cancel your trip, you can
                transfer amounts paid to an alternate departure date or receive
                a full refund. In circumstances where the cancellation is due to
                external events outside our reasonable control, refunds will be
                less.
              </p>
            </section>

            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-md">
                <form
                  action="#"
                  method="POST"
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      required
                      className="mr-2 h-4 w-4 text-gray-500 focus:ring-gray-500 border-gray-300 rounded"
                    />
                    <label htmlFor="acceptTerms" className="text-gray-600">
                      I accept the{" "}
                      <a href="#" className="text-gray-600 hover:underline">
                        Terms and Conditions
                      </a>
                      .
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
