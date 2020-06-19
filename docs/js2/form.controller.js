const formController = ((view, model) => {
    const setupEventListeners = () => {
        const DOM = view.getDomSelectors();
        document.querySelector(DOM.form).addEventListener("submit", ctrlAddNewBid)
    }

    function ctrlAddNewBid(e) {
        e.preventDefault();
        const inputs = view.getInputs()
        if (!isNaN(inputs.phone) && inputs.phone !== "") {
            model.addNewBid(inputs);
            view.clearFields();
            generateTestData.insertInUI();
        } else {
            alert("Введите корректный номер телефона");
        }
    }

    return {
        init: () => {
            setupEventListeners();
        }
    }

})(formView, model)

formController.init()