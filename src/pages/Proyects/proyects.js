import React, { Component } from "react";
import "./proyects.css";
import ProjectChipBar from "../../components/shared/projectChip/projectChipBar";
import wedraw from "../../resources/images/wedraw.png";
import vili from "../../resources/images/vili.png";
import hk from "../../resources/images/hk.png";

class Proyects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
  handleWindowResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const projectsData = [
      {
        title: "WeDraw (BETA)",
        desc: "Chat & Drawing App for groups of users.",
        uri: wedraw,
        link: "https://github.com/ricardogdz6/WeDraw#readme",
      },
    ];

    return (
      <div
        id="third-page"
        className={"ProyectContainer flex-vertical"}
        style={{ overflow: "hidden" }}
      >
        <div className={"ProyectSpacer"}></div>

        <text className={"bodyText6 center-self"}>Projects</text>

        {projectsData.map((project, index) => (
          <ProjectChipBar
            index={index}
            title={project.title}
            desc={project.desc}
            uri={project.uri}
            link={project.link}
            windowWidth={this.state.windowWidth}
          />
        ))}
      </div>
    );
  }
}

export default Proyects;
