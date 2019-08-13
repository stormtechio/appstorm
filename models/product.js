'use strict';

module.exports = Class Product{

constructor(){

}
set name(value){
    this.nameProduct = value;
}
get name(){
    return this.nameProduct;
}
set id(value){
    this.idProduct = value;
}
get id(){
    return this.idProduct;
}

set price(value){
    this.priceProduct = value;
}
get price(){
    return this.priceProduct;
}
set description(value){
    this.descriptionProduct = value;
}
get description(){
    return this.descriptionProduct;
}


}