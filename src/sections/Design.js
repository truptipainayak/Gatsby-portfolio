import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaDev, FaLink, FaStar } from "../components/Icons";
import styles from "./Design.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Design = () => {
  const data = useStaticQuery(graphql`
    {
      allDesignsJson {
        edges {
          node {
            id
            title
            description
            tags
            website
            github
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="Design">
      <Heading icon={FaDev} title="Design" />

      <div className={styles.container}>
        {data.allDesignsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.design} wow fadeIn`}
            style={{
              animationDelay: `${index * 300 + 300}ms`,
            }}
          >
            <OutboundLink
              href={node.website || node.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                {...node.image.childImageSharp}
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
            <h5 className="mt-4 font-semibold">{node.title}</h5>
            <div className="flex mt-2">

              {node.github && (
                <Tooltip title="Go to GitHub Repo" placement="bottom">
                  <OutboundLink
                    href={node.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <span className="sr-only">Go to Graphic Design Folder</span>
                  </OutboundLink>
                </Tooltip>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className="mt-6"
        icon={FaStar}
        title="Graphic Design"
        onClick={() => window.open("https://drive.google.com/drive/u/1/folders/1u0ksqfGAnZrhSvY7NLDKy-tPQE9IPZR6", "_blank")}
      />
    </section>
  );
};

export default Design;
