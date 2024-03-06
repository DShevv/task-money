import { Container } from "./FileInput.style";
import { Input } from "./FileInput.style";

function FileInput({ accept, placeholder, onChange, ...other }) {
  return (
    <Container {...other}>
      <Input
        type="file"
        accept={accept}
        onChange={(e) => {
          if (e.target.files && e.target.files !== null) {
            onChange(e.target.files[0]);
          }
        }}
      />
      {placeholder}
    </Container>
  );
}

export default FileInput;
