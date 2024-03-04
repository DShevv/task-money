import {
  Container,
  Item,
  ItemTitle,
  Process,
  ProgressBar,
} from "./ProgressTable.style";

function ProgressTable({ items, ...other }) {
  return (
    <Container {...other}>
      {items.map((elem, index) => (
        <Item
          key={`${elem.title}${elem.count}${index}`}
          completed={elem.count === elem.goal ? 1 : 0}
        >
          <ItemTitle>{elem.title}</ItemTitle>
          <ProgressBar level={(elem.count / elem.goal) * 100} />
          <Process>
            <span>Process</span>
            <span>{`${elem.count}/${elem.goal}`}</span>
          </Process>
        </Item>
      ))}
    </Container>
  );
}

export default ProgressTable;
