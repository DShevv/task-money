import SideBarLink from "../../../components/Links/SideBarLink/SideBarLink";
import { Container, LinksList } from "./NavBar.style";
import UserInfo from "./UserInfo/UserInfo";
import {
  SvgChallenge,
  SvgProgress,
  SvgRating,
  SvgSettings,
  SvgTasks,
  SvgWallet,
} from "../../../assets/icons/svgs";
import SelectBordered from "../../../components/Selects/SelectBordered/SelectBordered";

function NavBar() {
  return (
    <Container>
      <UserInfo />
      <LinksList>
        <li>
          <SideBarLink to="/tasks" title="Tasks" count={100}>
            <SvgTasks />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/challenge" title="Challenge" count={0}>
            <SvgChallenge />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/wallet" title="Wallet" count={9}>
            <SvgWallet />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/rating" title="Rating">
            <SvgRating />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/progress" title="Progress">
            <SvgProgress />
          </SideBarLink>
        </li>
        <li className="desktop">
          <SideBarLink to="/settings" title="Settings" className={"desktop"}>
            <SvgSettings />
          </SideBarLink>
        </li>
      </LinksList>
      <SelectBordered
        className="desktop"
        items={["En", "Ge"]}
        style={{ marginTop: "16px" }}
      />
    </Container>
  );
}

export default NavBar;
