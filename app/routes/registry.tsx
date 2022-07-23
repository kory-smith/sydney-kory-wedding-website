import {
  CashIcon,
  FireIcon,
  GiftIcon,
  HomeIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "Amazon",
    href: "https://www.amazon.com/wedding/registry/3N8WRFU8TLW7E",
    icon: HomeIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description: "Home goods and board games",
  },
  {
    title: "Macy's",
    href: "https://www.macys.com/wgl/registry/guest/7353338",
    icon: GiftIcon,
    iconForeground: "text-red-700",
    iconBackground: "bg-red-50",
    description: "Mostly dinnerware",
  },
  {
    title: "Target",
    href: "https://www.target.com/gift-registry/gift-giver?registryId=9139e060-df80-11ec-9013-87ba5562a77d&type=WEDDING",
    icon: FireIcon,
    iconForeground: "text-red-700",
    iconBackground: "bg-red-50",
    description: "Kitchenware and home goods",
  },
  {
    title: "Gift cards",
    href: "#",
    icon: CashIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description: ` We would also love Visa gift cards, Blue Apron gift cards, restaurant gift cards, and experience gift cards `,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="h-full w-100">
      <h1 className="text-center p-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        Our Registries
      </h1>
      <div className="rounded-lg mx-auto lg:mt-20 inline-block max-w-7xl bg-gray-200 overflow-hidden shadow divide-y  divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) =>
          actionIdx === actions.length - 1 ? (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "rounded-lg inline-flex p-3 ring-4 ring-white"
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <p>
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </p>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "rounded-lg inline-flex p-3 ring-4 ring-white"
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a
                    href={action.href}
                    className="focus:outline-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
