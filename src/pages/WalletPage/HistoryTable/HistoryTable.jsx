import { Container, Item } from "./HistoryTable.style";

export default function HistoryTable({ items, ...other }) {
  return (
    <Container {...other}>
      {items &&
        items.map((elem, index) => (
          <li key={`${elem.status}${elem.method}${elem.sum}${index}`}>
            <Item to={elem.to}>
              <div>{elem.status}</div>
              <div>{elem.method}</div>
              <div>{elem.sum}</div>
            </Item>
          </li>
        ))}
    </Container>
  );
}
