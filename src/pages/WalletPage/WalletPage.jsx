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
import ButtonMedium from "../../components/Buttons/ButtonMedium/ButtonMedium";
import SelectSolid from "../../components/Selects/SelectSolid/SelectSolid";
import HistoryTable from "./HistoryTable/HistoryTable";

function WalletPage() {
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
      <H1 className={"desktop"}>Wallet</H1>
      <MobileHeader title={"Wallet"} />
      <Controls>
        <Balance>
          <span>Your balance:</span>
          <span>1000 USD</span>
        </Balance>
        <ControlsButtons>
          <ButtonMedium>Top up</ButtonMedium>
          <ButtonMedium>Withdraw</ButtonMedium>
        </ControlsButtons>
      </Controls>
      <HistoryHeader>
        <HistoryTitle>Transaction history</HistoryTitle>
        <HistoryFilters className="desktop">
          <SelectSolid
            items={["Success", "Pending", "Error"]}
            value={filters.status}
            label={"Status"}
            style={{ borderRadius: "0", maxWidth: "180px" }}
            onChange={createOnChange("status")}
          />
          <SelectSolid
            items={["Visa", "PayPal", "MasterCard"]}
            value={filters.method}
            label={"Method"}
            style={{ borderRadius: "0", maxWidth: "180px" }}
            onChange={createOnChange("method")}
          />
        </HistoryFilters>
      </HistoryHeader>
      <HistoryTable
        items={[
          { status: "Status", method: "Method", sum: "Sum", to: "1" },
          { status: "Status", method: "Method", sum: "Sum", to: "1" },
          { status: "Status", method: "Method", sum: "Sum", to: "1" },
          { status: "Status", method: "Method", sum: "Sum", to: "1" },
          { status: "Status", method: "Method", sum: "Sum", to: "1" },
        ]}
      />
    </Container>
  );
}

export default WalletPage;
