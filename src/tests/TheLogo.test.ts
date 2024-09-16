import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import TheLogo from "../components/icons/TheLogo.vue";

test("mounting logo", () => {
    const wrapper = shallowMount(TheLogo);
    expect(wrapper.find("svg"));
});
