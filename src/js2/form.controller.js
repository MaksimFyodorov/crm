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
            alert("Здравствуйте!\nКак только отправите необходимое количество заявок,\nпереходите на страницу со всеми заявками\nдля этого Вам нужно в адресной строке браузера\nhttps://maksimfyodorov.github.io/crm/01-form.html\nзаменить 01-form.html на bids.html")
        }
    }

})(formView, model)

formController.init()