import Radio from "../../components/Inputs/Radio/Radio";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import {
  BonusContainer,
  BonusValue,
  Caption,
  Container,
} from "./ChallengePage.style";
import { useState } from "react";
import ChallengeTable from "./ChallengeTable/ChallengeTable";
import placeholderImage from "../../assets/placeholders/gray.png";
import { useTranslation } from "react-i18next";

function ChallengePage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("Dally");

  return (
    <Container>
      <H1 className={"desktop"}>{t("Challenge")}</H1>
      <MobileHeader title={t("Challenge")} />
      <Radio
        items={["Dally", "Weekly", "Monthly"]}
        name={"period"}
        value={filter}
        onChange={(value) => setFilter(value)}
      />
      <BonusContainer>
        <BonusValue>+15%</BonusValue>
        <span>
          {t("ChallengePage.Total")} <br />
          {t("ChallengePage.Extra")}
        </span>
      </BonusContainer>
      <Caption>
        Lorem ipsum dolor sit amet consectetur. Gravida turpis hac magna
        senectus. Pellentesque lorem blandit nam curabitur. Ipsum nascetur diam
        purus tincidunt sed eu diam massa risus.
      </Caption>
      <ChallengeTable
        items={[
          {
            image: placeholderImage,
            revenue: "+5 %",
            text: "Lorem ipsum dolor sit amet consectetur.",
            count: 23,
            goal: 50,
          },
          {
            image: placeholderImage,
            revenue: "+5 %",
            text: "Lorem ipsum dolor sit amet consectetur.",
            count: 23,
            goal: 50,
          },
          {
            image: placeholderImage,
            revenue: "+5 %",
            text: "Lorem ipsum dolor sit amet consectetur.",
            count: 50,
            goal: 50,
          },
        ]}
      />
    </Container>
  );
}

export default ChallengePage;
