import React from "react";
import Footer from "../../src/components/footer/footer";
import Nav from "../../src/components/Navbar/nav";
import SocialLinks from "../../src/components/sociallinks";
const Contact = () => {
  return (
    <div>
      <Nav />
      <div>
        <SocialLinks />

        <div>
          <iframev
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8730069158732!2d69.27446927663588!3d41.31162620069019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f4960f131%3A0xe7d3ad898ef8844c!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INGO0YHRgtC40YbQuNC4!5e0!3m2!1sru!2s!4v1682424090596!5m2!1sru!2s"
            width="100%"
            height="450px"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
