export function broadcastCart(
  payload:any
){

  const ws =
    new WebSocket(
      "ws://localhost:3001"
    );

  ws.onopen = () => {

    ws.send(
      JSON.stringify({
        type:"CART_UPDATE",
        ...payload
      })
    );

    ws.close();

  };

}