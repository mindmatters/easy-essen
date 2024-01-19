import { Essen } from '@/types/Essen'
export namespace Global {
    export var meineEssen: Essen[] = [
        {name: "Pizza", zutaten: "Teig, Käse, Soße", zeit: "15 min", portionen: "1", index: 0}, 
        {name: "Spaghetti", zutaten: "Nudeln, Soße", zeit: "30 min", portionen: "3", index: 1}, 
        {name: "Lasagne", zutaten: "Lasagne, Soße", zeit: "45 min", portionen: "2", index: 2}, 
        {name: "Milchreis", zutaten: "Milch, Milchreis", zeit: "45 min", portionen: "4", index: 3},
        {name: "Pfannkuchen", zutaten: "Milch, Mehl, Eier, Zucker, Zitrone", zeit: "45 min", portionen: "4", index: 4},
        {name: "Schupfnudeln", zutaten: "Schupfnudeln, Schinkenwürfel", zeit: "20 min", portionen: "2", index: 5}];
    export var EssenIndex: number = 6;
}