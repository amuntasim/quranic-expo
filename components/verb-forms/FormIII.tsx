import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormIII extends VerbForm {

    constructor(opts: any) {
        super(opts);
        this.mdBase = this.fa + symbols.fatah + symbols.alif +
            this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.dammah;
        this.mdrBase = this.fa + symbols.fatah + symbols.alif +
            this.ain + symbols.kasrah + this.lam;
        this.amrBase = this.mdrBase;
        this.mdMjBase = this.fa + symbols.dammah + symbols.oao +
            this.ain + symbols.kasrah + this.lam;
        this.mdrMjBase = this.mdBase;
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + symbols.alif + this.lam;
    }
}
