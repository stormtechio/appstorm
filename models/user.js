'use strict';

module.exports = Class User{

constructor(){

}
set name(value){
    this.nameUser = value;
}
get name(){
    return this.nameUser;
}
set id(value){
    this.idUser = value;
}
get id(){
    return this.idUser;
}
set addressId(value){
    this.addressIdUser = value;
}
get addressId(){
    return this.addressIdUser;
}
set email(value){
    this.emailUser = value;
}
get email(){
    return this.emailUser;
}
set password(value){
    this.passwordUser = value;
}
get password(){
    return this.passwordUser;
}


}