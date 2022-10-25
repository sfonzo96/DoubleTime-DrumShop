import { React, useState} from "react";
import { db, sales } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";
import { PurchaseDetail } from '../PurchaseDetail';
import './style.scss';
import { ToastContainer, toast } from "react-toastify";

export function Tracker() {

    const [saleId, setSaleId] = useState('');
    const [purchase, setPurchase] = useState({});
    const [sumbited, setSubmited] = useState(false)

    const getId = (e) => {
        e.preventDefault();
        const purchaseId = e.target.value;
        setSaleId(purchaseId);
    }

    const getPurchase = async (e) => {
        e.preventDefault();
        try {
            const salesCollection = collection(db, sales);
            const refDoc = doc(salesCollection, saleId)
            getDoc(refDoc)
            .then(res  => {
                setSubmited(true)
                return res
            })
            .then(res => {
                if(res.data() !== undefined && Object.keys(res.data()).length > 1) {
                    setPurchase({...res.data()});
                } else {
                    setSubmited(false);
                    toast.error(`We couldn't find a sale with that ID, please check it's written properly.`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                    return;
                };
            })
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
        }
    }

    return(
        <>
            {!sumbited? (
                <div className="trackerContainer">
                    <h2>Track your purchase</h2>
                    <form onSubmit={getPurchase} className='purchaseSearchForm'>
                        <label htmlFor="trackerIdInput">
                            <input id="trackerIdInput" type="text" onChange={getId} placeholder='Your purchase ID'/>
                        </label>
                        <button type="submit" className="purchaseSearchBtn">Submit</button>
                    </form>
                </div>
            ):(
                <PurchaseDetail purchase={purchase}/>
            )}
            <ToastContainer />
        </>
    )
}