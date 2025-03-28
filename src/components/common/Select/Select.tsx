import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import { Option } from "../../../model";

interface Props {
  options: Option[];
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select = (props: Props) => {
  const { options, value, onChange } = props;

  return (
    <Container>
      <FormControl fullWidth>
        <MuiSelect
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          sx={{
            "& .MuiInputBase-input": {
              padding: "0.5rem",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 8rem;
`;
