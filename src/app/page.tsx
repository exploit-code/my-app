import { Accordion } from "./components/accordion/accordion";
import { Button } from "./components/button/button";
import { ChipLink } from "./components/chip-link/chip-link";
import { MyLink } from "./components/my-link/my-link";

export default function HomePage() {
  return (
    <>
      <Accordion
        title={"Accordion 1"}
        children={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <Button text={"button"} color={"primary"} radius={"s"} size={"m"} />
      <ChipLink
        link={"/"}
        text={"chiplink"}
        color={"default"}
        size={"s"}
        dot={true}
        dotcolor={"warning"}
      />
      <MyLink text={"link"} link={"/"} color={"secondary"} size={"m"} underline={true}/>
    </>
  );
}
