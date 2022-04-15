import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import styles from "./tailwind.css";
import Navbar from "~/components/Navbar";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Sydney and Kory's Wedding Site" };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="bg-[#E2B4A0] p-6 absolute bottom-0 w-full text-center">A big thank you from us!</footer>
      </body>
    </html>
  );
}
