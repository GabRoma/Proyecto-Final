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
        // {
        //       sku: 1,
        //       name: "producto",
        //       url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
        //       shipping: "3 semanas",
        //       price: 10,
        //       quantity: 1,
        //       subtotal: 10,
        //   },
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
        // {
        //       sku: 1,
        //       name: "producto",
        //       url: "https://shoptheoldemercantile.com/image/cache/catalog/placeholderproduct-500x500.png",
        //       shipping: "3 semanas",
        //       price: 10,
        //       quantity: 1,
        //       subtotal: 10,
        //   },
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

      checkout: (userid, ordenumero, total, date, state) => {
        // Function 1 Agregar/generar Orden
        fetch(
          process.env.BACKEND_URL + "/api/user/" + userid + "/carrito/orden",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              user_id: userid,
              orden_number: ordenumero,
              total_amount: total,
              fecha: date,
              estado: state,
            }),
          }
        )
          .then((response) => {})

          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("userId", data.user.id);
          });
      },
      agregarACarrito: (sku, userid) => {
        console.log(sku, userid);
        fetch(
          process.env.BACKEND_URL +
            "/api/user/" +
            userid +
            "/carrito/products/" +
            sku,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({}),
          }
        )
          .then((response) => {
            if (response.status === 200) {
              getActions().obtenerCarrito();
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
      },
      eliminarDeCarrito: (sku, userid, id) => {
        fetch(
          "https://3001-gabroma-proyectofinal-tf3n1voo1zo.ws-us87.gitpod.io/api/user/" +
            userid +
            "/carrito/products/" +
            sku,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              producto_sku: sku,
              user_id: userid,
            }),
          }
        )
          .then((response) => {
            if (response === 200) {
              let arr = [];

              let store = getStore();
              arr = store.carrito.filter((elemento) => elemento !== id);
              setStore({
                carrito: arr,
              });
            }
          })

          .then((data) => {
            console.log(data);
            // localStorage.setItem("token", data.access_token);
            // localStorage.setItem("userId", data.user.id);
          });
      },

      sumCarrito: () => {
        let userid = localStorage.getItem("userId");
        fetch(process.env.BACKEND_URL + "/api/carrito/total/" + userid, {
          method: "GET",
        })
          .then((response) => {
            // if (response.status === 200) {
            //   getActions().obtenerCarrito();
            // }
            return response.json();
          })
          .then((data) => {
            console.log(data.totalcarrito);
            setStore({
              subtotal: data.totalcarrito,
              total: data.totalcarrito,
            });
          });
        // const totalSum = getStore().carrito.reduce(
        //   (accumulator, currentValue) => accumulator + currentValue.subtotal,
        //   0
        // );
        // setStore({
        //   subtotal: totalSum,
        //   total: totalSum,
        // });
        // console.log(getStore().total);
        // console.log("funciona");
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
      obtenerCarrito: () => {
        let userid = localStorage.getItem("userId");
        fetch(process.env.BACKEND_URL + "/api/cart/" + userid)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({
              carrito: data,
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      agregarFavorito: (sku, userid) => {
        console.log(sku, userid);
        fetch(
          process.env.BACKEND_URL +
            "/api/user/" +
            userid +
            "/favoritos/products/" +
            sku,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({}),
          }
        )
          .then((response) => {
            if (response.status === 200) {
              getActions().obtenerFavorito();
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
      },
      obtenerFavorito: () => {
        let userid = localStorage.getItem("userId");
        fetch(process.env.BACKEND_URL + "/api/fav/" + userid)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({
              favoritos: data,
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      eliminarFavorito: (sku, userid) => {
        console.log(sku, userid);
        fetch(
          process.env.BACKEND_URL +
            "/api/user/" +
            userid +
            "/favoritos/products/" +
            sku,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({}),
          }
        )
          .then((response) => {
            if (response === 200) {
              getActions().eliminarFav();
            }
          })

          .then((data) => {
            console.log(data);
            // localStorage.setItem("token", data.access_token);
            // localStorage.setItem("userId", data.user.id);
          });
      },
      eliminarFav: () => {
        let userid = localStorage.getItem("userId");
        fetch(process.env.BACKEND_URL + "/api/fav/" + userid)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({
              favoritos: data,
            });
          })
          .catch((error) => {
            console.error("Error:", error);
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
            if (response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Error: usuario y/o contraseña incorrectos",
              });
            } else if (response.status === 200) {
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
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("userId", data.user.id);
          }) // nos llega un objeto llaamado data y tiene una propiedad access_token
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Algo ha salido mal :(",
            });
          });
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

//---------------------------------------------------------------------------------------------------------------------------------------------

// Function 2 Agregar/generar Orden_detail
// fetch(
//   "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito/orden_detail"
// );

// Function 3 Actualizar carrito
// fetch(
//     "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito"
//   // )
// },
// ejectuarpago ={
//     funcion1(),
//     funcion2(),
//     funcion3()
// }

export default getState;
