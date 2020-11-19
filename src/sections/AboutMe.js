import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Heading from "../components/Heading";
import { MdPerson, IoIosDocument} from "../components/Icons";
import Button from "../components/Button";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "about-me/selfie.png" }) {
        childImageSharp {
          fluid(maxWidth: 902) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <section id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div  className="text-justify lg:col-span-4 wow fadeIn">
        <div
          className="text-justify wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <p className="text-lg lg:text-xl">
            If you need a more organized and minimal version
            of my information, you can download the trusted PDF version here:
          </p>
          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Download Resume"
            onClick={() =>
              window.open("https://drive.google.com/file/d/1-pJPObvVbhzfldNJdpgJJ5AtU0zxrd9Z/view?usp=sharing", "_blank")
            }
          />
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
