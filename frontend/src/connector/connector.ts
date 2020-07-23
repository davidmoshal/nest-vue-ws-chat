
// WAS WORKING:

// export const socket = new WebSocket('ws://localhost:8080/api')
// console.log({ ws: socket })

// socket.onopen = function open() {
//     console.log('connected');
//     socket.send(JSON.stringify({ type: 'showComment', entryId: 2, commentId: 1 }))
// }

// socket.onclose = function close() {
//     console.log('disconnected');
// }

// socket.onmessage = function incoming(data) {
//     console.log('incoming', { data })
// }
// setTimeout(function timeout() {
//     socket.send(JSON.stringify(new Date()))
// }, 500);

// export function send(o: any) {
//     socket.send(JSON.stringify(o))
// }

