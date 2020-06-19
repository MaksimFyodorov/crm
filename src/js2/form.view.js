const formView = (() => {
    const domSelectors = {
        form: "#form",
        name: "#name",
        phone: "#phone",
        email: "#email",
        product: "#exampleFormControlSelect1",
    }

    function getInputs() {
        return {
            name: document.querySelector(domSelectors.name).value,
            phone: document.querySelector(domSelectors.phone).value,
            email: document.querySelector(domSelectors.email).value,
            product: document.querySelector(domSelectors.product).value
        }
    }

    function clearFields() {
        document.querySelector(domSelectors.name).value = "";
        document.querySelector(domSelectors.phone).value = "";
        document.querySelector(domSelectors.email).value = "";
        document.querySelector(domSelectors.product).value = "html";
    }

    function getDomSelectors() {
        return domSelectors;
    }

    return {
        getInputs,
        getDomSelectors,
        clearFields,
    }

})()