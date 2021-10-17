import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormVI extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdBase = symbols.ta + symbols.fatah + this.fa + symbols.fatah +
            symbols.alif + this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrBase = this.mdBase;
        this.amrBase = this.mdBase;
        this.mdMjBase = symbols.ta + symbols.dammah + this.fa + symbols.dammah +
            symbols.oao + this.ain + symbols.kasrah + this.lam;
        this.mdrMjBase = this.mdBase;
    }

    // masder
    public msdr() {
        return symbols.ta + symbols.fatah + this.fa + symbols.fatah + symbols.alif +
            this.ain + symbols.dammah + this.lam + symbols.dun;
    }

    // Ism fa'eel
    public ismF() {
        return symbols.mim + symbols.dammah + symbols.ta + symbols.fatah + this.fa + symbols.fatah +
            symbols.alif + this.ain + symbols.kasrah + this.lam + symbols.dun;
    }
}
