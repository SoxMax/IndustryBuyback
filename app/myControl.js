/*global app gapi*/

function IndustryMaterial(name, type, price) {
    return {
        name: name,
        type: type,
        price: price
    }
}

app.controller("myCtrl", function($scope) {

    function initClient() {
        // Initialize the JavaScript client library.
        gapi.client.init({
            'apiKey': 'AIzaSyBKZwtEyuUFaLne6VybUZY8YGZ9n8BA9d8',
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
        }).then(function() {
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: '1chAdg92S0KEXY9zlKDwWI5ft2w8ygJBDSgWk-JxUrpw',
                range: 'Materials!A2:C',
                valueRenderOption: 'UNFORMATTED_VALUE'
            }).then(function(response) {
                var materials = [];
                for (const row of response.result.values) {
                    materials.push(IndustryMaterial(row[1], row[0], row[2]));
                }
                $scope.ores = materials;
                $scope.ores.forEach(function(ore) {
                    $scope.units[ore.name] = 0;
                });
                $scope.$apply();
            });
        });
    };
    gapi.load('client', initClient);

    $scope.ores = [];
    $scope.units = {};
    $scope.totalPrice = function() {
        var total = 0;
        for (const ore of $scope.ores) {
            total += ore.price * $scope.units[ore.name];
        }
        return total;
    };
});
