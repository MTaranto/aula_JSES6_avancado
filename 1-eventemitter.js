// EventEmitter
const EventEmitter = require('events');
class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}
const users = new Users();
// const emitter = new EventEmitter();

users.on('User logged', data => {
//emitter.on('User logged', data => {
  console.log(data);
});

users.userLogged({user: 'Márcio Taranto'});
// emitter.emit('User logged', {user: 'Márcio Taranto'});
