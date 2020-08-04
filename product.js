class Product {
    constructor(id, name, price, quantity, desc, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = desc;
        this.image = image;
    }

    getHtml() {
        let html = `<tr>
                        <td>${this.id}</td>
                        <td>${this.name}</td>
                        <td>${this.price}</td>
                        <td>${this.quantity}</td>
                        <td>${this.description}</td>
                        <td ><img src="${this.image}" style="height: auto;width: 100%;"></td>
                        <td><button class="btn" onclick="editProduct(${this.id})">Edit</button></td>
                        <td><button class="btn" onclick="confirmDelete(${this.id})">Delete</button></td>
                    </tr>`;
        return html;
    }

    edit(name, price, quantity, desc, image) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = desc;
        this.image = image;
    }

}