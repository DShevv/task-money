import { Container } from "../RevenueTable/RevenueTable.style";
import { StyledItem } from "./SingleRevenueTable.style";

export default function SingleRevenueTable({ items, ...other }) {
  return (
    <Container {...other}>
      {items &&
        items.map((elem, index) => (
          <li key={`${index}`}>
            <StyledItem>
              <div>{elem}</div>
            </StyledItem>
          </li>
        ))}
    </Container>
  );
}
