import { useTranslation } from "react-i18next";
import {
  Container,
  Item,
  ItemTitle,
  Process,
  ProgressBar,
} from "./ProgressTable.style";

function ProgressTable({ items, ...other }) {
  const { t } = useTranslation();

  return (
    <Container {...other}>
      {items.map((elem, index) => (
        <Item
          key={`${elem.title}${elem.count}${index}`}
          $completed={elem.count === elem.goal ? 1 : 0}
        >
          <ItemTitle>{elem.title}</ItemTitle>
          <ProgressBar $level={(elem.count / elem.goal) * 100} />
          <Process>
            <span>
              {elem.count === elem.goal ? t("Completed") : t("Process")}
            </span>
            <span>{`${elem.count}/${elem.goal}`}</span>
          </Process>
        </Item>
      ))}
    </Container>
  );
}

export default ProgressTable;
