import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <img src="assets/img/tools/docker.png" alt="tools docker" />
        </li>
        <li className="item">
          <img src="assets/img/tools/django.png" alt="tools django" />
        </li>
        <li className="item">
          <img src="assets/img/tools/postgresql.png" alt="tools postgresql" />
        </li>
        <li className="item">
          <img src="assets/img/tools/mongodb.png" alt="tools mongodb" />
        </li>
        <li className="item">
          <img src="assets/img/tools/rabbitmq.png" alt="tools rabbitmq" />
        </li>
        <li className="item">
          <img src="assets/img/tools/fastapi.png" alt="tools fastapi" />
        </li>
        <li className="item">
          <img src="assets/img/tools/react.png" alt="tools react" />
        </li>
        <li className="item">
          <img src="assets/img/tools/flask.png" alt="tools flask" />
        </li>
        <li className="item">
          <img src="assets/img/tools/websocket.png" alt="tools websocket" />
        </li>
        <li className="item">
          <img src="assets/img/tools/uipath.png" alt="tools uipath" />
        </li>
        <li className="item">
          <img src="assets/img/tools/azure-devops.png" alt="tools azure-devops" />
        </li>
        <li className="item">
          <img src="assets/img/tools/git.png" alt="tools git" />
        </li>
        <li className="item">
          <img src="assets/img/tools/lean-six-sigma.png" alt="tools lean-six-sigma" />
        </li>
        <li className="item">
          <img src="assets/img/tools/agile.png" alt="tools agile" />
        </li>
        <li className="item">
          <img src="assets/img/tools/redux.png" alt="tools redux" />
        </li>
        <li className="item">
          <img src="assets/img/tools/node.png" alt="tools node" />
        </li>
      </Slider>
    </ul>
  );
}
