import { Title, Text } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Tom&apos;s Homepage
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This site doesn&apos;t have much of anything on it yet :)
      </Text>
    </>
  );
}
