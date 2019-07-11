"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
        this._nom = nom;
        this._prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour('Édimbourg', 200));
        this._sejours.push(new Sejour('Paris', 100));
    }
    SejourService.prototype.rechercheSejourParNom = function (nom) {
        var unSejour = this._sejours.filter(function (sejour) {
            return sejour.getNom() == nom;
        });
        if (unSejour.length === 1) {
            return unSejour[0];
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.rechercheSejourParNom('Édimbourg'));
