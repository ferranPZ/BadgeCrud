import React from "react";
import confLogo from "../images/cordillera.jpg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img
            className="Badge__img"
            src={confLogo}
            alt="Logo de la conferencia"
          />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatar} alt="avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3> {this.props.jobTitle} </h3>
          <div> {this.props.twitter} </div>
        </div>
        <div className="Badge__footer"> {this.props.confName}</div>
      </div>
    );
  }
}

export default Badge;
