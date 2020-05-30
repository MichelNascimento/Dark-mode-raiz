const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

// função para pegar o Computed Style do documento (HTML).
const getStyles = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

// criando um objeto com as cores iniciais do layout (light).
const initialColors = {
    // aqui usamos a função criada acima, passando como parâmetros o elemento e as propriedades de estilos exatas que vamos usar.
    bg: getStyles(html, "--bg"),
    bgPanel: getStyles(html, "--bg-panel"),
    colorHeadings: getStyles(html, "--color-headings"),
    colorText: getStyles(html, "--color-text"),
}

// criando um objeto com as cores do modo noturno.
const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
}

// função para setar o nome da chave do objeto de cores, igual ao nome da propriedade.
// nesse RegEx, estamos buscando todas as letras maiusculas, e colocando um traço antes delas. Por último, formatando para letra minuscula.
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

// função que recebe o objeto de cores como parâmetro e acessa o documento (HTML) para setar as novas propriedades.
const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })
}

// ouvindo o evento de mudança (change) do checkbox, para validar se a função de alteração de cores (changeColors) 
// receberá as propriedades do modo light ou dark.
checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})