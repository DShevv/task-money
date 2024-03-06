import { StyledArrow, Container, PopUp, PopUpItem } from "./SelectSolid.style";
import { useEffect, useState, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { SvgOpenArrow } from "../../../assets/icons/svgs";

function SelectSolid({ items, onChange, value, className, label, ...other }) {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(value === undefined ? label : value);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false);
  });

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
      className={`${className ? className : ""} ${isActive ? "active" : ""}`}
      ref={ref}
      {...other}
    >
      {current}
      <StyledArrow>
        <SvgOpenArrow />
      </StyledArrow>
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

export default SelectSolid;
