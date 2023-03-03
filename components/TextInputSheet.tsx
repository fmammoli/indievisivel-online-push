import { FormControlLabel, Box, TextField, Typography } from "@mui/material";

interface TextInputSheetPropsType {
  initialValue?: string;
  label: string;
  name: string;
}
export default function TextInputSheet({
  initialValue,
  label,
  name,
}: TextInputSheetPropsType) {
  return (
    <FormControlLabel
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        padding: 0.4,
        borderRadius: "8px 0 0 8px",
        display: "flex",
        justifyContent: "flex-end",
        marginLeft: 0,
      }}
      control={
        <Box paddingX={1} width={"100%"}>
          <TextField
            name={name}
            hiddenLabel
            id={`filled-hidden-label-small-${name}`}
            defaultValue={initialValue}
            variant="standard"
            fullWidth
          />
        </Box>
      }
      label={
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "4px 0 0 4px",
          }}
          p={0.6}
        >
          <Typography variant="body2">{label}</Typography>
        </Box>
      }
      labelPlacement="start"
    ></FormControlLabel>
  );
}
