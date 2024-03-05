import H1 from "../Typography/H1/H1";
import { Container, Controls } from "./MobileHeader.style";
import { UserImage } from "../../pages/MainPage/NavBar/UserInfo/UserInfo.style";
import placeholderImage from "./../../assets/placeholders/gray.png";
import SelectSolid from "../Selects/SelectSolid/SelectSolid";
import { NavLink } from "react-router-dom";

function MobileHeader({ title }) {
  return (
    <Container className="mobile">
      <H1>{title}</H1>

      <Controls>
        <SelectSolid
          className={"mobile lang"}
          items={["En", "Ge"]}
          value={"En"}
          style={{ marginTop: "0px" }}
        />
        <NavLink to={"/settings"}>
          <UserImage src={placeholderImage} alt={"username"} />
        </NavLink>
      </Controls>
    </Container>
  );
}

export default MobileHeader;
