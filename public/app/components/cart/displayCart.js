"use strict";
const displayCart ={

    template:`<button ng-click = "$ctrl.getAllItems();">Get Items</button>
              <section class= "item-list"
            <ul>
                  <li ng-repeat = "item in $ctrl.cart"> {{ item.id }}{{item.product}} {{item.price}} {{item.quantity}}></li>
              </ul>
              </section>
    `,  


    controller:["CartService", function(CartService){
        const vm = this;

        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response);

                vm.cart= response.data;


            })


        }

    }


]



}
angular
    .module("cartApp")
    .component("displayCart", displayCart);