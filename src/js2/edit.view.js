const editView = (() => {
    const domSelectors = {
        product: "#inputGroupSelect01",
        name: "#changing-bid-name",
        email: "#changing-bid-email",
        phone: "#changing-bid-phone",
        status: "#inputGroupSelect02",
        btnSaveChanges: ".btn-primary",
        btnDelete: ".btn-dark",
        id: "#changing-bid-id",
        date: "#changing-bid-date",
        leftPanelNav: ".left-panel__navigation",
        filterAside: "left-panel-bids"
    }

    function renderChangingBid(obj) {
        document.querySelector(domSelectors.product).value = obj.product;
        document.querySelector(domSelectors.status).value = obj.status;
        document.querySelector(domSelectors.name).value = obj.name;
        document.querySelector(domSelectors.phone).value = obj.phone;
        document.querySelector(domSelectors.email).value = obj.email;
        document.querySelector(domSelectors.date).innerText = obj.date;
        document.querySelector(domSelectors.id).innerText = `Заявка № ${obj.id}`;
    }

    function getInputs() {
        const selectProducts = document.querySelector(domSelectors.product);
        const selectStatuses = document.querySelector(domSelectors.status);
        return {
            name: document.querySelector(domSelectors.name).value,
            phone: document.querySelector(domSelectors.phone).value,
            email: document.querySelector(domSelectors.email).value,
            product: selectProducts.options[selectProducts.selectedIndex].value,
            date: document.querySelector(domSelectors.date).innerText,
            id: document.querySelector(domSelectors.id).innerText.split(" ")[2],
            status: selectStatuses.options[selectStatuses.selectedIndex].value,
        }
}

    function getDomSelectors() {
        return domSelectors;
    }

    return {
        getDomSelectors,
        renderChangingBid,
        getInputs,
    }

})()