import { useTranslation } from "react-i18next";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import {
  Caption,
  Container,
  InfoItem,
  ProgressInfo,
} from "./ProgressPage.style";
import ProgressTable from "./ProgressTable/ProgressTable";

function ProgressPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <H1 className={"desktop"}>{t("Progress")}</H1>
      <MobileHeader title={t("Progress")} />
      <ProgressInfo>
        <InfoItem>
          <span>Status account:</span>
          <span>Verified</span>
        </InfoItem>
        <InfoItem>
          <span>Balance:</span>
          <span>100 USD</span>
        </InfoItem>
        <InfoItem>
          <span>Completed task:</span>
          <span>100</span>
        </InfoItem>
      </ProgressInfo>
      <Caption>
        Lorem ipsum dolor sit amet consectetur. Gravida turpis hac magna
        senectus. Pellentesque lorem blandit nam curabitur. Ipsum nascetur diam
        purus tincidunt sed eu diam massa risus.
      </Caption>
      <ProgressTable
        items={[
          {
            title: "Lorem ipsum dolor sit amet consectetur.",
            count: 10,
            goal: 50,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur.",
            count: 45,
            goal: 50,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur.",
            count: 50,
            goal: 50,
          },

          {
            title: "Lorem ipsum dolor sit amet consectetur.",
            count: 23,
            goal: 50,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur.",
            count: 23,
            goal: 50,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur.",
            count: 50,
            goal: 50,
          },
        ]}
      />
    </Container>
  );
}

export default ProgressPage;
