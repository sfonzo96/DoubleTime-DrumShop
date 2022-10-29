import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { db, categories } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import './style.scss'

function NavUl() {

    const [categoriesList, setCategoriesList] = useState([]);
    
    const getDocsAndSetCategories = () => {
        const categoriesCollection = collection(db, categories);
        getDocs(categoriesCollection)
        .then((data) => {
            const list = data.docs.map((cat) => {
                return { ...cat.data(), id: cat.id };
            });
            setCategoriesList(list);
        });
    }

    useEffect(() => {
        getDocsAndSetCategories();
    }, [])

    return (
        <>
            <nav>
                <ul>
                    {categoriesList.map(categorie => <li key={categorie.id}><Link to={categorie.key === 'home'? '/' : (categorie.key === 'tracker'? 'tracker' : `category/${categorie.key}`)}>{categorie.title}</Link></li>)}
                </ul>
            </nav>
        </>
    )
}

export default NavUl