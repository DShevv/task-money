import H1 from "../../components/Typography/H1/H1";
import {
  Container,
  Filters,
  SelectsContainer,
  TasksContainer,
} from "./TaskPage.style";
import Radio from "../../components/Inputs/Radio/Radio";
import { useEffect, useState } from "react";
import SelectSolid from "../../components/Selects/SelectSolid/SelectSolid";
import Task from "./Task/Task";
import placeholderImg from "../../assets/placeholders/white.png";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import { useTranslation } from "react-i18next";
import TaskService from "../../services/TaskService";
import i18n from "../../i18n";
import toast from "react-hot-toast";
import Notification from "../../components/Notification/Notification";
import { observer } from "mobx-react-lite";

export const TaskPage = observer(() => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    category: "New",
    type: undefined,
    target: undefined,
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  const fetchTasks = async () => {
    const res = await TaskService.getAllTasks(
      1,
      filters.target,
      filters.type,
      filters.category
    );

    if (res.status !== 200) {
      toast.custom((toa) => (
        <Notification
          toa={toa}
          text={[res.response.data.detail]}
          status={res.response.status}
        />
      ));
    }

    setTasks(res.data);
  };

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
          items={["New", "In Progress", "On Review", "Completed"]}
          name="category"
          value={filters.category}
          onChange={createOnChange("category")}
        />
        <SelectsContainer>
          <SelectSolid
            items={["Subscribe", "Like", "Repost"]}
            label={"Type"}
            style={
              i18n.language !== "Ru" ? { width: "125px" } : { width: "210px" }
            }
            onChange={createOnChange("type")}
          />
          <SelectSolid
            items={["Facebook", "Youtube"]}
            label={"SocialNetwork"}
            style={{ width: "190px" }}
            onChange={createOnChange("target")}
          />
        </SelectsContainer>
      </Filters>
      <TasksContainer>
        {tasks &&
          tasks.map((elem) => (
            <Task
              key={elem.id}
              to={elem.id}
              image={placeholderImg}
              title={`${t("SubscribeTo")} ${t(elem.network)}`}
              text={`+${elem.price} usd`}
            />
          ))}
      </TasksContainer>
    </Container>
  );
});
