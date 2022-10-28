import React from "react"
import { Link } from 'react-router-dom';
import "../Styles/About.css"


export default function About() {
  return (
    <div className="sides">
      <div className="left">
        <h3>About Us.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel provident nobis enim vero sit labore. Laborum, doloremque excepturi. Enim deserunt, nisi voluptatem laborum pariatur, aperiam quae vel odio natus blanditiis harum debitis beatae sapiente labore mollitia. Quaerat cupiditate iusto nesciunt illo at quisquam incidunt ipsam rerum velit illum fugit commodi, cumque libero magni sed, ea laudantium. Ex, dicta quibusdam?
        </p>
        <button>
         <Link to="/about" className="child">Lorem, ipsum.</Link>
        </button>
      </div>

      <div className="right">
        <img src="https://i.pinimg.com/originals/a4/79/26/a479260ef665e51dcaf8e18b20817d7c.jpg" alt=""/>
      </div>
    </div>
  );
}
