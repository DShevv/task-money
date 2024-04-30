import { useTranslation } from "react-i18next";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import {
  Caption,
  Container,
  InfoContainer,
  InfoItem,
  ProgressInfo,
  ProgressLink,
} from "./ProgressPage.style";
import ProgressTable from "./ProgressTable/ProgressTable";
import { SvgInfo } from "../../assets/icons/svgs";

function ProgressPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <H1 className={"desktop"}>{t("Progress")}</H1>
      <MobileHeader title={t("Progress")} />
      <ProgressInfo>
        <InfoItem>
          <span>{t("StatusAcc")}:</span>
          <InfoContainer>
            {"Vip1"}
            <ProgressLink to={"/progress/info"}>
              <SvgInfo />
            </ProgressLink>
          </InfoContainer>
        </InfoItem>
        <InfoItem>
          <span>{t("Balance")}:</span>
          <span>100 USD</span>
        </InfoItem>
        <InfoItem>
          <span>{t("CompletedTask")}:</span>
          <span>100</span>
        </InfoItem>
      </ProgressInfo>
      <Caption></Caption>
      <ProgressTable
        items={[
          {
            title: "Vip1",
            count: 150,
            goal: 150,
          },
          {
            title: "Vip2",
            count: 170,
            goal: 400,
          },
          {
            title: "Vip3",
            count: 170,
            goal: 1250,
          },
          {
            title: "Vip4",
            count: 170,
            goal: 2500,
          },
          {
            title: "Vip5",
            count: 170,
            goal: 5000,
          },
          {
            title: "Vip6",
            count: 170,
            goal: 10000,
          },
        ]}
      />
    </Container>
  );
}

export default ProgressPage;
