class ThemeToggle extends HTMLElement {
    constructor() {
        super();

        const button = this.querySelector("button");

        /** Set the theme to dark/light mode. */
        const setTheme = (dark = false) => {
            document.startViewTransition(() => {
                document.documentElement.classList[dark ? "add" : "remove"](
                    "theme-dark"
                );
                button.setAttribute("aria-pressed", String(dark));

            })
        };

        // Toggle the theme when a user clicks the button.
        button.addEventListener("click", () => setTheme(!this.isDark()));

        if (!document.startViewTransition)
            setTheme(!this.isDark())

        // Initialize button state to reflect current theme.
        setTheme(this.isDark());
    }

    isDark() {
        return document.documentElement.classList.contains("theme-dark");
    }
}
customElements.define("theme-toggle", ThemeToggle);
