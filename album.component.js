(function(){

    albumcomponentController.$Inject=["albumservice"];
    function albumcomponentController(albumservice){

        var ctrl=this;
        ctrl.$onInit=function(){
            ctrl.showAlbum=showAlbum;
            albumservice.get().then(function(albums){
                ctrl.albums=albums;
            })

        }
        function showAlbum(albumObj){
            albumservice.getAlbum(albumObj).then(function(selectedAlbum){
                ctrl.selectedalbum=selectedAlbum;
              //var  isSelected=!isSelected;
            })

        }
  

    }

    var albumComponent={
        templateUrl:"app/album/album.component.html",
        controller:albumcomponentController
    }

angular.module("album")
.component("albumComponent",albumComponent)

})();