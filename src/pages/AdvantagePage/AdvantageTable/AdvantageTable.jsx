import { Container, Item } from "./AdvantageTable.style";

export default function AdvantageTable({ items, ...other }) {
  return (
    <Container {...other}>
      {items &&
        items.map((elem) => (
          <li key={`${elem.status}`}>
            <Item>
              <div>{elem.status}</div>
              <div>{elem.sumDep}</div>
              <div>{elem.tasks}</div>
              <div>{elem.sumTask}</div>
              <div>{elem.revenue}</div>
              <div>{elem.revenueMonth}</div>
              <div>{elem.revenueYear}</div>
            </Item>
          </li>
        ))}
    </Container>
  );
}
