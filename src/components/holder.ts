import Holder from "@/components/holder/class";
import Button from "@/components/button/class";

const holder = new Holder()
document.getElementById('cards-wrapper').append(holder.component)

document.body.addEventListener(
    'click',
    _ => holder.show({
        title: 'Some process...',
        controls: [
            new Button('Some action', _ => 'Some action')
        ]
    })
)

export default holder
