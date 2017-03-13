(function(){
    angular.module("shared")
    .factory("dataservice",dataservice)
    dataservice.$Inject=["$http"];
    function dataservice($http){
var API_URL="https://jsonplaceholder.typicode.com/";
var service={
    get:get
}
return service;


function get(sourcepath,config){
    var config=config||{};
    //var f=(API_URL+sourcepath,config);
    return $http.get(API_URL+sourcepath,config).then(function(data){
        var data=data.data?data.data:data;
        return data;
    })
}


    }
})();