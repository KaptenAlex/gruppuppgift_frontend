
export default class {

    controlVatNrFormat(vatNr) {
        const controlVatNrInputRegExp = /(SE)\d{10}$/;
        if (controlVatNrInputRegExp.test(vatNr) == false) {
            return false;
        } else {
            return true;
        }
    }

}
