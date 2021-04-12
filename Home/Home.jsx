import React, { Component } from "react";
import Nav from "../nav/nav";
import { connect } from "react-redux";
import Axios from "axios";
import "antd/dist/antd.css";
import "./index.css";
import { Carousel } from "antd";
import style from "styled-components";
function onChange(a, b, c) {
  console.log(a, b, c);
}

class Home extends Component {
  render() {
    return (
      <div>
        {/* // <Test /> */}
        <img src={this.props.movieList.hinhAnh} alt="ccc" />
        <p>{this.props.movieList.tenPhim}</p>
        gfgf
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP13&soTrang=1&soPhanTuTrenTrang=5&tuNgay=02%2F02%2F2019&denNgay=02%2F02%2F2020",
    })
      //promise
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_Movie",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  movieList: state.movie.movies,
});
export default connect(mapStateToProps)(Home);
