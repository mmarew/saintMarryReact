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
        <div>Stories</div>
        <div>Manuscripts</div>
        <div>Paintings</div>
      </section>
    </>
  );
}

export default Home;
