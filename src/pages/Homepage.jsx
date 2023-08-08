import React from 'react'
import Header from '../components/Header'
import '../styles/home.css'
import imggg from '../assets/imgone.png'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <div className="d-lg-flex justify-content-around align-items-center">
            <div className="home-manage">
              <h3>
                Manage your Tasks on <br />{" "}
                <span className="duty">TaskDuty</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et,
                at platea tempus duis non eget. Hendrerit tortor fermentum
                bibendum mi nisl semper porttitor. Nec accumsan.
              </p>
              <Link to="/all" className="text-decoration-none">
                <button>Go to My Tasks</button>
              </Link>
            </div>
            <div className="home-img">
              <img src={imggg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage