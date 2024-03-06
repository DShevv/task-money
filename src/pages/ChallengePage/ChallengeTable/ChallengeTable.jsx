import {
  Container,
  Item,
  ItemHeader,
  ItemImage,
  ItemRevenue,
  ItemTitle,
  Progress,
  ProgressBar,
} from "./ChallengeTable.style";

function ChallengeTable({ items, ...other }) {
  return (
    <Container {...other}>
      {items.map((elem, index) => (
        <Item key={elem.text + index}>
          <ItemHeader>
            <ItemImage src={elem.image} />
            <ItemRevenue>{elem.revenue}</ItemRevenue>
          </ItemHeader>
          <ItemTitle>{elem.text}</ItemTitle>
          <ProgressBar level={(elem.count / elem.goal) * 100} />
          <Progress className={elem.count === elem.goal ? "active" : ""}>
            {elem.count === elem.goal
              ? `Completed`
              : `${elem.count}/${elem.goal}`}
          </Progress>
        </Item>
      ))}
    </Container>
  );
}

export default ChallengeTable;
