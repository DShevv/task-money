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

function TaskPage() {
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
      <H1 className={"desktop"}>Tasks</H1>
      <MobileHeader title={"Tasks"} />
      <Filters>
        <Radio
          items={["New", "Taken", "Completed"]}
          name="category"
          value={filters.category}
          onChange={createOnChange("category")}
        />
        <SelectsContainer>
          <SelectSolid
            items={["Subscribe", "Like", "Repost"]}
            label="Type"
            style={{ width: "125px" }}
          />
          <SelectSolid
            items={["Social network", "Youtube"]}
            value={"Social network"}
            style={{ width: "190px" }}
          />
        </SelectsContainer>
      </Filters>
      <TasksContainer>
        <Task
          to={"1"}
          image={placeholderImg}
          title={"Subscribe to the channel"}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={"Subscribe to the channel"}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={"Subscribe to the channel"}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={"Subscribe to the channel"}
          text={"+5 usd"}
        />
        <Task
          to={"1"}
          image={placeholderImg}
          title={"Subscribe to the channel"}
          text={"+5 usd"}
        />
      </TasksContainer>
    </Container>
  );
}

export default TaskPage;
