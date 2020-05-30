const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

// função para pegar o Computed Style do documento.
const getStyles = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

// cores inicias do layout (light).
const initialColors = {
    // aqui usamos a função criada acima, passando o elemento e a propriedade exata que vamos usar como parâmetros.
    bg: getStyles(html, "--bg"),
    bgPanel: getStyles(html, "--bg-panel"),
    colorHeadings: getStyles(html, "--color-headings"),
    colorText: getStyles(html, "--color-text"),
}

// cores do modo noturno.
const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
}

const changeColors = (colors) => {

}


checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors() : changeColors()
})