(function(){

  function albumlistController(){
        var ctrl=this;
        ctrl.$onInit=function(){
         
        }
       

    }

    var albumlistComponent={
        bindings:{
            albums:'<',
            showAlbum:'&',
            selectedalbum:'<'

        },
        templateUrl:"app/album/albumlist/albumlist.component.html",
        controller:albumlistController
    }

angular.module("albumlist")
.component("albumlistComponent",albumlistComponent)

})();