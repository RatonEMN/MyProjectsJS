// 1. obtenerPedido(callback)
// 2. procesarPago(pedido, callback)
// 3. enviarPedido(pedido, callback)

const prompt = require("prompt-sync")();

const obtenerPedido = () => {
  let pedido = prompt("Nombre producto: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((pedido === "manzana")) {
        resolve(pedido);
      } else {
        reject("El pedido no es manzana");
      }
    }, 1000);
  });
};

const procesarPago = (pedido) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((pedido === "manzana")) {
        pedidoPagado = true;
        resolve(pedidoPagado);
      } else {
        reject("Hubo un error con el pago");
      }
    }, 1000);
  });
};

const enviarPedido = (pedidoPagado) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!pedidoPagado) {
          reject("No se pudo procesar el pago");
        } else {
          resolve(pedidoPagado);
      }
    }, 1000);
  });
};


obtenerPedido()
  .then((pedido) => procesarPago(pedido)) //Con arrow function anonimo ➡️
  .then(function (pedidoPagado) { //De manera anonima sin arrow
    return enviarPedido(pedidoPagado);
    })
  .then(() => {
    console.log("Pedido completado");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//   obtenerPedido((pedido) => {
//   procesarPago(pedido, (pedidoPagado) => {
//     enviarPedido(pedidoPagado, () => {
//       console.log("Pedido completado");
//     });
//   });
// });
