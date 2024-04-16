import H1 from "../../components/Typography/H1/H1";
import {
  Container,
  Filters,
  SelectsContainer,
  TasksContainer,
} from "./TaskPage.style";
import Radio from "../../components/Inputs/Radio/Radio";
import { useState } from "react";
import SelectSolid from "../../components/Selects/SelectSolid/SelectSolid";
import Task from "./Task/Task";
import placeholderImg from "../../assets/placeholders/white.png";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import { useTranslation } from "react-i18next";

function TaskPage() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    category: "New",
    type: undefined,
    target: "Social network",
  });

  const createOnChange = (filter) => {
    return (value) => {
      setFilters({ ...filters, [filter]: value });
    };
  };

  return (
    <Container>
      <H1 className={"desktop"}>{t("Tasks")}</H1>
      <MobileHeader title={t("Tasks")} />
      <Filters>
        <Radio
          items={[t("New"), t("Taken"), t("Completed")]}
          name="category"
          value={filters.category}
          onChange={createOnChange("category")}
        />
        <SelectsContainer>
          <SelectSolid
            items={[t("Subscribe"), t("Like"), t("Repost")]}
            label={"Type"}
            style={{ width: "125px" }}
          />
          <SelectSolid
            items={[t("SocialNetwork"), t("Youtube")]}
            value={"SocialNetwork"}
            style={{ width: "190px" }}
          />
        </SelectsContainer>
      </Filters>
      <TasksContainer>
        <Task
          to={"1"}
          image={placeholderImg}
          title={t("SubscribeTo")}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={t("SubscribeTo")}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={t("SubscribeTo")}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={t("SubscribeTo")}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={t("SubscribeTo")}
          text={"+5 usd"}
        />
      </TasksContainer>
    </Container>
  );
}

export default TaskPage;
