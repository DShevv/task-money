import { Container } from "./FileInputSharp.style";
import { Input } from "./FileInputSharp.style";

function FileInputSharp({ accept, placeholder, onChange, ...other }) {
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

export default FileInputSharp;
