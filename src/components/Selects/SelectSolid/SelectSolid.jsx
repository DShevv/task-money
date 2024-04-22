import { StyledArrow, Container, PopUp, PopUpItem } from "./SelectSolid.style";
import { useState, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { SvgOpenArrow } from "../../../assets/icons/svgs";
import { useTranslation } from "react-i18next";

function SelectSolid({ items, onChange, value, className, ...other }) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(value);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false);
  });

  const toggle = () => {
    setIsActive(!isActive);
  };

  const createItemClick = (value) => {
    return () => {
      setCurrent(value);
      onChange && onChange(value);
    };
  };

  return (
    <Container
      onClick={toggle}
      className={`${className ? className : ""} ${isActive ? "active" : ""}`}
      ref={ref}
      {...other}
    >
      {t(current)}
      <StyledArrow>
        <SvgOpenArrow />
      </StyledArrow>
      <PopUp>
        {items.map(
          (elem) =>
            elem !== current && (
              <PopUpItem key={elem} onClick={createItemClick(elem)}>
                {t(elem)}
              </PopUpItem>
            )
        )}
      </PopUp>
    </Container>
  );
}

export default SelectSolid;
