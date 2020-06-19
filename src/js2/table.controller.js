const tableController = ((view, model) => {
    const data = model.data;
	const filter = model.filter;
    const DOM = view.getDomSelectors();

    const setupEventListeners = () => {
        document.getElementById(DOM.filterHeader).addEventListener("click", handleStatusOnClick);
        document.getElementById(DOM.filterAside).addEventListener("click", handleStatusOnClick);
        document.querySelector(DOM.productsFilter).addEventListener("change", handleProductOnchange);
    }


    function handleProductOnchange (e) {
		model.updateFilter('product', e.target.value);
        view.renderBidsTable(filterData(data));
    }
    
    function handleStatusOnClick (e) {
		e.preventDefault();
		const element = e.target.closest('[data-status]');
		const status = element.dataset.status;

		model.updateFilter('status', status); 

		view.setActiveAsideItem(status);
		view.renderBidsTable(filterData(data));
    }
    
    function filterData (data) {
		let bids = data;
		Object.keys(filter).forEach(item => {
			if (filter[item])	{
				bids = bids.filter(bid => bid[item] === filter[item])
			}
		})
		return bids
	}

    return {
        init: () => {
            setupEventListeners();
            view.renderBidsTable(filterData(data));
            view.setActiveAsideItem(filter.status); 
	        view.setActiveProduct(filter.product);
        }
    }
    
})(tableView, model)

tableController.init()