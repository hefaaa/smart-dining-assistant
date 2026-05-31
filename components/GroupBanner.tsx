export default function GroupBanner() {

  return (

    <div className="bg-blue-50 rounded-xl p-4 flex justify-between">

      <div>

        <h3>
           3 People At This Table
        </h3>

      </div>

      <div className="flex gap-2">

        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
          R
        </div>

        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
          P
        </div>

        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          A
        </div>

      </div>

    </div>

  );
}