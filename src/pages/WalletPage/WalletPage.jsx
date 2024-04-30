import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { Container } from "../TaskPage/TaskPage.style";
import { useState } from "react";
import {
  Balance,
  Controls,
  ControlsButtons,
  HistoryFilters,
  HistoryHeader,
  HistoryTitle,
} from "./WalletPage.style";
import LinkButtonMedium from "../../components/Links/LinkButtonMedium/LinkButtonMedium";
import SelectSolid from "../../components/Selects/SelectSolid/SelectSolid";
import HistoryTable from "./HistoryTable/HistoryTable";
import { useTranslation } from "react-i18next";

function WalletPage() {
  const { t } = useTranslation();

  const [filters, setFilters] = useState({
    status: undefined,
    method: undefined,
  });

  const createOnChange = (filter) => {
    return (value) => {
      setFilters({ ...filters, [filter]: value });
    };
  };

  return (
    <Container style={{ gap: "16px" }}>
      <H1 className={"desktop"}>{t("Wallet")}</H1>
      <MobileHeader title={t("Wallet")} />
      <Controls>
        <Balance>
          <span>{t("YourBalance")}:</span>
          <span>1000 USD</span>
        </Balance>
        <ControlsButtons>
          <LinkButtonMedium to={"topup"}>{t("Topup")}</LinkButtonMedium>
          <LinkButtonMedium to={"withdraw"}>{t("Withdraw")}</LinkButtonMedium>
        </ControlsButtons>
      </Controls>
      <HistoryHeader>
        <HistoryTitle>{t("TrHistory")}</HistoryTitle>
        <HistoryFilters className="desktop">
          <SelectSolid
            items={["Success", "Pending", "Error"]}
            value={filters.status && filters.status}
            label={"Status"}
            style={{ borderRadius: "0", maxWidth: "180px" }}
            onChange={createOnChange("status")}
          />
          <SelectSolid
            items={["Visa", "PayPal", "MasterCard"]}
            value={filters.method && filters.method}
            label={"Method"}
            style={{ borderRadius: "0", maxWidth: "180px" }}
            onChange={createOnChange("method")}
          />
        </HistoryFilters>
      </HistoryHeader>
      <HistoryTable
        items={[
          {
            status: t("Topup"),
            method: "Paypal",
            sum: "100 USDT",
            to: "topup/1",
          },
          {
            status: t("Topup"),
            method: "Paypal",
            sum: "100 USDT",
            to: "topup/1",
          },
          {
            status: t("Topup"),
            method: "Paypal",
            sum: "100 USDT",
            to: "topup/1",
          },
        ]}
      />
    </Container>
  );
}

export default WalletPage;
