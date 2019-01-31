
export class Event {

    id: Number;
    name: String;
    category: String;
    place: String;
    address: String;
    initDate: Date;
    endDate: Date;
    type: Boolean;



    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
