export default function Example() {
  let weddingDay = new Date("9/10/2022");
  let today = new Date(Date.now());
  let difference = weddingDay.getTime() - today.getTime();
  let daysTillWedding = Math.ceil(difference / (1000 * 3600 * 24));

  return (
    <div className="bg-white h-5/6">
      <main className="relative h-full">
        <div className="h-full">
          <div className="relative h-full">
            <div className="max-w-7xl mt-10 relative  mx-auto h-5/6 sm:px-6 lg:px-8">
              <div className="relative shadow-xl h-full sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0 m-auto">
                  <img
                    className="h-full w-full object-cover"
                    src="/engagement.jpeg"
                    alt="Kory and Sydney getting engaged"
                  />
                  <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="pb-80 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">September 10, 2022</span>
                    <span className="block text-indigo-200">
                      {daysTillWedding} days left!
                    </span>
                  </h1>
                  <div className="bg-black/75 rounded-md p-4">
                    <h1 className="text-center text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      Ceremony: 5PM, St. William Church 4108 West 8th Street,
                      Cincinnati, OH 45205
                    </h1>
                    <h1 className="pt-8 text-white text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Reception: 6:30PM, The Cincinnati Club 30 Garfield
                        Place, Cincinnati, OH 45202
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
