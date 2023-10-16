import React from "react";
import Layout from "../components/layout/Layout";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          fontWeight: "300",
          justifyContent: "center",
          my: 10,
          alignItems: "center",
          fontSize: "20px",
          p: 10,
          textAlign: "justify",
          "@media(max-width:600px)": {
            mt: 0,
            fontSize: "1rem",
            p: 5,
            textAlign: "justify",
          },
        }}
      >
        <p>
          Welcome to My Restaurant, a culinary journey like no other. Nestled in
          the heart of Madurai, our restaurant is a celebration of flavors,
          creativity, and community. We invite you to discover the story behind
          our kitchen and the passion that drives our culinary artisans.
        </p>
        <br />
        <p>
          At My Restaurant, we believe that dining is not just about
          nourishment; it's an experience, a memory waiting to be created. Our
          journey began with a simple yet profound idea to bring people together
          through the art of food. We are more than just a restaurant; we are a
          place where flavors, culture, and innovation come together to offer
          you an unforgettable dining experience.
        </p>
        <br />
        <p>
          We are proud to offer a diverse menu that combines traditional and
          contemporary culinary techniques. Our dedicated team of chefs draws
          inspiration from local ingredients and global traditions, crafting
          each dish with precision and love. Whether you're a seasoned foodie or
          a first-time explorer of taste, our menu offers a variety of options
          to suit every palate.
        </p>
        <br />
        <p>
          We look forward to serving you and making your dining experience truly
          exceptional. Thank you for choosing My Restaurant as your culinary
          destination.
        </p>
        <br />
        <p>
          For reservations or inquiries, please don't hesitate to contact us. We
          can't wait to welcome you to our table!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
