import { useState } from "react"
import BudgetSlider from "../components/budgetSlider";

function Homepage() {
    const [user, setUser] = useState(null);

    return(
        <>
        {user ? 
        <>
        <h1>Welcome, {user.name}</h1>
        <p>Current Balance: {user.balance}€</p> 
        </>
        :
        <>
        <h1>Please login</h1>
        </>
        }
        
        </>
    )
}

export default Homepage;