import { LightningElement } from 'lwc';

export default class LwcComp10_ParentComp2 extends LightningElement {
    childmessage;

    childevent(event){
        this.childmessage=event.detail.message;
    }


}