const symbols = {
    alif: 'ا', ba: 'ب', ta: 'ت', sa: 'ث', jim: 'ج', ha: 'ح', kho: 'خ',
    dal: 'د', jal: 'ذ', ro: 'ر', jha: 'ز', sin: 'س', shin: 'ش', sod: 'ص',
    dod: 'ض', taw: 'ط', jaw: 'ظ', ain: 'ع', goin: 'غ', fa: 'ف', qof: 'ق',
    kaf: 'ك', lam: 'ل', mim: 'م', nun: 'ن', hha: 'ه', oao: 'و', ea: 'ي',
    hamza: 'ء', roundTa: 'ة', maksurah: 'ى', mamdudah: 'آ', qata: 'أ', qate: 'إ',
    fatah: 'َ', dammah: 'ُ', kasrah: 'ِ', dun: 'ٌ', dan: 'ً', din: 'ٍ', sukun: 'ْ', shadda: 'ّ',
    lamALif: 'لا',
};


class VerbForm {
    protected root: string;
    protected fa: string;
    protected ain: string;
    protected lam: string;

    constructor(opts: any) {
        this.root = opts.root;
        const rootLetters = opts.root.replace(/\s+/g, '').split('');
        this.fa = rootLetters[0];
        this.ain = rootLetters[1];
        this.lam = rootLetters[2];
    }
}

class FormI extends VerbForm {
    // constructor(opts: any) {super(opts); }
}

class FormII extends VerbForm {
    //madi masculine single
    public mdM1() {
        return 'mdM1' + this.root;
    }
}

class FormIII extends VerbForm {
    //madi masculine single
    public mdM1() {
        return 'mdM1' + this.root;
    }
}

class FormIV extends VerbForm {
    // madi base form
    protected mdBase: any;

    constructor(opts: any) {
        super(opts);
        this.mdBase = this.mdM1().split('').slice(0, -1).join('');
    }

    //madi masculine singular
    public mdM1() {
        return symbols.alif + symbols.fatah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam + symbols.fatah;
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
    //1st  person singular (both)
    public mdB1() {
        return this.mdBase + symbols.sukun + symbols.ta + symbols.dammah;
    }
    //1st  person all (both)
    public mdB3() {
        return this.mdBase + symbols.sukun + symbols.nun + symbols.fatah;
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

class FormV extends VerbForm {
}

class FormVI extends VerbForm {
}

class FormVII extends VerbForm {
}

class FormVIII extends VerbForm {
}

class FormIX extends VerbForm {
}

class FormX extends VerbForm {
}

class FormXI extends VerbForm {
}

class FormXII extends VerbForm {
}

const formMap = {
    'I': FormI, 'II': FormII, 'III': FormIII,
    'IV': FormIV, 'V': FormV, 'VI': FormVI,
    'VII': FormVII, 'VIII': FormVIII, 'IX': FormIX,
    'X': FormX, 'XI': FormXI, 'XII': FormXII,
}

export function verbFormInst(opts: any) {
    // @ts-ignore
    return new (formMap[opts.form])(opts);
}
