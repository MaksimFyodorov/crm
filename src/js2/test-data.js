const generateTestData = (() => {
    function TestBid(name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }  

    const data = [
        new TestBid ("Иванов Иван", "+79999999999", "email@www.ru", "html"),
        new TestBid ("Петров Петр", "+79888888888", "e@eee.ru", "js"),
        new TestBid ("Сидоров Сидр", "+79100000000", "em@rrr.ru", "vue"),
        new TestBid ("Илларионов Илларион", "+79107777777", "ema@aaa.ru", "wordpress"),
        new TestBid ("Филаретов Фил", "+79555555555", "emai@sss.ru", "php"),
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function insertInUI() {
        const randomInd = getRandomInt(data.length);
        const randomBid = data[randomInd];

        document.querySelector("#name").value = randomBid.name;
        document.querySelector("#phone").value = randomBid.phone;
        document.querySelector("#email").value = randomBid.email;
        document.querySelector("#exampleFormControlSelect1").value = randomBid.product;
    }

    return {
        insertInUI,
    }

})()

generateTestData.insertInUI()

