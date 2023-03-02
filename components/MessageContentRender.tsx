import { useCallback } from "react";
import RollMessageContent from "./RollMessageContent";

export default function MessageContentRender({
  content,
  handleSecondRoll,
  rollMessage,
}: {
  content: any;
  handleSecondRoll: any;
  rollMessage: boolean;
}) {
  const handleInteraction = useCallback(
    (handleSecondRoll: any) => {
      handleSecondRoll({ ...content.props });
    },
    [handleSecondRoll]
  );

  let toRender = null;
  if (rollMessage) {
    toRender = (
      <RollMessageContent
        {...content.props}
        handleSecondRoll={handleInteraction}
      ></RollMessageContent>
    );
  }
  return <>{toRender}</>;
}
