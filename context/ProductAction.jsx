export const fetchProducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
}

export const fetchSingleProduct = async(id) => {
    const response = await fetch("https://fakestoreapi.com/products/" + id)
    const data = await response.json();
    return data
}

export const fetchElectronics = async() => {
    const response = await fetch("https://fakestoreapi.com/products/category/electronics");
    const data = await response.json();
    return data
}

export const fetchCategory = async(category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data
}