class Sejour {

    private _nom: string;
    private _prix: number;

    constructor(private nom: string, private prix: number) {
        this._nom = nom;
        this._prix = prix;
    }

    getNom() {
        return this._nom
    }

    getPrix() {
        return this._prix
    }
}

class SejourService {

    private _sejours: Sejour[];

    constructor() {
        this._sejours = [];
        this._sejours.push(new Sejour('Édimbourg', 200));
        this._sejours.push(new Sejour('Paris', 100));
    }

    rechercheSejourParNom(nom:string):Sejour|undefined { 
        let unSejour = this._sejours.filter(sejour => {
            return sejour.getNom() == nom;
        });
        if(unSejour.length === 1){
            return unSejour[0];
        }
    }
}

const sejourService:SejourService = new SejourService();
console.log(sejourService.rechercheSejourParNom('Édimbourg'));
