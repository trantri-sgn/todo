import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="grid">
          <div className="movie-header">
            <div className="movie-header-logo">
              <a href="">
                <img
                  src="https://tix.vn/app/assets/img/icons/web-logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="movie-header-items">
              <a href="">Lịch Chiếu</a>
              <a href="">Cụm Rạp </a>
              <a href="">Tin Tức</a>
              <a href="">Ứng Dụng</a>
            </div>
            <div className="movie-header-items">
              <a href="">
                <i class="fa fa-user"></i>Đăng Nhập
              </a>
              <a href="">Khu vức</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
