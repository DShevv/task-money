import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { Container } from "../TaskPage/TaskPage.style";
import AdvantageTable from "./AdvantageTable/AdvantageTable";
import { useTranslation } from "react-i18next";
import { HistoryHeader, HistoryTitle, TextUnit } from "./AdvantagePage.style";

function AdvantagePage() {
  const { t } = useTranslation();

  return (
    <Container style={{ gap: "16px" }}>
      <H1 className={"desktop"}>Статусы</H1>
      <MobileHeader title={"Статусы"} />
      <HistoryHeader>
        <HistoryTitle>{"Статус"}</HistoryTitle>
        <HistoryTitle>{"Сумма депозита (USDT)"}</HistoryTitle>
        <HistoryTitle>{"Задач в день"}</HistoryTitle>
        <HistoryTitle>{"Сумма за задачу (USDT)"}</HistoryTitle>
        <HistoryTitle>{"Ежедневные доход (USDT)"}</HistoryTitle>
        <HistoryTitle>{"Ежемесячный доход (USDT)"}</HistoryTitle>
        <HistoryTitle>{"Годовой доход (USDT)"}</HistoryTitle>
      </HistoryHeader>
      <AdvantageTable
        items={[
          {
            status: "VIP0",
            sumDep: "0",
            tasks: "3",
            sumTask: "1",
            revenue: "3",
            revenueMonth: "20",
            revenueYear: "20",
          },
          {
            status: "VIP1",
            sumDep: "150",
            tasks: "5",
            sumTask: "0.75",
            revenue: "3.75",
            revenueMonth: "112.5 (40 дней)",
            revenueYear: "1368.75",
          },
          {
            status: "VIP2",
            sumDep: "400",
            tasks: "8",
            sumTask: "1.32",
            revenue: "10.56",
            revenueMonth: "316.8 (38 дней)",
            revenueYear: "3854.4",
          },
          {
            status: "VIP3",
            sumDep: "1250",
            tasks: "18",
            sumTask: "1.93",
            revenue: "34.74",
            revenueMonth: "1042 (36 дней)",
            revenueYear: "15680.1",
          },
          {
            status: "VIP4",
            sumDep: "2500",
            tasks: "30",
            sumTask: "2.45",
            revenue: "73.5",
            revenueMonth: "2205 (34 дней)",
            revenueYear: "26827.5",
          },
          {
            status: "VIP5",
            sumDep: "5000",
            tasks: "55",
            sumTask: "2.84",
            revenue: "73.5",
            revenueMonth: "4686 (32 дней)",
            revenueYear: "57013",
          },
          {
            status: "VIP6",
            sumDep: "10000",
            tasks: "70",
            sumTask: "4.76",
            revenue: "333.2",
            revenueMonth: "9996 (30 дней)",
            revenueYear: "121618",
          },
        ]}
      />
      <TextUnit>
        1. Пользователям запрещено регистрировать несколько аккаунтов со
        статусом VIP О для выполнения бесплатных заданий, в противном случае их
        аккаунты будут заморожены. VIP 0 является счетом для практики и
        получения опыта и имеет право на вывод средств только 2 раза (20 USDT в
        сумме). Пользователи со статусом VIP 1 и выше (включая VIP 1)
        действительны в течение 365 дней и могут выводить средства один раз в
        день с минимальной суммой 10 USDT за вывод.
      </TextUnit>
      <TextUnit>
        2. Чтобы стать VIP 1, нужно сделать депозит в 150 USDT. На этом статусе
        будут доступны 5 заданий в день, оплата за задачу 0,75 USDT. Заработок
        составит 3,757 в день, 112,5 USDT в месяц или 1368,75 USDT в год.
      </TextUnit>
      <TextUnit>
        3. Внесите депозит в размере 400 USDT, чтобы стать VIP 2. На этом
        статусе доступны 8 заданий заданий в день, оплата за задачу 1,32 USDT.
        Заработок составит 10,56 USDT в день, 316,8 USDT в месяц или 3854,4 USDT
        в год.
      </TextUnit>
      <TextUnit>
        4. Внесите депозит в размере 1250 USDT, чтобы стать VIP 3. На этом
        статусе доступны 18 заданий в день, 1,93 USDT за задачу, 3,75 USDT в
        день, 1042,2 USDT в месяц или 12 680,1 USDT в год.
      </TextUnit>
      <TextUnit>
        5. Внесите депозит в размере 2500 USDT, чтобы стать VIP 4. На этом
        статусе доступны 30 заданий в день, 2,45 USDT за задачу, 73,5 USDT в
        день, 2205 USDT в месяц или 26 827,5 USDT в год.
      </TextUnit>
      <TextUnit>
        6. Внесите депозит в размере 5000 USDT, чтобы стать VIP 5. На этом
        статусе доступны 55 заданий в день, 2,84 USDT за задачу, 156,2 USDT в
        день, 4686 USDT в месяц или 57 013,7 USDT в год.
      </TextUnit>
      <TextUnit>
        7. Внесите депозит в размере 10 000 USDT, чтобы достигнуть максимального
        VIP 6. На этом статусе доступны 70 заданий в день, оплата за задачу 4,76
        USDT. Заработок составит 333,2 1 в день, 9996 USDT в месяц или 121 618
        USDT в год.
      </TextUnit>
    </Container>
  );
}

export default AdvantagePage;
