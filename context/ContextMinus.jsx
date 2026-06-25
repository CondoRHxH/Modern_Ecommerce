import { useContext } from "react"


export default ContextMinus = ( {props}) => {

    const {incQty, decQty, qty} = useStateContext(Context)


    const decQty = () => {

        qty(() => setQty(qty-1))
    }

}