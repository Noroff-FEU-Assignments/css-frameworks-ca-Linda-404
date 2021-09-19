import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import tabImageOne from "./tabimages/tab-1.jpg"
import tabImageTwo from "./tabimages/tab-2.jpg"
import tabImageThree from "./tabimages/tab-3.jpg"

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
        <Tab eventKey="one" title="First">
            <img
                className="d-block w-10"
                src={tabImageOne}
                alt="First slide"
                />
            <div className="tab__content__text">
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <div style={{ backgroundImage: "url(~/Tabimages/tab-1.jpg)"}}></div>
                <div className="tab__content__social">
                    <div className="tab__content__social__item">SHARE</div>
                    <div className="tab__content__social__item"><i class="fab fa-facebook-f"></i></div> 
                    <div className="tab__content__social__item"><i class="fab fa-twitter"></i></div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="two" title="Second">
            <img
                className="d-block w-10"
                src={tabImageTwo}
                alt="Third slide"
                />
            <div className="tab__content__text">
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <div className="tab__content__social">
                    <div className="tab__content__social__item">SHARE</div>
                    <div className="tab__content__social__item"><i class="fab fa-facebook-f"></i></div> 
                    <div className="tab__content__social__item"><i class="fab fa-twitter"></i></div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="three" title="Third">
            <img
                className="d-block w-10"
                src={tabImageThree}
                alt="Third slide"
                />
            <div className="tab__content__text">
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <div className="tab__content__social">
                    <div className="tab__content__social__item">SHARE</div>
                    <div className="tab__content__social__item"><i class="fab fa-facebook-f"></i></div> 
                    <div className="tab__content__social__item"><i class="fab fa-twitter"></i></div>
                </div>
            </div>
        </Tab>
    </Tabs>
  )
}

export default ContentTabs
