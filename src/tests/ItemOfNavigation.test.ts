import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import ItemOfNavigation from "../components/ItemOfNavigation.vue";

test("render navigation item without slot", () => {
    const wrapper = mount(ItemOfNavigation);
    expect(wrapper.text()).toBe("");
});

test("render navigation item with slot", () => {
    const wrapper = mount(ItemOfNavigation, {
        slots: {
            default: "Сериалы",
        },
    });

    expect(wrapper.text()).toBe("Сериалы");
});
