import React from "react";
import img1 from "./Images/img1.jpeg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import "./Home.css";
function Home() {
  return (
    <>
      <main>
        <div className="bodyImages">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </main>
      <section>
        <div>
          <div className="Featured">Featured</div>
          <div className="title">Stories </div>
          <div className="detailes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
            ut odit voluptas, molestiae accusamus aut repellendus impedit. Quasi
            temporibus ea sit odio tenetur quaerat laudantium? A, totam minus.
            Nesciunt?
          </div>
        </div>
        <div>
          <div className="Featured">Featured</div>
          <div className="title">Manuscripts </div>
        </div>
        <div>
          <div className="Featured">Featured</div>
          <div className="title">Paintings </div>
        </div>
      </section>
    </>
  );
}

export default Home;
