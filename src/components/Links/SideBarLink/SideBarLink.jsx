import { Badge, Container, Title } from "./SideBarLink.style";

function SideBarLink({ children, title, to, count }) {
  const countLabel = count > 99 ? "99+" : count;

  return (
    <Container to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
      <Title>{title}</Title>
      {count && count > 0 ? <Badge>{countLabel}</Badge> : ""}
    </Container>
  );
}

export default SideBarLink;
