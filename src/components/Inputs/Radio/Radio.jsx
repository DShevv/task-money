import { useTranslation } from "react-i18next";
import { Container, RadioBtn, RadioInput } from "./Radio.style";

function Radio({ items, name, onChange, value }) {
  const { t } = useTranslation();
  const handleClick = (value) => {
    onChange(value);
    console.log(value);
  };

  return (
    <Container>
      {items.map((elem) => (
        <div key={elem}>
          <RadioInput
            type="radio"
            name={name}
            id={elem}
            checked={elem === value}
            onChange={() => handleClick(elem)}
          />
          <RadioBtn htmlFor={elem} key={elem}>
            <span>{t(elem)}</span>
          </RadioBtn>
        </div>
      ))}
    </Container>
  );
}

export default Radio;
