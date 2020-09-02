import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Dropdown from ".";

storiesOf("Dropdown", module).add("with title and body", () => (
  <Dropdown
    image={text("Image URL", "https://placekitten.com/408/287")}
    title={text("Title", "I am a card")}
  >
    {text("Body", "I have an image, a title and a body")}
  </Dropdown>
));
