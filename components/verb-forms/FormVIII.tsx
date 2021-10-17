import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormVIII extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdBase = symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            symbols.ta + symbols.fatah + this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrBase = this.fa + symbols.sukun + symbols.ta + symbols.fatah +
            this.ain + symbols.kasrah + this.lam;
        this.amrBase = symbols.alif + symbols.kasrah + this.mdrBase;
        this.mdMjBase = symbols.alif + symbols.dammah + this.fa + symbols.sukun +
            symbols.ta + symbols.dammah + this.ain +  symbols.kasrah + this.lam;
        this.mdrMjBase = this.mdBase;
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah  + this.fa + symbols.sukun + symbols.ta +
           symbols.kasrah + this.ain + symbols.fatah + this.lam + symbols.dun;
    }
}
