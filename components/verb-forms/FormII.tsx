import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormII extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdBase = this.fa + symbols.fatah +
            this.ain + symbols.shadda + symbols.fatah + this.lam;
        this.mdrVowel = symbols.dammah;
        this.mdrBase = this.fa + symbols.fatah +
            this.ain + symbols.shadda + symbols.kasrah + this.lam;
        this.amrBase = this.mdrBase;
        this.mdMjBase = this.fa + symbols.dammah +
            this.ain + symbols.shadda + symbols.kasrah + this.lam;
        this.mdrMjBase = this.mdBase;
    }

    // masder
    public msdr() {
        return symbols.ta + symbols.fatah  + this.fa + symbols.sukun +
            this.ain + symbols.kasrah+ symbols.ea +  this.lam + symbols.dun;
    }

}
