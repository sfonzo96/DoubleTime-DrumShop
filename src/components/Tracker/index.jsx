import { React, useState} from "react";
import { db, sales } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";
import { PurchaseDetail } from '../PurchaseDetail';
import { DotPulse } from '@uiball/loaders';
import { ToastContainer, toast } from "react-toastify";
import './style.scss';

export function Tracker() {

    const [saleId, setSaleId] = useState('');
    const [purchase, setPurchase] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmited, setIsSubmited] = useState(false);

    const getId = (e) => {
        e.preventDefault();
        const purchaseId = e.target.value;
        setSaleId(purchaseId);
    }

    const getPurchase = async (e) => {
        e.preventDefault();
        try {
            const salesCollection = collection(db, sales);
            const refDoc = doc(salesCollection, saleId);
            await getDoc(refDoc)
            .then(res  => {
                setPurchase({...res.data()});
            })
            setIsSubmited(true);
        } catch (error) {
            toast.error(`Oops, something happened and we couldn't check out database. Please try again...`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <>
            {!isSubmited? (
                <div className="trackerContainer">
                    <h2>Track your purchase</h2>
                    <form onSubmit={getPurchase} className='purchaseSearchForm'>
                        <label htmlFor="trackerIdInput">
                            <input id="trackerIdInput" type="text" onChange={getId} placeholder='Your purchase ID' required/>
                        </label>
                        <button type="submit" className="purchaseSearchBtn">Submit</button>
                    </form>
                </div>
            ):(isLoading? 
                <DotPulse size={40} speed={1.3} color="#111010"/>
                :
                <PurchaseDetail purchase={purchase}/>
            )}
            <ToastContainer />
        </>
    )
}