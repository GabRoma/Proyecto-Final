import Swal from "sweetalert2";

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
      carrito: [],
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
        fetch(
          "https://3001-gabroma-proyectofinal-tf3n1voo1zo.ws-us87.gitpod.io/api/products"
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

      checkout: (userid, ordenumero, total, date, state) => {
        // Function 1 Agregar/generar Orden
        fetch(
          "https://gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/" +
            userid +
            "/carrito/orden",
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

        // Function 2 Agregar/generar Orden_detail
        fetch(
          "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito/orden_detail"
        );

        // Function 3 Actualizar carrito
        // fetch(
        //     "https://3001-gabroma-proyectofinal-5zn559e2lki.ws-us87.gitpod.io/api/user/<int:user_id>/carrito"
        // )
      },
      // ejectuarpago ={
      //     funcion1(),
      //     funcion2(),
      //     funcion3()
      // }

      agregarACarrito: (sku) => {
        let userid = localStorage.getItem("userId");
        console.log(sku);

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
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("userId", data.user.id);
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

      // logout: () => {
      // 	console.log("funciona");
      //     // localStorage.removeItem('token');
      //     // setStore({
      //     //     estalogueado: false
      //     // })
      // },

      inicioLogin: (userEmail, userPassword) => {
        console.log("funciona");
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
      obtenerCarrito: () => {
        let userid = localStorage.getItem("userId");
        fetch(
          "https://3001-gabroma-proyectofinal-tf3n1voo1zo.ws-us87.gitpod.io/api/cart/" +
            userid
        )
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
    },
  };
};

export default getState;
