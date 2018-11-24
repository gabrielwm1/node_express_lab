"use strict";
const displayCart ={

    templateUrl: "app/components/cart/cart.html",


    controller:["CartService", function(CartService){
        const vm = this;
        vm.formOn= false;
        let newItem = false; 
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response);

                vm.cart= response.data;


            })

        }
        vm.addItem = (item) => {
            CartService.postItem(item).then((response) => {
                vm.cart = response.data;
                newItem = false;
                vm.formOn = false;
            })
        }
        vm.removeItem = (id) => {
            CartService.deleteItem(id).then((response) => {
                vm.cart = response.data;
            })
        }
        vm.updateItem = (updatedItem) => {
            CartService.updateItem(updatedItem).then((response) =>{
                vm.cart = response.data;
            })
        }
        vm.newItemToAdd = () => {
            newItem = true;
            vm.formOn = true;
        }
        vm.showForm = () => {
            return newItem;
        }

    }


]



}
angular
    .module("cartApp")
    .component("displayCart", displayCart);