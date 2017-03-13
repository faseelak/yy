(function () {
    angular.module("album")
        .factory("albumservice", albumservice)
    albumservice.$Inject = ["dataservice"];
    function albumservice(dataservice) {

        var service = {
            get: get,
            getAlbum: getAlbum
        }
        return service;


        function get() {
            var albums = [];
            var dataIndex = 0;
            var albumID = 0;
            return dataservice.get("photos").then(function (data) {
                if (data && data.length > 0) {
                    albums.push(data[0].albumId);
                    albumID = data[0].albumId;

                    for (dataIndex = 1; dataIndex < data.length; dataIndex++) {
                        if (albumID != data[dataIndex].albumId) {
                            albumID = data[dataIndex].albumId;
                            albums.push(albumID);
                        }
                        else {
                            albumID = albumID;
                        }

                    }

                }
                return albums;
            })
        }
        function getAlbum(albumObj) {

            var parameter = albumObj.albumObj;
            var config = {
                params: { albumId: parameter }
            }
            var selectedAlbum = [];
            var dataIndex = 0;

            return dataservice.get("photos", config).then(function (data) {
                if (data && data.length > 0) {

                    for (dataIndex = 0; dataIndex < data.length; dataIndex++) {

                        selectedAlbum.push(data[dataIndex].thumbnailUrl);
                    }

                }
                return selectedAlbum;
            })
        }
    }



})();