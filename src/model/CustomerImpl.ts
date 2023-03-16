import { ICustomer } from "../interfaces/ICustomer";

export class CustomerImpl implements ICustomer {
    constructor(public readonly id: string, 
                public readonly name: string) {}
}