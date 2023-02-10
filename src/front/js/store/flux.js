//flux
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            estalogueado: false,
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            carrito: [{
                    sku: 1,
                    name: "producto",
                    url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
                    shipping: "3 semanas",
                    price: 10,
                    quantity: 1,
                    subtotal: 10,
                },
                {
                    sku: 2,
                    name: "producto II",
                    url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
                    shipping: "3 semanas",
                    price: 10,
                    quantity: 1,
                    subtotal: 10,
                },
                {
                    sku: 3,
                    name: "producto III",
                    url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
                    shipping: "3 semanas",
                    price: 10,
                    quantity: 1,
                    subtotal: 10,
                },
            ],
            favoritos: [{
                    sku: 1,
                    name: "producto",
                    url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
                    shipping: "3 semanas",
                    price: 10,
                    quantity: 1,
                    subtotal: 10,
                },
                {
                    sku: 2,
                    name: "producto II",
                    url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
                    shipping: "3 semanas",
                    price: 10,
                    quantity: 1,
                    subtotal: 10,
                },
                {
                    sku: 3,
                    name: "producto III",
                    url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
                    shipping: "3 semanas",
                    price: 10,
                    quantity: 1,
                    subtotal: 10,
                },
            ],
            subtotal: 0,
            total: 0,
        },
        actions: {
            addCarrito: (item) => {
                if (getStore().carrito.some((elem) => elem.name === item.name)) {
                    getActions().quitCarrito(item);
                } else {
                    setStore({
                        carrito: getStore().carrito.concat(item),
                    });
                    console.log(`${item.name} se ha añadido al carrito de compras.`);
                }
                getActions().sumCarrito();
            },
            quitCarrito: (item) => {
                setStore({
                    carrito: getStore().carrito.filter((i) => i.name !== item.name),
                });
                console.log(`${item.name} se ha eliminado del carrito de compras.`);
                getActions().sumCarrito();
            },
            sumCarrito: () => {
                const totalSum = getStore().carrito.reduce(
                    (accumulator, currentValue) => accumulator + currentValue.subtotal,
                    0
                );
                setStore({
                    subtotal: totalSum,
                    total: totalSum,
                });
                console.log(getStore().total);
            },
            actualizarCarrito: (item) => {
                const newArr = getStore().carrito.map((product) => {
                    if (product.sku === item.sku) {
                        product.subtotal = item.priceAux;
                        product.quantity = item.amountAux;
                        return product;
                    } else {
                        return product;
                    }
                });
                setStore({
                    carrito: newArr,
                });
                getActions().sumCarrito();
                console.log(getStore().carrito);
            },
            addFavorito: (item) => {
                if (getStore().favoritos.some((elem) => elem.name === item.name)) {
                    getActions().quitFavorito(item);
                } else {
                    setStore({
                        favoritos: getStore().favoritos.concat(item),
                    });
                    console.log(`${item.name} se ha añadido a tu lista de favoritos.`);
                }
            },
            quitFavorito: (item) => {
                setStore({
                    favoritos: getStore().favoritos.filter((i) => i.name !== item.name),
                });
                console.log(`${item.name} se ha eliminado de tu lista de favoritos.`);
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            // logout: () => {
            // 	console.log("funciona");
            //     // localStorage.removeItem('token');
            //     // setStore({
            //     //     estalogueado: false
            //     // })
            // },

            inicioLogin: (userEmail, userPassword) => {
                console.log("funciona");
                fetch(
                        "https://3001-gabroma-proyectofinal-bn43db73nby.ws-us86.gitpod.io/api/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({
                                email: userEmail,
                                password: userPassword,
                            }), //lo que tenga el recipiente reproducelo // body data type must match "Content-Type" header
                        }
                    )
                    .then((response) => {
                        if (response.status === 200) {
                            setStore({
                                estalogueado: true,
                            });
                        }
                        return response.json();
                    })

                    // nombre de donde se guard ,  el valor access_token se guarda en token
                    .then((data) => {
                        console.log(data);

                        if (data.msg === "Bad email or password") {
                            alert("data.msg");
                        }

                        localStorage.setItem("token", data.access_token);
                    }) // nos llega un objeto llaamado data y tiene una propiedad access_token
                    .catch((err) => console.log(err));
            },

            registro: (
                userName,
                userApellido,
                userCellphone,
                userPassword,
                userEmail
            ) => {
                fetch(
                        "https://3001-gabroma-proyectofinal-bn43db73nby.ws-us86.gitpod.io/api/signup", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({
                                name: userName,
                                apellido: userApellido,
                                celular: userCellphone,
                                password: userPassword,
                                email: userEmail,
                            }), // body data type must match "Content-Type" header
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                estalogueado: true,
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.msg === "Bad email or password") {
                            alert(" Bad email or password");
                        }
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;