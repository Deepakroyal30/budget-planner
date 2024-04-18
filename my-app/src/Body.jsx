import React from "react";
import "./Body.css";

function Body() {
  return (
    <div>
      <section>
        <img
          src="https://images.unsplash.com/photo-1531973968078-9bb02785f13d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="restaraunt"
        />
        <div className="Heading">
          <h1>
            Let us Find Your <br /> Forever Food.
          </h1>
        </div>
        <div className="para2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          in!
        </div>
        <div className="buttons">
          <button className="first">Search Now</button>{" "}
          <button className="second">Know More</button>
        </div>
      </section>
      <div className="boxco">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="home"
          />
        </div>
        <div className="right">
          <p className="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla id,
            cupiditate blanditiis officiis illum cumque minima obcaecati
            quibusdam sunt beatae?
          </p>
          <br />
          <br />
          <p
            className="light
          "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, dignissimos. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Deleniti odio ratione minus, earum mollitia
            incidunt magni nemo dolore eius vitae.{" "}
          </p>
          <br />
          <br />
          <button className="getin">Get in Touch</button>
        </div>
      </div>

      <div className="magazineco">
        <div className="one">
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </aside>
          <div className="ceo">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <h6>Gladdis lennon</h6>
            <p>Head of ceo</p>
          </div>
        </div>
        <div className="one">
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </aside>
          <div className="ceo">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <h6>Gladdis lennon</h6>
            <p>Head of ceo</p>
            
          </div>
        </div>
        <div className="one">
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </aside>
          <div className="ceo">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <h6>Gladdis lennon</h6>
            <p>Head of ceo</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Body;
