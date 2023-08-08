import React, { Component } from "react";
import "./phoneframe.css";
import Button from "@mui/joy/Button";
import { ChakraProvider, IconButton } from "@chakra-ui/react";
import { AiFillHome, AiOutlineMail, AiTwotoneExperiment } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import pfp from "../../../resources/images/ricardopfp.png";
import ReactCountryFlag from "react-country-flag";
import { BsGithub, BsLinkedin } from "react-icons/bs";

class PhoneframeFilled extends Component {
  render() {
    return (
      <div className={"floatingCard"}>
        <div className={"phoneContent"}>
          {/* NOTCH DECORATION */}
          <div className={"notch"}></div>
          {/* UPPER HALF */}
          <div className={"upperHalf center-content flex-vertical"}>
            <img
              className={"pfp"}
              style={{ marginBottom: "10px" }}
              src={pfp}
              alt="My pfp"
            />
            <text className={"nameText"}>Gabriel Torres</text>
            <text className={"subText"}>Mobile & Web Developer</text>
          </div>
          {/* BELOW HALF */}
          <div className={"belowHalf"}>
            {/* WHITE DECORATION */}
            <div className={"trickyWhiteDecoration"}></div>
            <div
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginBottom: "15px",
              }}
            >
              <text className={"bodyText littleTopOffset"}>
                Passionate Mobile Developer with interest in Web-Developing.
                Providing clean interfaces with intelligent solutions.
              </text>
              <br></br>
              <text className={"bodyText littleTopOffset "}>
                Eager to learn new knowledge.
              </text>
            </div>

            {/* ENGLISH FLAG */}
            <div className={"vertical-center"}>
              <ReactCountryFlag className={"iconEmail"} countryCode="US" svg />
              <text
                className={"bodyText text_bold "}
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                English:
              </text>
              <text
                className={"bodyText "}
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                Advanced
              </text>
            </div>

            {/* EMAIL */}
            <div
              className={"flex-horizontal vertical-center"}
              style={{ marginTop: "25px" }}
            >
              <AiOutlineMail className={"iconEmail"}></AiOutlineMail>
              <text className={"bodyText"} style={{ marginLeft: "5px" }}>
                passioncodingstar31@gmail.com
              </text>
            </div>

            <div className={"socialIcons flexLateral"}>
              <a
                href="https://github.com/kingstar31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className={"socialIcon"}></BsGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneframeFilled;