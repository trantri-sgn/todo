import React, { Component } from "react";
import axios from "axios";

export default class test extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    // pending > resolved (success) OR rejected (failure)
    const { data: posts } = await axios.get(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02"
    );
    this.setState({ posts });
  }
  render() {
    return (
      <React-Fragment>
        <div>
          {this.state.posts.map(post => (
            <div id="demo" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
              </ul>
              {/* The slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={post.hinhAnh} alt="Los Angeles" />
                </div>
              </div>
              {/* Left and right controls */}
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          ))}
        </div>
      </React-Fragment>
    );
  }
}
