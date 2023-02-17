//flux
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      detalleProducto: {},
      productos: [],
      estalogueado: false,
      message: null,
      demo: [
        {
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
      carrito: [
        {
          id: 1,
          name: "producto",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
        {
          id: 2,
          name: "producto II",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
        {
          id: 3,
          name: "producto III",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
      ],
      favoritos: [
        {
          id: 1,
          name: "producto",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
        {
          id: 2,
          name: "producto II",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
        {
          id: 3,
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
      todosLosProductos: () => {
        fetch(
          "https://3001-gabroma-proyectofinal-qhijtnlkz7j.ws-us87.gitpod.io/api/products"
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({
              productos: data,
            });
            // process the data returned by the server
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      // // utilizar esta funcion para un producto
      // obtenerInfoDeCadaProducto: (asin) => {
      //     fetch(
      //             "https://api.rainforestapi.com/request?" +
      //             api_key +
      //             "&type=product&amazon_domain=amazon.com&" +
      //             asin
      //         ) // buscar que quede de forma dinamica useParams,
      //         .then((res) => res.json())
      //         .then((data) =>
      //             setStore({
      //                 detalleProducto: data,
      //             })
      //         )
      //         .catch((err) => console.error(err));
      // },

      // // https://api.rainforestapi.com/request?api_key={api_key}&type=category&amazon_domain=amazon.com&category_id={category_id}

      // obtenerProductos: () => {
      //     let apiKey = "C2F2227A0E2A431EA566520B4BFB9939";
      //     let categoryId = "281052";
      //     fetch(
      //             "https://api.rainforestapi.com/request?api_key=" +
      //             apiKey +
      //             "&type=category&amazon_domain=amazon.com&category_id=" +
      //             categoryId
      //         )
      //         .then((res) => res.json())
      //         .then((data) =>
      //             setStore({
      //                 productos: data.category_results,
      //             })
      //         )
      //         .catch((err) => console.error(err));
      // },

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
        const newArr = getStore().carrito.map((producto) => {
          if (producto.sku === item.sku) {
            producto.subtotal = item.priceAux;
            producto.quantity = item.amountAux;
            return producto;
          } else {
            return producto;
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

      logout: () => {
        console.log("funciona");
        // localStorage.removeItem('token');
        // setStore({
        //     estalogueado: false
        // })
      },

      inicioLogin: (userEmail, userPassword) => {
        console.log("funciona");
        fetch(
          "https://3001-gabroma-proyectofinal-6p98yyg6lb9.ws-us87.gitpod.io/api/login",
          {
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
          "https://3001-gabroma-proyectofinal-6p98yyg6lb9.ws-us87.gitpod.io/api/signup",
          {
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
