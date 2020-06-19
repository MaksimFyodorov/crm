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
            confirm("Здравствуйте!\nКак только отправите необходимое количество заявок,\nпереходите на страницу со всеми заявками\n02-crm-all-bids.html")
        }
    }

})(formView, model)

formController.init()