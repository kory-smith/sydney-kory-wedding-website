export default function Index() {
  let weddingDay = new Date("9/10/2022");
  let today = new Date(Date.now());
  let difference = weddingDay.getTime() - today.getTime();
  let daysTillWedding = Math.ceil(difference / (1000 * 3600 * 24));

  return (
    <div className="md:px-16 px-2 m-8">
      <h2 className="text-[#343337] text-5xl text-center break-words border-2 border-[#343337] rounded-2xl shadow-lg w-full leading-relaxed">
        September 10, 2022—
        <span className="text-[#E3D8C6] display-block bg-[#343337] ml-2 p-2 rounded">
          {daysTillWedding}
        </span>{" "}
        days left!
      </h2>
      <p className="text-3xl my-4">
        Ceremony at{" "}
        <a
          href="https://goo.gl/maps/WC9LTFoP5mEeL1FE7"
          target="_blank"
          rel="noreferrer"
        >
          St. William Church
        </a>{" "}
        @ 5:00 p.m.
      </p>
      <p className="text-3xl my-4">
        Reception at{" "}
        <a
          href="https://goo.gl/maps/usdDUJEhmsPDbead9"
          target="_blank"
          rel="noreferrer"
        >
          The Cincinnati Club
        </a>{" "}
        @ 6:30 p.m. until 11:30 p.m.
      </p>
      <img
        className="mx-auto my-12"
        src="engagement.jpeg"
        alt="Kory proposing to Sydney"
      />
    </div>
  );
}
