/*global app*/

function IndustryMaterial(name, price) {
    return {
        name: name,
        price: price
    }
}

app.controller("myCtrl", function($scope) {
    $scope.ores = [IndustryMaterial("Spodumain", 3700), IndustryMaterial("Bistot", 5100), IndustryMaterial("Crokite", 3700), IndustryMaterial("Arkonor", 4400), IndustryMaterial("Gneiss", 1200),
        IndustryMaterial("Gneiss", 4400), IndustryMaterial("Dark Ochre", 1300), IndustryMaterial("Mercoxit", 21000), IndustryMaterial("Bacteria", 340), IndustryMaterial("Electrolytes", 390),
        IndustryMaterial("Oxygen", 305), IndustryMaterial("Plasmoids", 280), IndustryMaterial("Water", 415), IndustryMaterial("Synthetic Oil", 8000), IndustryMaterial("Superconductors", 9000),
        IndustryMaterial("Oxides", 10000), IndustryMaterial("Coolant", 10500), IndustryMaterial("Mechanical Parts", 10000), IndustryMaterial("Consumer Electronics", 8000), IndustryMaterial("Water-Cooled CPU", 9000),
        IndustryMaterial("Nanites", 6000), IndustryMaterial("Livestock", 9500), IndustryMaterial("Construction Blocks", 8500), IndustryMaterial("Test Cultures", 10000), IndustryMaterial("Fertilizer", 11000),
        IndustryMaterial("Ukomi Superconductors", 65000), IndustryMaterial("Robotics", 80000), IndustryMaterial("Condensates", 55000), IndustryMaterial("Supercomputers", 105000), IndustryMaterial("Biotech Research Reports", 108000),
        IndustryMaterial("Cryoprotectant Solution", 115000), IndustryMaterial("Organic Mortar Applicators", 1000000), IndustryMaterial("Wetware Mainframe", 2400000)
    ];
    $scope.units = {};
    $scope.ores.forEach(function(ore) {
        $scope.units[ore.name] = 0;
    });
    $scope.totalPrice = function() {
        var total = 0;
        for (const ore of $scope.ores) {
            total += ore.price * $scope.units[ore.name];
        }
        return total;
    };
});
