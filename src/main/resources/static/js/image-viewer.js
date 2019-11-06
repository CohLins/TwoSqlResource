  function getQuery(key) {
            if(!location.search){
                return null
            }
            var queryArr = location.search.split("?")[1].split("&");
            var queryObj = {};
            for (var i = 0 ; i < queryArr.length; i++) {
                var hash = queryArr[i].split("=");
                queryObj[hash[0]] = hash[1];
            }
            return queryObj[key]
        }


        $(document).ready(function () {
            $('#imageFullScreen').attr('src',getQuery('url'))
            $('#imageFullScreen').smartZoom({ 'containerClass': 'zoomableContainer' });
            $('#zoomInButton,#zoomOutButton').bind("click", zoomButtonClickHandler);

            function zoomButtonClickHandler(e) {
                var scaleToAdd = 0.8;
                if (e.target.id == 'zoomOutButton')
                    scaleToAdd = -scaleToAdd;
                $('#imageFullScreen').smartZoom('zoom', scaleToAdd);
            }
        });    