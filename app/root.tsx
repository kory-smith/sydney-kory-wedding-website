import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { Navigation } from "./components/Navbar";
import { Footer } from "./components/Footer";
import type { MetaFunction } from "remix";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export const meta: MetaFunction = () => {
  return { title: "Sydney and Kory's Wedding Site" };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: bootstrap }];
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
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
