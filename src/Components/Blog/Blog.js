import React from "react";
import "./Blog.css";
import {Fade} from "react-reveal";
import BlogCard from "./BlogCard";
//import StyleContext from "../../contexts/StyleContext";


export default function Blog() {

    const blogSection = {
        title: "Blogs",
        subtitle:
          "With Love for cool gaming stuff, we love to write and teach others what we have learnt about gaming for past 4 years!",
      
        blogs: [
          {
            url:
              "https://www.ign.com/articles/best-pc-games",
            title: " Divinity: Original Sin 2 - Definitive Edition ? ",
            description:
              " Divinity: Original Sin 2 - Definitive Edition has cemented it as one of the greatest RPGs of all time. It masterfully mixes pieces of classic cRPGs with more modern mechanics and designs, feeling old and new at the same time"
          },
          {
            url: "https://skillcrush.com/blog/what-is-react-js/",
            title: "The Witcher 3: Wild Hunt?",
            description:
              "Deep, lengthy RPGs are a staple of PC gaming, and very few have put a larger chunk of sophisticated content forward than The Witcher 3: Wild Hunt has. Its massive sandbox open-world areas impress, both in terms of scope and density; they’re generously dotted with great monsters to slay, tantalizing mysteries to solve, and personal stories to unfurl."
          }
        ],
        display: true // Set false to hide this section, defaults to true
      };

  const isDark = false;
  if (!blogSection.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main mt-5" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog, i) => {
              return (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}