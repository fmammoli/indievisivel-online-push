import AddIcon from "@mui/icons-material/Add";
import { Box, Typography, IconButton } from "@mui/material";
import { ReactNode } from "react";

interface InputListPropsType {
  children?: ReactNode;
  title: string;
  handleAdd?: () => void;
}

export default function InputList({
  children,
  title,
  handleAdd,
}: InputListPropsType) {
  return (
    <Box id={"formList1"} paddingTop={4} flexGrow={1}>
      <Box
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
        p={1}
        borderRadius={"8px 8px 0 0"}
      >
        <Box
          borderRadius={"6px 6px 0 0"}
          sx={{ backgroundColor: "white" }}
          paddingX={1}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={"body1"}>{title}</Typography>
          <IconButton onClick={handleAdd}>
            <AddIcon></AddIcon>
          </IconButton>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
