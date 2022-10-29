import { React } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'
import missingPurchaseAdv from '../../assets/missingPurchase.svg'

export function PurchaseDetail({purchase}) {
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit' };
    const navigate = useNavigate();

    return (
        Object.keys(purchase).length > 1? 
            <div className="purchaseContainer">
                <h2>Purchase tracking</h2>
                <div className="purchaseInfoContainer">
                    <h3>Hi there!</h3>
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
        :
            <div className='missingPurchaseContainer'>
                <img src={missingPurchaseAdv} alt="" />
                <p>We couldn't find any purchase made with that ID, please check it again. Click <span onClick={() => navigate('/')}>here</span> to go back to home page</p>
            </div>

    )
}