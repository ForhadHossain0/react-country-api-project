const handleTosave =(carts) =>{
    const cartconvertstringfy = JSON.stringify(carts);
    localStorage.setItem('cartdatas',cartconvertstringfy);
}

const  getItem = () => {
    const cartconvertparse = localStorage.getItem('cartdatas');
    if(cartconvertparse){
        return JSON.parse(cartconvertparse);
    }
    return []; 
}

const handlemain = name => {
    const cart = getItem();
    cart.push(name)
    // const x = cart.push(id);
    // handleTosave(x);//wrong declaration
    handleTosave(cart);

}

const removefromLS = name => {
    const carts = getItem();

    const cartsre = carts.filter(names => names !== name);
    handleTosave(cartsre);
}

export {handlemain, getItem , removefromLS};