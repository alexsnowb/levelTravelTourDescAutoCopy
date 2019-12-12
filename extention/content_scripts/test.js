document.onkeyup = function (e) {
    if (e.ctrlKey && e.key === 'm') {
        copyTitle();
    }
};

    function copyTitle() {
        var result = '';

        var titleList = document.getElementsByClassName("catalogs-ttl-a");
        for (var i = 0; i < titleList.length; i++) {
            title = titleList[i].innerText;
            title = title.split('(')[0];
            title = title.split('-')[0];
            title = title.replace(' 5*', '');
            title = title.replace(' 4*', '');
            title = title.replace(' 3*', '');
            title = title.replace(' 2*', '');
            title = title.replace(' 1*', '');


            result.concat(title);

        }

        console.log(result);
        navigator.clipboard.writeText(result).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

