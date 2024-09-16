import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import TheContentCard from "../components/TheContentCard.vue";
import TheXmarkIcon from "../components/icons/TheXmarkIcon.vue";
import exampleMovie from "./mocks/exampleMovie";
import RatingBox from "../components/RatingBox.vue";

let recomendedMovie = structuredClone(exampleMovie);

describe("testing Xmark Icon", () => {
    it("render xmark icon", () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });
        expect(wrapper.findComponent(TheXmarkIcon).exists()).toBe(true);
    });

    it("xmark emits the event on click", async () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });
        await wrapper.findComponent(TheXmarkIcon).trigger("click");
        expect(wrapper.emitted()).toHaveProperty("close-details");
    });
});

describe("render left side", () => {
    beforeEach(() => {
        recomendedMovie = structuredClone(exampleMovie);
    });

    it("render with header", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("h1").text()).not.toBe("");
    });
    it("render without header", () => {
        recomendedMovie.name = "";
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("h1").text()).toBe("");
    });

    it("render en-header", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("h4").text()).not.toBe("");
    });
    it("render without en-header", () => {
        recomendedMovie.alternativeName = "";
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("h4").text()).toBe("");
    });

    it("render rating-box", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.findComponent(RatingBox).exists()).toBe(true);
    });

    it("render with top250", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("div[class='content-card__top']").exists()).toBe(
            true
        );
    });
    it("render without top250", () => {
        recomendedMovie.top250 = null;
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("div[class='content-card__top']").exists()).toBe(
            false
        );
    });
    it("render with description", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(
            wrapper.find("div[class='content-card__description']").text()
        ).not.toBe("");
    });
    it("render without description", () => {
        recomendedMovie.description = null;
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(
            wrapper.find("div[class='content-card__description']").text()
        ).toBe("");
    });
    it("render with slogan", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("div[class='content-card__slogan']").exists()).toBe(
            true
        );
    });
    it("render without slogan", () => {
        recomendedMovie.slogan = null;
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find("div[class='content-card__slogan']").exists()).toBe(
            false
        );
    });
});

describe("render right side", () => {
    beforeEach(() => {
        recomendedMovie = structuredClone(exampleMovie);
    });

    it("render with persons", () => {
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        const actorsLength = recomendedMovie.persons?.filter(
            (per) => per?.profession === "актеры"
        ).length;
        const producersLength = recomendedMovie.persons?.filter(
            (per) => per?.profession === "режиссеры"
        ).length;

        expect(
            wrapper.findAll("div[class='content-card__actor actors']").length
        ).toEqual(actorsLength);
        expect(
            wrapper.findAll("div[class='content-card__producer producers']")
                .length
        ).toEqual(producersLength);
    });
    it("render without persons", () => {
        recomendedMovie.persons = null;
        const wrapper = mount(TheContentCard, {
            props: {
                recomendedMovie,
            },
        });
        expect(wrapper.find('div[class="content-card__actors"]').exists()).toBe(
            false
        );
        expect(
            wrapper.find('div[class="content-card__producers"]').exists()
        ).toBe(false);
    });

    it("render with type", () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });
        expect(
            wrapper.find("div[class='additional-info__type']").exists()
        ).toBe(true);
    });
    it("render without type", () => {
        recomendedMovie.type = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });
        expect(
            wrapper.find("div[class='additional-info__type']").exists()
        ).toBe(false);
    });
    it("render with right type", async () => {
        // recomendedMovie.type = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });
        expect(
            wrapper.find("div[class='additional-info__type']").text()
        ).toContain("Фильм");
    });

    it("render with 2+ contries", () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        const countriesSec = wrapper.find(
            'div[class="additional-info__countries"]'
        );
        expect(countriesSec.exists()).toBe(true);
        expect(countriesSec.text()).toContain("Страны:");

        const length = recomendedMovie.countries?.length;
        expect(
            wrapper.find('div[class="countries-list"]').text().split(",").length
        ).toEqual(length);
    });
    it("render with 1 contry only", () => {
        recomendedMovie.countries = recomendedMovie.countries
            ? recomendedMovie.countries.splice(0, 1)
            : null;

        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        const countriesSec = wrapper.find(
            'div[class="additional-info__countries"]'
        );
        expect(countriesSec.exists()).toBe(true);
        expect(countriesSec.text()).toContain("Страна:");

        const length = recomendedMovie.countries?.length;
        expect(
            wrapper.find('div[class="countries-list"]').text().split(",").length
        ).toEqual(length);
    });
    it("render without contries", () => {
        recomendedMovie.countries = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });
        expect(
            wrapper.find('div[class="additional-info__countries"]').exists()
        ).toBe(false);
    });

    it("render with rus+world fees", () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="fees-russia"]').exists()).toBe(true);
        expect(wrapper.find('div[class="fees-world"]').exists()).toBe(true);
    });
    it("render with rus fees only", () => {
        recomendedMovie.fees.world = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="fees-russia"]').exists()).toBe(true);
        expect(wrapper.find('div[class="fees-world"]').exists()).toBe(false);
    });
    it("render with world fees only", () => {
        recomendedMovie.fees.russia = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="fees-russia"]').exists()).toBe(false);
        expect(wrapper.find('div[class="fees-world"]').exists()).toBe(true);
    });
    it("render without fees", () => {
        recomendedMovie.fees.russia = null;
        recomendedMovie.fees.world = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(
            wrapper.find('div[class="additional-info__fees"]').exists()
        ).toBe(false);
    });

    it("render with rus+world premiere", () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="premiere-world"]').exists()).toBe(true);
        expect(wrapper.find('div[class="premiere-russia"]').exists()).toBe(
            true
        );
    });
    it("render with rus premiere only", () => {
        recomendedMovie.premiere.world = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="premiere-world"]').exists()).toBe(
            false
        );
        expect(wrapper.find('div[class="premiere-russia"]').exists()).toBe(
            true
        );
    });
    it("render with world premiere only", () => {
        recomendedMovie.premiere.russia = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="premiere-world"]').exists()).toBe(true);
        expect(wrapper.find('div[class="premiere-russia"]').exists()).toBe(
            false
        );
    });
    it("render without premiere", () => {
        recomendedMovie.premiere.russia = null;
        recomendedMovie.premiere.world = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(
            wrapper.find('div[class="additional-info__premiere"]').exists()
        ).toBe(false);
    });

    it("render with age", () => {
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="additional-info__age"]').exists()).toBe(
            true
        );
    });
    it("render without age", () => {
        recomendedMovie.ageRating = null;
        const wrapper = mount(TheContentCard, { props: { recomendedMovie } });

        expect(wrapper.find('div[class="additional-info__age"]').exists()).toBe(
            false
        );
    });
});
