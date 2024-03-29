import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Sushant"}
          desination={"SDE at Accenture"}
          feedback={"Quite resourceful and eager to solve work."}
        />

        <TestimonialCard
          name={"Sudhanshu"}
          desination={"SDE at Accenture"}
          feedback={
            "Wow what a portfolio, doesn't expected this from you kudus!"
          }
        />

        <TestimonialCard
          name={"Purnedu"}
          desination={"SDE at V2Solutions"}
          feedback={
            "Amazing seems like you should have a great Entrepreneurship skill."
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback, desination }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4 className="name">{name}</h4>
    <p className="para">({desination})</p>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
