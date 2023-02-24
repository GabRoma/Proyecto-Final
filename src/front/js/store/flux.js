import Swal from "sweetalert2";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userData: {},
      detalleProducto: {},
      productos: [],
      estalogueado: false,
      logaux: true,
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
          sku: 1,
          name: "producto",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
        // {
        //   sku: 2,
        //   name: "producto II",
        //   url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
        //   shipping: "3 semanas",
        //   price: 10,
        //   quantity: 1,
        //   subtotal: 10,
        // },
        // {
        //   sku: 3,
        //   name: "producto III",
        //   url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
        //   shipping: "3 semanas",
        //   price: 10,
        //   quantity: 1,
        //   subtotal: 10,
        // },
      ],
      favoritos: [
        {
          sku: 1,
          name: "producto",
          url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
          shipping: "3 semanas",
          price: 10,
          quantity: 1,
          subtotal: 10,
        },
        // {
        //   sku: 2,
        //   name: "producto II",
        //   url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
        //   shipping: "3 semanas",
        //   price: 10,
        //   quantity: 1,
        //   subtotal: 10,
        // },
        // {
        //   sku: 3,
        //   name: "producto III",
        //   url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
        //   shipping: "3 semanas",
        //   price: 10,
        //   quantity: 1,
        //   subtotal: 10,
        // },
      ],
      subtotal: 0,
      total: 0,
    },
    actions: {
      todosLosProductos: () => {
        fetch(process.env.BACKEND_URL + "/api/products")
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

      // checkout: () => {
      // Function 1 Agregar/generar Orden
      // fetch(
      //     "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito/orden"
      // )
      // Function 2 Agregar/generar Orden_detail
      // fetch(
      //     "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito/orden_detail"
      // )
      // Function 3 Actualizar carrito
      // fetch(
      //     "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito"
      // )
      // },
      // ejectuarpago ={
      //     funcion1(),
      //     funcion2(),
      //     funcion3()
      // }

      // agregarACarrito: (sku, userid) => {
      //     fetch(
      //             "https://gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/" +
      //             userid +
      //             "/carrito/products/" +
      //             sku, {
      //                 method: "POST",
      //                 headers: {
      //                     "Content-Type": "application/json",
      //                     // 'Content-Type': 'application/x-www-form-urlencoded',
      //                 },
      //                 body: JSON.stringify({
      //                     // user_id: userEmail,
      //                     // password: userPassword,

      //                     // "id": 3,
      //                     producto_sku: sku,
      //                     user_id: userid,
      //                 }), //lo que tenga el recipiente reproducelo // body data type must match "Content-Type" header
      //             }
      //         )
      //         .then((response) => {
      //             return response.json();
      //         })

      //         .then((data) => {
      //             console.log(data);

      // if (data.msg === "Bad email or password") {
      //     Swal.fire({
      //         icon: "error",
      //         title: data.msg,
      //     });
      // }

      // localStorage.setItem("token", data.access_token);
      // localStorage.setItem("userId", data.user.id);
      // });
      // let store = getStore(); //tenemos que traer el array favoritos
      // let contenedordeelemento = {}; //necesitamos recorrer el array favorito guardarlo en  contenedordeelemento
      // contenedordeelemento.nombresdecadaproducto = props.nombre;
      // contenedordeelemento.id = props.id;
      // setStore({
      //     carrito: [...store.carrito, contenedordeelemento],
      // });
      // },
      eliminarDeCarrito: (id) => {
        // fetch(
        //     "https://gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito/products/<string:producto_sku>", {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type": "application/json",
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         body: JSON.stringify({
        //             // user_id: userEmail,
        //             // password: userPassword,

        //             // "id": 3,
        //             producto_sku: sku,
        //             user_id: userid,
        //         }), //lo que tenga el recipiente reproducelo // body data type must match "Content-Type" header
        //     }
        // );
        let arr = [];

        let store = getStore();
        arr = store.carrito.filter((elemento) => elemento !== id);
        setStore({
          carrito: arr,
        });
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

      agregarFavorito: (props, nombre, id) => {
        let store = getStore(); //tenemos que traer el array favoritos
        let contenedordeelemento = {}; //necesitamos recorrer el array favorito guardarlo en  contenedordeelemento
        contenedordeelemento.nombresdecadaproducto = props.nombre;
        contenedordeelemento.id = props.id;
        setStore({
          favoritos: [...store.favoritos, contenedordeelemento],
        });
      },
      eliminarFavorito: (id) => {
        let arr = [];

        let store = getStore();
        arr = store.favoritos.filter((elemento) => elemento !== id);
        setStore({
          favoritos: arr,
        });
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
        localStorage.removeItem("token");
        setStore({
          estalogueado: false,
        });
      },

      inicioLogin: (userEmail, userPassword) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
          }), //lo que tenga el recipiente reproducelo // body data type must match "Content-Type" header
        })
          .then((response) => {
            if (response.status === 200) {
              setStore({
                estalogueado: true,
              });
              Swal.fire({
                icon: "success",
                title: "Inicio de sesión exitoso",
              });
            }
            return response.json();
          })

          // nombre de donde se guard ,  el valor access_token se guarda en token
          .then((data) => {
            console.log(data);

            if (data.msg === "Bad email or password") {
              Swal.fire({
                icon: "error",
                title: data.msg,
              });
            }

            localStorage.setItem("token", data.access_token);
            localStorage.setItem("userId", data.user.id);
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
        fetch(process.env.BACKEND_URL + "/api/signup", {
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
        })
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              setStore({
                estalogueado: true,
              });
              Swal.fire({
                icon: "success",
                title: "Usuario creado con exito",
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.msg === "el email ya existe") {
              Swal.fire({
                icon: "error",
                title: data.msg,
              });
            }
            localStorage.setItem("token", data.access_token);
          })
          .catch((err) => console.log(err));
      },

      validToken: async () => {
        let store = getStore();
        let accessToken = localStorage.getItem("token");
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/valid-token",
            {
              headers: {
                Authorization: "Bearer " + accessToken,
              },
            }
          );
          const data = await response.json();
          if (store.logaux) {
            setStore({
              estalogueado: data.status,
            });
          }
          return;
        } catch (error) {
          console.log(error);
          if (store.logaux && error.code === "ERR_BAD_REQUEST") {
            setStore({
              estalogueado: false,
            });
          }
          return false;
        }
      },

      getUserData: (user_id) => {
        fetch(process.env.BACKEND_URL + "/api/user/" + user_id)
          .then((response) => response.json())
          .then((data) => {
            setStore({
              userData: data,
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      updateUserData: (user_id, updatedData) => {
        fetch(process.env.BACKEND_URL + "/api/user/" + user_id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
          .then(() => {
            actions.getUserData(localStorage.userId);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      //viejo
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log(data);
      //       setStore({
      //         userData: data,
      //       });
      //     })
      //     .catch((error) => {
      //       console.error("Error:", error);
      //     });
      // },

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

//   addCarrito: (item) => {
//     if (getStore().carrito.some((elem) => elem.name === item.name)) {
//       getActions().quitCarrito(item);
//     } else {
//       setStore({
//         carrito: getStore().carrito.concat(item),
//       });
//       console.log(`${item.name} se ha añadido al carrito de compras.`);
//     }
//     getActions().sumCarrito();
//   },
//   quitCarrito: (item) => {
//     setStore({
//       carrito: getStore().carrito.filter((i) => i.name !== item.name),
//     });
//     console.log(`${item.name} se ha eliminado del carrito de compras.`);
//     getActions().sumCarrito();
//   },
// addFavorito: (item) => {
//     if (getStore().favoritos.some((elem) => elem.name === item.name)) {
//         getActions().quitFavorito(item);
//     } else {
//         setStore({
//             favoritos: getStore().favoritos.concat(item),
//         });
//         console.log(`${item.name} se ha añadido a tu lista de favoritos.`);
//     }
// },
// quitFavorito: (item) => {
//     setStore({
//         favoritos: getStore().favoritos.filter((i) => i.name !== item.name),
//     });
//     console.log(`${item.name} se ha eliminado de tu lista de favoritos.`);
// },
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
