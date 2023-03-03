import { Box, TextField } from "@mui/material";

export default function InputNotes({
  initialValue,
  label,
  name,
}: {
  initialValue?: string;
  label: string;
  name: string;
}) {
  return (
    <Box>
      <Box paddingX={1} width={"100%"}>
        <TextField
          name={name}
          hiddenLabel
          id={`filled-hidden-label-small-notes-${name}`}
          defaultValue={initialValue}
          variant="standard"
          fullWidth
          multiline
          maxRows={8}
        />
      </Box>
    </Box>
  );
}
