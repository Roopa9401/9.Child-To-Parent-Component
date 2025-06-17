import { LightningElement } from 'lwc';

export default class LwcComp11_ChildComp11 extends LightningElement {
    
    
    handleClick(){
        const evt= new CustomEvent('showmessage',{detail:{message:'Child says Hello!'}})
        this.dispatchEvent(evt);
    }

}