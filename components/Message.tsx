import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface MessagePropsType {
  id: string;
  color: string;
  timestamp: Date;
  author: string;
  side: "LEFT" | "RIGHT";
  children: JSX.Element;
}

export default function Message({
  id,
  color,
  timestamp,
  author,
  side,
  children,
}: MessagePropsType) {
  const flexDirection = side === "LEFT" ? "row" : "row-reverse";
  return (
    <Box display={"flex"} flexDirection={flexDirection}>
      <Box py={2} maxWidth={"70%"}>
        <Box
          display={"flex"}
          justifyContent="space-between"
          px={1}
          gap={3}
          id={id}
        >
          <Typography variant="caption" component="p">
            {author}
          </Typography>
          <Typography variant="caption" component="p">
            {`${timestamp.toLocaleDateString()}  -  ${timestamp.toLocaleTimeString(
              [],
              { hour: "2-digit", minute: "2-digit" }
            )}`}
          </Typography>
        </Box>
        <Box border={"1px solid"} borderRadius={2} p={1} borderColor={color}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
