import SideBarLink from "../../../components/Links/SideBarLink/SideBarLink";
import { Container, LinksList } from "./NavBar.style";
import { UserInfo } from "./UserInfo/UserInfo";
import {
  SvgChallenge,
  SvgProgress,
  SvgRating,
  SvgSettings,
  SvgTasks,
  SvgWallet,
} from "../../../assets/icons/svgs";
import SelectBordered from "../../../components/Selects/SelectBordered/SelectBordered";
import { useState } from "react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (value) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
    localStorage.setItem("lang", value);
  };

  return (
    <Container>
      <UserInfo />
      <LinksList>
        <li>
          <SideBarLink to="/tasks" title={t("Tasks")} count={100}>
            <SvgTasks />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/challenge" title={t("Challenge")} count={0}>
            <SvgChallenge />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/wallet" title={t("Wallet")} count={9}>
            <SvgWallet />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/rating" title={t("Rating")}>
            <SvgRating />
          </SideBarLink>
        </li>
        <li>
          <SideBarLink to="/progress" title={t("Progress")}>
            <SvgProgress />
          </SideBarLink>
        </li>
        <li className="desktop">
          <SideBarLink
            to="/settings"
            title={t("Settings")}
            className={"desktop"}
          >
            <SvgSettings />
          </SideBarLink>
        </li>
      </LinksList>
      <SelectBordered
        className="desktop"
        items={["Ru", "En", "De"]}
        style={{ marginTop: "16px" }}
        value={selectedLanguage}
        onChange={chooseLanguage}
      />
    </Container>
  );
}

export default NavBar;
