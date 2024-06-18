import { Button } from "antd";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="service">
        <h3>Individual Therapy</h3>
        <p>
          Providing one-on-one sessions to help you manage anxiety, depression,
          and personal growth.
        </p>
      </div>
      <div className="service">
        <h3>Couples Therapy</h3>
        <p>
          Helping couples improve communication, resolve conflicts, and
          strengthen their relationship.
        </p>
      </div>
      <div className="service">
        <h3>Group Therapy</h3>
        <p>
          Facilitating group sessions for shared experiences and mutual support.
        </p>
        <Button type="primary">Learn More</Button>
      </div>
    </section>
  );
}
