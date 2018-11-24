"use strict";

function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/phrases"
        });
        }
    self.postItem = (newItem) => {
    return $http({
      url: "/phrases",
      method: "POST",
      data: newItem
    });
  };
  self.deleteItem = (id) => {
    return $http({
      url: `/phrases/${id}`,
      method: "DELETE"
    });
  };
  self.updateItem = (editedItem) => {
    return $http({
      url: `/phrases/${editedItem.id}`,
      method: "PUT", 
      data: editedItem
    });
  };
}

angular
    .module("cartApp")
    .service("CartService", CartService);