import Link from "next/link";

export default function Page() {

  const orderId =
    "ORD12345";

  return (

    <div className="max-h-[70vh] overflow-y-auto">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-4xl font-bold text-emerald-600">

          Order Confirmed

        </h1>

        <p className="mt-4">

          Order ID:

          {orderId}

        </p>

        <p className="mt-2">

          Estimated Wait:

          15 Minutes

        </p>

        <Link
          href={`/track/${orderId}`}
        >

          <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg">

            Track Order

          </button>

        </Link>

      </div>

    </div>

  );

}