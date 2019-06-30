"use strict"

var SalesModuleService  = (function () {
  var salesEndpoint = "/api/sales";
  var httpCall  = {
     getSales  : function(criteria)
     {
       console.log(criteria);
        var res  = [{
          id:"0009129",
          customerInfo : { name: "Alfred Obialo" ,  address :"Abulado Badagery Express lagos", phone:"0806 927 3479"},
          items : [{
            id : "000129",
            productInfo:
              {id: "0012", description:"Best Smart phone of 2019", name : "Galaxy S10",
                attributes :[
                  { make : "Samsung Inc"},
                  { color : "Smoke Gray"},
                  { storageCapacity : "512 GB"},
                  { memoryCapacity : "12 GB"},
                  { screen : "Conning Gorilla Glass 6"},

                ]  ,
                price : 1200,
                currency  : { id: "USD" , symbol :"$", country : "United States Of America"},
                unitOfMeasure : "Unit",
                stock : 7
            },
            qty : 2,
            price : 1200 ,//this.productInfo.price,
            lineTotal : this.qty * this.price,
            discount:0
          }],
          total :  function(){
              return 3000;//lineTotal;
          }

        }]
        return res;
     }
  }

  return httpCall;

})();

var SalesOrder = (function (salesApiService) {


  var salesOrder  = function () {
    this.services = salesApiService;
  }
  salesOrder.prototype.getSalesReport =
    function (criteria) {
      //alert("Get Sales Report Called!");
      return this.services.getSales(criteria);
    }

  return salesOrder
})( SalesModuleService);

// var salesOrder =  new SalesOrder();
// var result=  salesOrder.getSalesReport({query:"recent sales", pageSize :10});
console.log(new SalesOrder().getSalesReport({query:"recent sales", pageSize :10}));
