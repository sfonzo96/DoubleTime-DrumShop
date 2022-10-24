import { React, useState} from "react";
import { db, sales } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";
import { DotPulse } from '@uiball/loaders';
import { PurchaseDetail } from '../PurchaseDetail';

export function Tracker() {

    const [saleId, setSaleId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmited, setIsSubmited] = useState(false);
    const [purchase, setPurchase] = useState({});

    const getId = (e) => {
        e.preventDefault();
        const purchaseId = e.target.value;
        setSaleId(purchaseId);
    }

    const getPurchase = async (e) => {
        e.preventDefault();
        setIsSubmited(true);
        const salesCollection = collection(db, sales);
        const refDoc = doc(salesCollection, saleId)
        getDoc(refDoc)
        .then(result  => {
            setPurchase({...result.data()});
            setIsLoading(false);
        })
    }

    return(
        <>
            {!isSubmited?(
                <>
                    <h2>Track your purchase</h2>
                    <form onSubmit={getPurchase} className='purchaseSearchForm'>
                        <label htmlFor="trackerIdInput">
                            <input id="trackerIdInput" type="text" onChange={getId}/>
                        </label>
                        <button type="submit" className="purchaseSearchBtn">Submit</button>
                    </form>
                </>
            ):(
                <>
                    {isLoading?
                        <DotPulse size={40} speed={1.3} color="#111010"/>
                    :
                        <PurchaseDetail purchase={purchase}/>
                    }
                </>    
            )}
        </>
    )
}