import React, { Dispatch, SetStateAction } from "react";
import Checkbox from "@mui/material/Checkbox";
import SelectMUI, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";

interface SelectProps {
  id: string;
  labelId: string;
  title: string;
  names: string[];
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  hasError: boolean;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Select = ({
  title,
  names,
  id,
  labelId,
  value,
  setValue,
  hasError = false,
}: SelectProps) => {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }} error={hasError}>
        <InputLabel id={labelId}>{title}</InputLabel>
        <SelectMUI
          labelId={labelId}
          id={id}
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </SelectMUI>
        {hasError && <FormHelperText>This is required!</FormHelperText>}
      </FormControl>
    </>
  );
};

export default Select;
