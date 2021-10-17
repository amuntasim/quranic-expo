import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormVII extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdBase = symbols.alif + symbols.kasrah + symbols.nun + symbols.sukun +
            this.fa + symbols.fatah +  this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrBase = symbols.ea + symbols.kasrah + symbols.nun + symbols.sukun +
            this.fa + symbols.fatah +  this.ain + symbols.kasrah + this.lam;
        this.amrBase = symbols.alif + symbols.kasrah + symbols.nun + symbols.sukun +
            this.fa + symbols.fatah +  this.ain + symbols.kasrah + this.lam;
    }

    // masder
    public msdr() {
        return symbols.ta + symbols.fa + this.fa + symbols.fa +
            this.ain + symbols.shadda + symbols.dammah + this.lam + symbols.dun;
    }

    // No majhul for form VII
    mdMjM1 = () => '';
    mdMjM2 = () => '';
    mdMjMP = () => '';
    mdMjF1 = () => '';
    mdMjF2 = () => '';
    mdMjFP = () => '';
    mdMjM21 = () => '';
    mdMjM22 = () => '';
    mdMjM2P = () => '';
    mdMjF21 = () => '';
    mdMjF22 = () => '';
    mdMjF2P = () => '';
    mdMjB1 = () => '';
    mdMjB3 = () => '';

    mdrMjM1 = () => '';
    mdrMjM2 = () => '';
    mdrMjMP = () => '';
    mdrMjF1 = () => '';
    mdrMjF2 = () => '';
    mdrMjFP = () => '';
    mdrMjM21 = () => '';
    mdrMjM22 = () => '';
    mdrMjM2P = () => '';
    mdrMjF21 = () => '';
    mdrMjF22 = () => '';
    mdrMjF2P = () => '';
    mdrMjB1 = () => '';
    mdrMjB3 = () => '';
}
