import { Badge, Container, Title } from "./SideBarLink.style";

function SideBarLink({ children, title, to, count, className, ...other }) {
  const countLabel = count > 99 ? "99+" : count;

  return (
    <Container {...other} to={to} className={className}>
      {children}
      <Title>{title}</Title>
      {count && count > 0 ? <Badge>{countLabel}</Badge> : ""}
    </Container>
  );
}

export default SideBarLink;
