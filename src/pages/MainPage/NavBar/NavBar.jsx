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
          <SideBarLink to="/wallet" title="Wallet">
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
        <li>
          <SideBarLink to="/settings" title="Settings">
            <SvgSettings />
          </SideBarLink>
        </li>
      </LinksList>
    </Container>
  );
}

export default NavBar;
