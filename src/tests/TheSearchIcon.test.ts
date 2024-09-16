import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheSearchIcon from "../components/icons/TheSearchIcon.vue";

test("mounting search icon", () => {
    expect(mount(TheSearchIcon).find("svg"));
});
