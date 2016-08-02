import {inject, customElement, bindable} from "aurelia-framework";
import {bindingMode as BindingMode} from "aurelia-binding";

@inject(Element)
@customElement("wj-input-date")
export class WjInputDate {

    element: HTMLElement;
    inputDate: wijmo.input.InputDate;
    @bindable selectedDate: Date;

    @bindable disabled: boolean;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    selectedDateChanged(newValue: Date, oldValue: Date) {
        if (this.inputDate) this.inputDate.value = newValue;
    }

    disabledChanged(newValue: any, oldValue: any) {
        if (this.inputDate) this.inputDate.disabled = newValue;
    }

    attached() {
        this.inputDate = new wijmo.input.InputDate(this.element);
        this.inputDate.disabled = this.disabled;
        this.inputDate.required = false;
        this.inputDate.value = this.selectedDate;

        this.inputDate.valueChanged.addHandler(() => {
            this.selectedDate = this.inputDate.value;
        });
    }
}
