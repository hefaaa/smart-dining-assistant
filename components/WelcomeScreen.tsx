"use client";

type Props = {
  tableId: string;
  onStart: () => void;
};

export default function WelcomeScreen({
  tableId,
  onStart,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">

      <h1 className="text-4xl font-bold">
        Welcome to Spice Garden
      </h1>

      <p className="mt-2 text-lg">
        Table {tableId}
      </p>

      <p className="mt-6 text-xl">
        👋 Hi! I'm Zara.
      </p>

      <p>
        What's the vibe today?
      </p>

      <div className="mt-6 flex gap-4 justify-center">

        <button
          className="bg-orange-600 text-white px-6 py-3 rounded"
          onClick={onStart}
        >
          Just Browsing
        </button>

        <button
          className="bg-emerald-600 text-white px-6 py-3 rounded"
          onClick={onStart}
        >
          Tell Me What's Good
        </button>

      </div>

    </div>
  );
}