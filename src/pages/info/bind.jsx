/*
 * 信息绑定：
 * 1、信息发送至服务器
 * 2、信息保存至本地
 * 3、跳转至查询主页面
 */
import React from "react";
import Header from "../../components/layout/Header";
import InfoBindForm from "../../components/form/InfoBind";
import Footer from "../../components/layout/Footer";
import { Link } from "@material-ui/core";
import infoByToken from "../../model/getinfoBytoken";

class InfoBin extends React.Component {
  // 曾经绑定过信息，一键登录
  getInfoByToken = () => {
    infoByToken();
    this.props.history.replace('/user');
  };

  render() {
    return (
      <div>
        <Header title="信息绑定" />
        <InfoBindForm option="绑定" history={this.props.history} />
        <div className="bind-login">
          <span>已绑定过？</span>
          <Link onClick={this.getInfoByToken}>点击这里登录</Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default InfoBin;