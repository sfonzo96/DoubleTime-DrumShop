import { React} from "react";
import './style.scss'

export function PurchaseDetail({purchase}) {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit' };

    return (
        <div className="trackerContainer">
            <h2>Purchase tracking</h2>
            <div className="purchaseInfoContainer">
                <h3>Hello {purchase.buyer.fullName}!</h3>
                <p>This purchase has been made on {purchase.date.toDate().toLocaleDateString('en-US', dateOptions)}</p>
                <div className="purchaseItemsContainer">
                    {purchase.items.map(item => (
                        <div className='purchaseItem' key={`${item.pickedSize}-${item.title}`}>
                            <div>{item.pickedSize}" {item.title}</div>
                            <div>{item.price}</div>
                            <div>{item.amount}</div>
                            <div>{item.amount * item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="statusContainer">
                Order status: {<span className={`${purchase.status.toLowerCase()}Status statusStyle` }>{purchase.status}</span>}
            </div>
        </div>
    )
}