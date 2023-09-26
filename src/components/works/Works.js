import React from "react";
import "./works.css";
import img1 from "../../assets/portfolio-1.png";
import img2 from "../../assets/portfolio-2.png";
import img3 from "../../assets/portfolio-3.png";
import img4 from "../../assets/portfolio-4.png";
import img5 from "../../assets/portfolio-5.png";
import img6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae
        earum eligendi minus ducimus sed repellat vero nesciunt nostrum? Dolores
        accusamus totam cupiditate fugit hic reprehenderit voluptate
      </span>
      <div className="worksImgs">
        <img src={img1} alt="img" className="worksImg" />
        <img src={img2} alt="img" className="worksImg" />
        <img src={img3} alt="img" className="worksImg" />
        <img src={img4} alt="img" className="worksImg" />
        <img src={img5} alt="img" className="worksImg" />
        <img src={img6} alt="img" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
