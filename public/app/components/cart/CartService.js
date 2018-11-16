"use strict";

function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
        }
}

angular
    .module("cartApp")
    .service("CartService", CartService);