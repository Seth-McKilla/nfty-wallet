import { Button } from "@chakra-ui/react";

export default function UDLogin({ height = 40, onLogin }) {
  return (
    <Button color="purple.500" p={0} onClick={onLogin}>
      <img
        alt="unstoppable-login-button"
        draggable="false"
        src="https://docs.unstoppabledomains.com/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MF1CaqLXCtpg4trwHjh%2F-MjjpJ6gM6yNltRf0-yc%2F-MjjutLm4Kh7ikfH7Pi3%2Fpressed-button.png?alt=media&amp;token=e1ac2392-8d77-4a60-b7a7-fa9f65a34cb8"
        style={{ height }}
      />
    </Button>
  );
}
