export default function Parking() {
  return (
    <div className="px-16 m-8">
      <h2 className="text-3xl my-4">Parking at St. William</h2>
      <p>
        You'll park off St Williams Ave, in the red square in the below image.
        You'll walk down to the church, which is circled in blue.{" "}
        <a
          href="https://www.google.com/maps/dir//39.108432,-84.586203/@39.1083716,-84.5871209,347m/data=!3m1!1e3!4m2!4m1!3e0"
          target="_blank"
          rel="noreferrer"
        >
          Click here for a Google Maps directions link.{" "}
        </a>{" "}
        You can also print the directions from there if you'd prefer.
      </p>
      <img
        className="my-12 mx-auto"
        src="St william.png"
        alt="Google street view of St. William with the parking lot marked"
      />
      <br></br>
      <h2 className="text-3xl my-4">Parking at the Cincinnati Club</h2>
      <p>Parking is comped for the Cincinnati Club. More details to come.</p>
    </div>
  );
}
