import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheXmarkIcon from "../components/icons/TheXmarkIcon.vue";

test("mounting xmark icon", () => {
    expect(mount(TheXmarkIcon).find("svg"));
});
