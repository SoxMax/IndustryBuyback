/*global app*/

function IndustryMaterial(name, price) {
    this.name = name;
    this.price = price;
}

app.controller("myCtrl", function($scope) {
    $scope.ores = [new IndustryMaterial("Veldspar", 1), new IndustryMaterial("Scordite", 2), new IndustryMaterial("Plagioclase", 3)];
    $scope.units = {};
    $scope.ores.forEach(function(ore) {
        $scope.units[ore.name] = 0;
    });
    $scope.totalPrice = function() {
        var total = 0;
        for (const ore of $scope.ores) {
            total += ore.price * $scope.units[ore.name];
            console.log(ore.name)
            console.log($scope.units[ore.name])
        }
        return total;
    };
});
