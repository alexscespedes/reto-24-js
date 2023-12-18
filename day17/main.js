// Design Patterns

class User {
    // Este código no debe ser editado ❌
        constructor(name) {
        this.name = name;
        this.messages = [];
        }
    
        receiveMessage(message) {
        this.messages.push(message);
        }
    }

        class Chat {
            constructor() {
            if (!Chat.instance) {
                this.init();
                Chat.instance = this;
            }
            return Chat.instance;
            }
        
            init() {
            this.users = [];
            }
        
            sendMessage(message) {
            this.users.forEach((user) => {
                user.receiveMessage(message);
            });
            }
        
            addUser(user) {
            if (user instanceof User) {
                this.users.push(user);
            }
            }
        
            removeUser(user) {
            this.users = this.users.filter((u) => u.name !== user);
            }
        }
        const chat1 = new Chat();
        const chat2 = new Chat();
        
        console.log(chat1 === chat2)

        