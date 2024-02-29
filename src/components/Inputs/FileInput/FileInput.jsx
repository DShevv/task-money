import { Container } from "./FileInput.style";
import { Input } from "./FileInput.style";

function FileInput({ accept, placeholder, onChange }) {
  return (
    <Container>
      <Input
        type="file"
        accept={accept}
        onChange={(e) => {
          if (e.target.files && e.target.files !== null) {
            onChange(e.target.files);
          }
        }}
      />
      {placeholder}
    </Container>
  );
}

export default FileInput;
