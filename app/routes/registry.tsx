export default function Registry() {
  return (
    <div>
      <h1 className="text-3xl justify-self px-12">Our Registries:</h1>
      <div className="px-64 m-8 grid grid-cols-2 grid-rows-2 gap-4">
        <a
          href="https://www.amazon.com/wedding/kory-smith-sydney-vollmer-cincinnati-september-2022/registry/3N8WRFU8TLW7E
		"
          className="border-2 hover:shadow-lg m-auto"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="object-scale-down"
            src="amazon wedding registry.png"
            alt="Amazon wedding registry logo"
          ></img>
        </a>

        <p className="object-scale-down border-2 border-dashed hover:shadow-lg m-auto p-8 w-full h-full">
          We would also love:
          <ul className="list-disc">
            <li>Visa gift cards</li>
            <li>Blue Apron gift cards</li>
            <li>Restaurant gift cards</li>
            <li>Experience gift cards</li>
          </ul>
        </p>

        {/* <a
          href="https://www.amazon.com/wedding/kory-smith-sydney-vollmer-cincinnati-september-2022/registry/3N8WRFU8TLW7E
		"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="object-scale-down border-2 hover:shadow-lg m-auto"
            src="amazon wedding registry.png"
            alt="Amazon wedding registry logo"
          />
        </a>

        <a
          href="https://www.amazon.com/wedding/kory-smith-sydney-vollmer-cincinnati-september-2022/registry/3N8WRFU8TLW7E
		"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="object-scale-down border-2 hover:shadow-lg m-auto"
            src="amazon wedding registry.png"
            alt="Amazon wedding registry logo"
          />
        </a> */}
      </div>
    </div>
  );
}
