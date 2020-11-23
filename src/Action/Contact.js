import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        {/* <p>Nous contacter</p> */}
        <div>
          <img
            src="https://cdn.icon-icons.com/icons2/790/PNG/128/fb_icon-icons.com_65434.png
              "
            alt="Nous rejoindre sur facebook"
            onClick={()=>alert("Nous rejoindre sur facebook")}
          />
          <img
            src="https://cdn.icon-icons.com/icons2/791/PNG/128/instagram_f_icon-icons.com_65485.png
              "
            alt="Nous rejoindre sur instagram"
            onClick={()=>alert("Nous rejoindre sur instagram")}
          />
          <img
            src="https://cdn.icon-icons.com/icons2/2248/PNG/128/phone_in_talk_icon_137309.png
              "
            alt="Pour le service client
            Du lundi au samedi de 8h à 21h
            Service et appel gratuits"

            onClick={()=>alert("Pour le service client - Du lundi au samedi de 8h à 21h - Service et appel gratuits")}
          />
          <img
            src="https://cdn.icon-icons.com/icons2/1130/PNG/128/socialemailcircularbutton_80177.png
              "
            alt="Nous contacter par E-mail"
            onClick={()=>alert("Nous contacter par E-mail")}
          />
        </div>
      </div>
    );
  }
}
