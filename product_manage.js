class ProductManage {
    constructor() {
        this.products = [];
    }

    addProduct (product) {
        this.products.push(product);
        this.saveData();
    }

    delProduct (id) {
        this.products.splice(id,1);
        this.saveData();
    }
    getAllProducts() {
        let html = "";
        for (let i = 0; i < this.products.length ; i++) {
            html += this.products[i].getHtml();
        }
        return html;
    }

    getIndexProductById(id){
        for (let i = 0; i < this.products.length; i++) {
            if(id === this.products[i].id){
                return i;
            }
        }
    }

    getProductById(id){
        for (let i = 0; i < this.products.length; i++) {
            if(id == this.products[i].id){
                return this.products[i];
            }
        }
    }

    saveData(){
        localStorage.setItem("product", JSON.stringify(this.products));
    }

    loadData(){
        if(localStorage.hasOwnProperty('product')){
            let arr = JSON.parse(localStorage.getItem("product"));
            for (let i = 0; i < arr.length; i++) {
                let product = new Product(arr[i].id,arr[i].name,arr[i].price,arr[i].quantity,arr[i].description,arr[i].image);
                this.products.push(product);
            }
            return  this.products;
        }
        else
            return [];
    }
}