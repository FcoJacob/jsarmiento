import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button.vue";

describe("Button", () => {
    it("should render a button", () => {
        render(Button);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should emit a click event", async () => {
        const { emitted } = render(Button);

        const button = screen.getByRole("button");
        await userEvent.click(button);
        expect(emitted("action")[0]).toEqual([0]);
    });
});
