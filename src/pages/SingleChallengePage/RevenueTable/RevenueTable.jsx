import { Container, Item } from "./RevenueTable.style";

export default function RevenueTable({ items, ...other }) {
  return (
    <Container {...other}>
      {items &&
        items.map((elem) => (
          <li key={`${elem.task}`}>
            <Item>
              <div>{elem.task}</div>
              <div>{elem.mainRev}</div>
              <div>{elem.bonusRev}</div>
            </Item>
          </li>
        ))}
    </Container>
  );
}
