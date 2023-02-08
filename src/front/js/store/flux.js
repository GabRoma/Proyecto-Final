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
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
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

            inicioLogin: (userEmail, userPassword) => {
                console.log("funciona");
                fetch(
                        "https://3001-gabroma-proyectofinal-7vc1rq3vbbk.ws-us86.gitpod.io/api/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({"email":userEmail,"password":userPassword
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
                    }) // nos llega un objeto llamado data y tiene una propiedad access_token
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