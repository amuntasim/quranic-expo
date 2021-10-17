import {symbols} from "./resources";

const nahiPrefix = symbols.lamALif + symbols.fatah + ' ' + symbols.ta ;

export default class VerbForm {
    protected root: string;
    protected fa: string;
    protected ain: string;
    protected lam: string;

    protected mdBase: any;
    protected mdrBase: any;
    protected mdrVowel: any;
    protected amrBase: any;
    protected mdMjBase: any;
    protected mdrMjBase: any;

    constructor(opts: any) {
        this.root = opts.root;
        const rootLetters = opts.root.replace(/\s+/g, '').split('');
        this.fa = rootLetters[0];
        this.ain = rootLetters[1];
        this.lam = rootLetters[2];
    }

    //madi masculine singular
    public mdM1() {
        return this.mdBase + symbols.fatah;
    }

    // Ism fa'eel
    public ismF() {
        return symbols.mim + symbols.dammah + this.mdrBase + symbols.dun;
    }

    // madi majhul masculine singular
    public mdMjM1() {
        return this.mdMjBase + symbols.fatah;
    }

    public mdMjM2() {
        return this.mdMjM1() + symbols.alif;
    }

    public mdMjMP() {
        return this.mdMjBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif;
    }

    public mdMjF1() {
        return this.mdMjM1() + symbols.ta + symbols.sukun;
    }

    public mdMjF2() {
        return this.mdMjM1() + symbols.ta + symbols.fatah + symbols.alif;
    }

    public mdMjFP() {
        return this.mdMjBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    public mdMjM21() {
        return this.mdMjBase + symbols.sukun + symbols.ta + symbols.fatah;
    }

    public mdMjM22() {
        return this.mdMjBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.fatah;
    }

    public mdMjM2P() {
        return this.mdMjBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.sukun;
        ;
    }

    public mdMjF21() {
        return this.mdMjBase + symbols.sukun + symbols.ta + symbols.kasrah;
    }

    public mdMjF22() {
        return this.mdMjM22();
    }

    public mdMjF2P() {
        return this.mdMjBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.nun + symbols.shadda + symbols.fatah;
    }

    public mdMjB1() {
        return this.mdMjBase + symbols.sukun + symbols.ta + symbols.dammah;
    }

    public mdMjB3() {
        return this.mdMjFP();
    }

    // Ism maf'ul
    public ismMfl() {
        const {length} = this.ismF();
        return this.ismF().substr(0, length - 3) + symbols.fatah +
            this.ismF().substr(length - 2, length-1);
    }

    // fel amr masculine singular
    public amrM1() {
        return  this.amrBase + symbols.sukun;
    }
    // fel amr masculine dual
    public amrM2() {
        return  this.amrBase + symbols.fatah + symbols.alif;
    }
    // fel amr masculine plural
    public amrMP() {
        return  this.amrBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif ;
    }
    // fel amr feminine singular
    public amrF1() {
        return  this.amrBase + symbols.kasrah + symbols.ea + symbols.sukun;
    }
    // fel amr feminine dual
    public amrF2() {
        return  this.amrM2();
    }
  // fel amr feminine plural
    public amrFP() {
        return  this.amrBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    // fel nahi masculine singular
    public nahiM1() {
        return nahiPrefix + this.mdrVowel + this.mdrBase + symbols.sukun;
    }

    public nahiM2() {
        return nahiPrefix + this.mdrVowel + this.mdrBase + symbols.fatah + symbols.alif;
    }

    public nahiMP() {
        return nahiPrefix + this.mdrVowel + this.mdrBase + symbols.dammah
            + symbols.oao + symbols.sukun + symbols.alif;
    }

    public nahiF1() {
        return nahiPrefix + this.mdrVowel + this.mdrBase + symbols.kasrah +
            symbols.ea + symbols.sukun;
    }

    public nahiF2() {
        return this.nahiM2();
    }

    public nahiFP() {
        return nahiPrefix + this.mdrVowel + this.mdrBase + symbols.sukun +
            symbols.nun + symbols.fatah;
    }

    public zarf() {
        return this.ismMfl();
    }

    //madi masculine dual
    public mdM2() {
        return this.mdM1() + symbols.alif;
    }

    //madi masculine plural
    public mdMP() {
        return this.mdBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif;
    }

    //madi feminine singular
    public mdF1() {
        return this.mdM1() + symbols.ta + symbols.sukun;
    }

    //madi feminine dual
    public mdF2() {
        return this.mdM1() + symbols.ta + symbols.fatah + symbols.alif;
    }

    //madi feminine plural
    public mdFP() {
        return this.mdBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //madi masculine 2nd person singular
    public mdM21() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.fatah;
    }

    //madi masculine 2nd person dual
    public mdM22() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.fatah;
    }

    //madi masculine 2nd person plural
    public mdM2P() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.sukun;
    }

    //madi feminine 2nd person singular
    public mdF21() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.kasrah;
    }

    //madi feminine 2nd person dual
    public mdF22() {
        return this.mdM22();
    }

    //madi feminine 2nd person plural
    public mdF2P() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.nun + symbols.shadda + symbols.fatah;
    }

    //madi 1st  person singular (both)
    public mdB1() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah;
    }

    //madi 1st  person all (both)
    public mdB3() {
        return this.mdFP();
    }

    // mudari masculine singullar
    public mdrM1() {
        return symbols.ea + this.mdrVowel + this.mdrBase + symbols.dammah;
    }

    //mudari masculine dual
    public mdrM2() {
        return symbols.ea + this.mdrVowel + this.mdrBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari masculine plural
    public mdrMP() {
        return symbols.ea + this.mdrVowel + this.mdrBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine singular
    public mdrF1() {
        return symbols.ta + this.mdrVowel + this.mdrBase + symbols.dammah;
    }

    //mudari feminine dual
    public mdrF2() {
        return symbols.ta + this.mdrVowel + this.mdrBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari feminine plural
    public mdrFP() {
        return symbols.ea + this.mdrVowel + this.mdrBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari masculine 2nd person singular
    public mdrM21() {
        return this.mdrF1();
    }

    //mudari masculine 2nd person dual
    public mdrM22() {
        return this.mdrF2();
    }

    //mudari masculine 2nd person plural
    public mdrM2P() {
        return symbols.ta + this.mdrVowel + this.mdrBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine 2nd person singular
    public mdrF21() {
        return symbols.ta + this.mdrVowel + this.mdrBase + symbols.kasrah +
            symbols.ea + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine 2nd person dual
    public mdrF22() {
        return this.mdrF2();
    }

    //mudari feminine 2nd person plural
    public mdrF2P() {
        return symbols.ta + this.mdrVowel + this.mdrBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari 1st  person singular (both)
    public mdrB1() {
        return symbols.qata + this.mdrVowel + this.mdrBase + symbols.dammah;
    }

    //mudari 1st  person all (both)
    public mdrB3() {
        return symbols.nun + this.mdrVowel + this.mdrBase + symbols.dammah;
    }

    // mudari majhul masculine singullar
    public mdrMjM1() {
        return symbols.ea + symbols.dammah + this.mdrMjBase + symbols.dammah;
    }

    //mudari masculine dual
    public mdrMjM2() {
        return symbols.ea + symbols.dammah + this.mdrMjBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari masculine plural
    public mdrMjMP() {
        return symbols.ea + symbols.dammah + this.mdrMjBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine singular
    public mdrMjF1() {
        return symbols.ta + symbols.dammah + this.mdrMjBase + symbols.dammah;
    }

    //mudari feminine dual
    public mdrMjF2() {
        return symbols.ta + symbols.dammah + this.mdrMjBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari feminine plural
    public mdrMjFP() {
        return symbols.ea + symbols.dammah + this.mdrMjBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari masculine 2nd person singular
    public mdrMjM21() {
        return this.mdrMjF1();
    }

    //mudari masculine 2nd person dual
    public mdrMjM22() {
        return this.mdrMjF2();
    }

    //mudari masculine 2nd person plural
    public mdrMjM2P() {
        return symbols.ta + symbols.dammah + this.mdrMjBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine 2nd person singular
    public mdrMjF21() {
        return symbols.ta + symbols.dammah + this.mdrMjBase + symbols.kasrah +
            symbols.ea + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine 2nd person dual
    public mdrMjF22() {
        return this.mdrMjF2();
    }

    //mudari feminine 2nd person plural
    public mdrMjF2P() {
        return symbols.ta + symbols.dammah + this.mdrMjBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari 1st  person singular (both)
    public mdrMjB1() {
        return symbols.qata + symbols.dammah + this.mdrMjBase + symbols.dammah;
    }

    //mudari 1st  person all (both)
    public mdrMjB3() {
        return symbols.nun + symbols.dammah + this.mdrMjBase + symbols.dammah;
    }

}
