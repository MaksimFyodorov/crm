const editController = ((view, model) => {
    function renderChangingBid() {
        if (location.search !== "") {
            const data = storage.get("data");
            const id = parseInt(location.search.split("=")[1]);
            const changingBid = data.find(item => item.id === id);
            view.renderChangingBid(changingBid);
        }
    }

    function setupEventListeners() {
        const DOM = view.getDomSelectors();
        document.querySelector(DOM.btnSaveChanges).addEventListener("click", saveChanges);
        document.querySelector(DOM.btnDelete).addEventListener("click", deleteBid);
        document.getElementById(DOM.filterAside).addEventListener("click", handleStatusOnClick);
    }

    function saveChanges(e) {
        const changedBid = view.getInputs();
        model.updateBid(changedBid);
    }

    function deleteBid() {
        const changedBid = view.getInputs();
        model.deleteBid(changedBid);
    }

    function handleStatusOnClick (e) {
		const element = e.target.closest('[data-status]');
		const status = element.dataset.status;
		model.updateFilter('status', status);
        location.href = "02-crm-all-bids.html";
    }

    return {
        init: function() {
            renderChangingBid();
            setupEventListeners();
        }
    }

})(editView, model)

editController.init()