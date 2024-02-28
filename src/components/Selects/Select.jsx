import { StyledArrow, Container, PopUp, PopUpItem } from "./Select.style";
import { useEffect, useState } from "react";

function Select({ items, onChange, className }) {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(items[0]);

  useEffect(() => {
    //onChange(current)
  }, [current]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const createItemClick = (value) => {
    return () => {
      setCurrent(value);
    };
  };

  return (
    <Container
      onClick={toggle}
      className={`${className} ${isActive ? "active" : ""}`}
    >
      {current}
      <StyledArrow />
      <PopUp>
        {items.map(
          (elem) =>
            elem !== current && (
              <PopUpItem key={elem} onClick={createItemClick(elem)}>
                {elem}
              </PopUpItem>
            )
        )}
      </PopUp>
    </Container>
  );
}

export default Select;
