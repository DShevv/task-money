import H1 from "../Typography/H1/H1";
import { Container, Controls } from "./MobileHeader.style";
import { UserImage } from "../../pages/MainPage/NavBar/UserInfo/UserInfo.style";
import placeholderImage from "./../../assets/placeholders/gray.png";
import { NavLink } from "react-router-dom";
import SelectSolidLang from "../Selects/SelectSolidLang/SelectSolidLang";
import { useState } from "react";
import i18n from "../../i18n";

function MobileHeader({ title, className, ...other }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (value) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
    localStorage.setItem("lang", value);
  };

  return window.screen.width <= 1024 ? (
    <Container className={`mobile ${className}`} {...other}>
      <H1>{title}</H1>

      <Controls>
        <SelectSolidLang
          className={"mobile lang"}
          items={["Ru", "En", "De"]}
          value={selectedLanguage}
          onChange={chooseLanguage}
          style={{ marginTop: "0px" }}
        />
        <NavLink to={"/settings"}>
          <UserImage src={placeholderImage} alt={"username"} />
        </NavLink>
      </Controls>
    </Container>
  ) : (
    ""
  );
}

export default MobileHeader;
