import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormIV extends VerbForm {

    constructor(opts: any) {
        super(opts);
        this.mdBase = symbols.qata + symbols.fatah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.dammah;
        this.mdrBase = this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam;
        this.amrBase = symbols.qata + symbols.fatah + this.mdrBase;
        this.mdMjBase = symbols.qata + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam;
        this.mdrMjBase = this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam;
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + symbols.alif + this.lam;
    }
}
