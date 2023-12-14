    class User {
        constructor(name, age) {
        this._name = name;
        this._age = age;
        this._friends = [];
        this._messages = [];
        }
    
        get name() {
        return this._name;
        }
    
        set name(newName) {
        this._name = newName;
        }
    
        get age() {
        return this._age;
        }
    
        set age(newAge) {
        this._age = newAge;
        }
    
        addFriend(user) {
        this._friends.push(user);
        }
    
        sendMessage(message, friend) {
        this._messages.push(message);
        friend._messages.push(message);
        }
    
        showMessages() {
        console.log(this._messages);
        }
    }

    const usuario1 = new User("Juan", 20);
    const usuario2 = new User("Maria", 25);
    usuario1.addFriend(usuario2);
    usuario1.sendMessage("Hola Maria!", usuario2);

    usuario1.showMessages()
