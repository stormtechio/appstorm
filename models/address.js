'use strict';

module.exports = Class Address(){

    constructor(){

    }

set id(value){
    this.idAddress = value;
}
get id(){
    return this.idAddress;
}
set district(value){
    this.districtAddress = value;
}
get district(){
    return this.districtAddress;
}
set street(value){
    this.streetAddress = value;
}
get street(){
    return this.streetAddress;
}
set number(value){
    this.numberAddress = value;
}
get number(){
    return this.numberAddress;
}
set homeTypeId(value){
    this.homeTypeIdAddress = value;
}
get homeTypeId(){
    return this.homeTypeIdAddress;
}




}