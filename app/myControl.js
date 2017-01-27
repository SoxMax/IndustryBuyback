/*global app*/

function IndustryMaterial(name, price) {
    this.Name = name;
    this.Price = price;
}

app.controller("myCtrl", function($scope) {
    $scope.ores = [new IndustryMaterial("Veldspar", 1), new IndustryMaterial("Scordite", 2), new IndustryMaterial("Plagioclase", 3)];
});
