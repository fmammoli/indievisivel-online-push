import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";
import LooksFourIcon from "@mui/icons-material/Looks4";
import LooksFiveIcon from "@mui/icons-material/Looks5";
import LooksSixIcon from "@mui/icons-material/Looks6";

export default function DiceIcon({
  value,
  color = "disabled",
  fontSize = "medium",
}: {
  value: number;
  color:
    | "disabled"
    | "action"
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  fontSize: "small" | "medium" | "large";
}) {
  switch (value) {
    case 1:
      return <LooksOneIcon fontSize={fontSize} color={color} />;
    case 2:
      return <LooksTwoIcon fontSize={fontSize} color={color} />;
    case 3:
      return <LooksThreeIcon fontSize={fontSize} color={color} />;
    case 4:
      return <LooksFourIcon fontSize={fontSize} color={color} />;
    case 5:
      return <LooksFiveIcon fontSize={fontSize} color={color} />;
    case 6:
      return <LooksSixIcon fontSize={fontSize} color={color} />;
    default:
      return <LooksOneIcon fontSize={fontSize} color={color} />;
      break;
  }
}
