import "./about.css";
import image from "../../assets/About_pic.JPG";
import { Skill, Education, Experience } from "../../data";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTapChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div id="about">
      <div className="containter">
        <div className="row">
          <div className="about_col_1">
            <img src={image} alt="" />
          </div>
          <div className="about_col_2">
            <h1>About Me</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem, similique accusantium rem quis voluptatum. Qui
              reprehenderit quis earum sunt possimus, labore placeat quisquam
              officia unde cum, delectus illum quia?
            </p>
            <menu>
              <li
                onClick={() => handleTapChange(1)}
                className={activeTab == 1 ? "active-tab" : ""}
              >
                Skill
              </li>
              <li
                onClick={() => handleTapChange(2)}
                className={activeTab == 2 ? "active-tab" : ""}
              >
                Experience
              </li>
              <li
                onClick={() => handleTapChange(3)}
                className={activeTab == 3 ? "active-tab" : ""}
              >
                Education
              </li>
            </menu>

            <div className={activeTab === 1 ? "active-content" : "tab_content"}>
              <ul>
                <li>
                  <span>{Skill[0].title}</span>
                  <br />
                  {Skill[0].decription}
                </li>
                <li>
                  <span>{Skill[1].title}</span>
                  <br />
                  {Skill[1].decription}
                </li>
                <li>
                  <span>{Skill[2].title}</span>
                  <br />
                  {Skill[2].decription}
                </li>
              </ul>
            </div>

            <div className={activeTab === 2 ? "active-content" : "tab_content"}>
              <ul>
                <li>
                  <span>{Experience[0].title}</span>
                  <br />
                  {Experience[0].decription}
                </li>
                <li>
                  <span>{Experience[1].title}</span>
                  <br />
                  {Experience[1].decription}
                </li>
                <li>
                  <span>{Experience[2].title}</span>
                  <br />
                  {Experience[2].decription}
                </li>
              </ul>
            </div>

            <div className={activeTab === 3 ? "active-content" : "tab_content"}>
              <ul>
                <li>
                  <span>{Education[0].title}</span>
                  <br />
                  {Education[0].decription}
                </li>
                <li>
                  <span>{Education[1].title}</span>
                  <br />
                  {Education[1].decription}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
