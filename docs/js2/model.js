const model = (() => {
    const data = storage.get("data") || [];
    const filter = {
		status: storage.get('filter') && storage.get('filter').status || '',
		product: storage.get('filter') && storage.get('filter').product || ''
	}

    function NewBid ( {name, phone, email, product} ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
        this.date = getDate();
        this.id = getId();
        this.status = statuses.new.name;
    }

    function getDate() {
        const date = new Date()
			return date.toLocaleString('ru', {
				year: "numeric",
				month: "long",
				day: "numeric"
			})
    }

    function getId() {
        const data = storage.get("data") || [];
        let id;
        let lastElement;
        let lastID;
        if (data.length === 0) {
            id = 1;
        } else {
            lastElement = data[data.length - 1];
            lastID = lastElement.id;
            id = lastID + 1;
        }
        return id
    }

    function addNewBid(props) {
        const data = storage.get("data") || [];
        let newBid = new NewBid(props);
        data.push(newBid);
        storage.set("data", data);
    }

    function updateBid(newData) {
        data.splice(findBid(newData), 1, newData);
        storage.set("data", data);
    }

    function deleteBid(obj) {
        data.splice(findBid(obj), 1);
        storage.set("data", data);
    }

    function findBid(obj) {
        obj.id = parseInt(obj.id);
        const foundBidIndex = data.findIndex(item => item.id === obj.id);
        return foundBidIndex;
    }

    function updateFilter (key, value) {
		filter[key] = value;
		storage.set('filter', filter);
	}

    return {
        addNewBid,
        updateBid,
        deleteBid,
        updateFilter,
        data,
		filter
    }

})()




