const tableView = (() => {
    const domSelectors = {
        table: "#table",
        productsFilter: "#inputGroupSelect01",
        filterHeader: "filterHeader",
        filterAside: "left-panel-bids"
    }

    function createItem(obj) {
        const html = `
            <tr>
                <th scope="row">${obj.id}</th>
                <td>${obj.date}</td>
                <td>${products[obj.product]}</td>
                <td>${obj.name}</td>
                <td>${obj.email}</td>
                <td>${obj.phone}</td>
                <td>
                    <div class="badge badge-pill ${statuses[obj.status].color}">
                        ${statuses[obj.status].label}
                    </div>
                </td>
                <td>
                    <a href="03-crm-edit-bid.html?request=${obj.id}">Редактировать</a>
                </td>
            </tr>`;
        table.insertAdjacentHTML("beforeend", html);
    }

    function renderBidsTable(arr) {
        table.innerHTML = "";
        arr.forEach(item => createItem(item));
    }

    function setActiveProduct (product) {
		document.querySelector(domSelectors.productsFilter).value = product;
	}

	function setActiveAsideItem (status) {
		const activeItem = document.getElementById("left-panel-bids").querySelector('.active');
		if (activeItem) {
			activeItem.classList.remove('active');
		}
		document.getElementById("left-panel-bids").querySelector(`[data-status="${status}"]`).classList.add('active');
    }
    
    const getDomSelectors = () => domSelectors;

    return {
        getDomSelectors,
        renderBidsTable,
        setActiveProduct,
        setActiveAsideItem
    }

})()