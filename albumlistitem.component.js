(function(){

  function albumlistitemcontroller(){

        var ctrl=this;
        ctrl.$onInit=function(){
           
        
        }
      
    }

    var albumlistitemComponent={
        bindings:{
            album:'<',
            showAlbum:'&',
            t:'<',
            selectedalbum:'<'

        },
        templateUrl:"app/album/albumlist/albumlistitem/albumlistitem.component.html",
       controller:albumlistitemcontroller
    }

angular.module("albumlistitem")
.component("albumlistitemComponent",albumlistitemComponent)

})();