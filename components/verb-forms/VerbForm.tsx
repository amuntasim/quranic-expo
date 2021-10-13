import {symbols} from "./resources";

export default class VerbForm {
    protected root: string;
    protected fa: string;
    protected ain: string;
    protected lam: string;
    // madi base form
    protected mdBase: any;

    constructor(opts: any) {
        this.root = opts.root;
        const rootLetters = opts.root.replace(/\s+/g, '').split('');
        this.fa = rootLetters[0];
        this.ain = rootLetters[1];
        this.lam = rootLetters[2];

    }

    public mdM1() {
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
        return this.mdBase + symbols.sukun + symbols.nun +
            symbols.fatah;
    }

    //madi masculine 2nd person singular
    public mdM21() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.fatah;;
    }

    //madi masculine 2nd person dual
    public mdM22() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.fatah;
    }

    //madi masculine 2nd person plural
    public mdM2P() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.sukun;;
    }

    //madi feminine 2nd person singular
    public mdF21() {
        return  this.mdBase + symbols.sukun + symbols.ta + symbols.kasrah;
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
        return this.mdBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    // mudari masculine singullar
    public mdrM1() {
    }

    //mudari masculine dual
    public mdrM2() {
        return this.mdM1() + symbols.alif;
    }

    //mudari masculine plural
    public mdrMP() {
        return this.mdBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif;
    }
    //mudari feminine singular
    public mdrF1() {
        return this.mdM1() + symbols.ta + symbols.sukun;
    }

    //mudari feminine dual
    public mdrF2() {
        return this.mdM1() + symbols.ta + symbols.fatah + symbols.alif;
    }

    //mudari feminine plural
    public mdrFP() {
        return this.mdBase + symbols.sukun + symbols.nun +
            symbols.fatah;
    }

    //mudari masculine 2nd person singular
    public mdrM21() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.fatah;;
    }

    //mudari masculine 2nd person dual
    public mdrM22() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.fatah;
    }

    //mudari masculine 2nd person plural
    public mdrM2P() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.sukun;;
    }

    //mudari feminine 2nd person singular
    public mdrF21() {
        return  this.mdBase + symbols.sukun + symbols.ta + symbols.kasrah;
    }

    //mudari feminine 2nd person dual
    public mdrF22() {
        return this.mdM22();
    }

    //mudari feminine 2nd person plural
    public mdrF2P() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.nun + symbols.shadda + symbols.fatah;
    }
    //mudari 1st  person singular (both)
    public mdrB1() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah;
    }
    //mudari 1st  person all (both)
    public mdrB3() {
        return this.mdBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

}
