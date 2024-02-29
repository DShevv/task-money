import { Heading } from "./H1.style";

export default function H1({ className, children }) {
  return <Heading className={className}>{children}</Heading>;
}
