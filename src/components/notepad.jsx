
    import { db, products } from "../../firebase/firebase";
    import { collection, getDocs, query, where} from "firebase/firestore";
    
    const [dbProducts, setDbProducts] = useState([]);
    const [notAvailableProducts, setNotAvailableProducts] = useState([]);

    const getDocsAndSetDbProducts = () => {
        const productCollection = collection(db, products);
        getDocs(productCollection)
        .then((data) => {
            const list = data.docs.map((doc) => {
                return { ...doc.data()};
            });;
            console.log(list);
            setDbProducts(list);
        });
    }

    const verifyStock = (cart, dbProducts) => {
        getDocsAndSetDbProducts();
        const missingProducts = []
        for (const item in cart) {
            console.log(dbProducts.find(doc => doc.id === item.id));
            const matchingProduct = dbProducts.find(obj => obj.id === item.id)
            item.amount > matchingProduct.stock && missingProducts.push(matchingProduct);
        }
        missingProducts.length > 0 && setNotAvailableProducts(missingProducts);
        console.log(notAvailableProducts)
    }

    cart.length > 0 && verifyStock(cart, dbProducts);

    /* const qryFilter = query(productCollection, where('id', 'in', [...cart.map(item => item.id)])); */