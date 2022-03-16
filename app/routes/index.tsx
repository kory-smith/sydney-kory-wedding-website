import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { LinksFunction } from "remix";
import styles from "~/styles/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  let weddingDay = new Date("9/10/2022");
  let today = new Date(Date.now());
  let difference = weddingDay.getTime() - today.getTime();
  let daysTillWedding = Math.ceil(difference / (1000 * 3600 * 24));

  return (
    <Container>
      <h2>September 10, 2022—{daysTillWedding} days remaining</h2>
      <br />
      <p>
        Ceremony at{" "}
        <a href="https://goo.gl/maps/WC9LTFoP5mEeL1FE7" target="_blank">
          St. William Church
        </a>{" "}
        @ 5:00 p.m.
      </p>
      <p>
        Reception at{" "}
        <a href="https://goo.gl/maps/usdDUJEhmsPDbead9" target="_blank">
          The Cincinnati Club
        </a>{" "}
        @ 6:30 p.m. until 11:30 p.m.
      </p>
      <Image src="engagement.jpeg" rounded fluid />
    </Container>
  );
}
