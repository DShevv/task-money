import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { Container } from "../TaskPage/TaskPage.style";
import RevenueTable from "./RevenueTable/RevenueTable";
import { useTranslation } from "react-i18next";
import {
  HistoryHeader,
  HistoryTitle,
  SubTitle,
  TextUnit,
  Title,
} from "./SingleChallengePage.style";
import SingleRevenueTable from "./SingleRevenueTable/SingleRevenueTable";

function SingleChallengePage() {
  const { t } = useTranslation();

  return (
    <Container style={{ gap: "16px" }}>
      <H1 className={"desktop"}>Правила</H1>
      <MobileHeader title={"Правила"} />
      <Title>1 мая международный день труда</Title>
      <TextUnit>
        Чтобы наградить всех работников C Star за их усердную работу во время
        праздника, мы вводим ограниченное по времени вознаграждение
      </TextUnit>
      <HistoryHeader>
        <HistoryTitle>{""}</HistoryTitle>
        <HistoryTitle>{"Основные вознаграждения"}</HistoryTitle>
        <HistoryTitle>{"Дополнительные вознаграждения"}</HistoryTitle>
      </HistoryHeader>
      <RevenueTable
        items={[
          {
            task: "Пригласите присоединиться VIP3",
            mainRev: "Получите 200 USDT",
            bonusRev: "180 (380 USDT)",
          },
          {
            task: "Пригласите присоединиться VIP4",
            mainRev: "Получите 400 USDT",
            bonusRev: "350 (750 USDT)",
          },
          {
            task: "Пригласите присоединиться VIP5",
            mainRev: "Получите 800 USDT",
            bonusRev: "700 (1500 USDT)",
          },
          {
            task: "Пригласите присоединиться VIP6",
            mainRev: "Получите 1600 USDT",
            bonusRev: "1500 (3100 USDT)",
          },
        ]}
      />
      <SubTitle>Вознаграждение руководителям команд</SubTitle>
      <SingleRevenueTable
        items={[
          "Добавьте 3 сотрудников в команду и вы получите вознаграждение в размере 150 USDT",
          "Добавьте 6 сотрудников в команду и вы получите вознаграждение в размере 300 USDT",
          "Добавьте 10 сотрудников в команду и вы получите вознаграждение в размере 500 USDT",
          "Добавьте 20 сотрудников в команду и вы получите вознаграждение в размере 1000 USDT",
          "Добавьте 50 сотрудников в команду и вы получите вознаграждение в размере 3000 USDT",
          "Добавьте 100 сотрудников в команду и вы получите вознаграждение в размере 6000 USDT",
        ]}
      />
      <TextUnit>
        Рассчитываются сотрудники только от уровня VIP3 и выше, которые
        присоединились в этот день (учитываются уровни L1, L2 и 13).
      </TextUnit>
      <TextUnit>
        Если вы подходите под все вышеуказанные условия, свяжитесь с менеджером,
        чтобы подать заявление на получение вознаграждения.
      </TextUnit>
    </Container>
  );
}

export default SingleChallengePage;
