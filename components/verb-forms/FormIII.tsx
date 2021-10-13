import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormIII extends VerbForm {

    constructor(opts: any) {
        super(opts);
        this.mdBase = this.mdM1();
    }

    //madi masculine singular
    public mdM1() {
        return this.fa + symbols.fatah + symbols.alif +
            this.ain + symbols.fatah + this.lam + symbols.fatah;
    }

    // mudari masculine singular
    public mdrM1() {
        return this.mdBase + symbols.ta + symbols.kasrah;
    }

    // mudari masculine dual
    public mdrM2() {
        return symbols.ea + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam + symbols.dammah;
    }

    // mudari masculine plural
    public mdrMP() {
        return symbols.ea + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam + symbols.dammah;
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + symbols.alif + this.lam;
    }

    // Ism fa'eel
    public ismF() {
        return symbols.mim + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam;
    }

    // madi majhul masculine singular
    public mdMjM1() {
        return symbols.alif + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam + symbols.fatah;
    }

    // madari majhul masculine singular
    public mdrMjM1() {
        return symbols.ea + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam + symbols.dammah;
    }

    // Ism maf'ul
    public ismMfl() {
        return this.ismF().replace(/(.{5}).{1}/, `$1${symbols.fatah}`);
    }

// fel nahi masculine singular
    public nahiM1() {
        return symbols.lamALif + symbols.fatah + ' ' + symbols.ta
            + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam + symbols.sukun;
    }

// fel amr masculine singular
    public amrM1() {
        return symbols.alif + symbols.fatah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam + symbols.sukun;
    }

    public zarf() {
        return this.ismMfl();
    }
}
