import {
  StyledArrow,
  Container,
  PopUp,
  PopUpItem,
} from "./SelectBorderedPrimary.style";
import { useEffect, useState, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";

function SelectBorderedPrimary({
  items,
  onChange,
  value,
  className,
  label,
  ...other
}) {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(value === undefined ? label : value);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false);
  });

  useEffect(() => {
    onChange && onChange(current);
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
      className={`${className ? className : ""} ${isActive ? "active" : ""}`}
      ref={ref}
      {...other}
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

export default SelectBorderedPrimary;
