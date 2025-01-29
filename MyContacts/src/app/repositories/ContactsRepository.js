const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Gabriel Vitor',
    email: 'gabe.teste@gmail.com',
    phone: '12355678',
    category: v4(),
  }
]

class ContactRepository {
  findAll(){
    return new Promise((resolve) => {
      resolve(contacts)
    });
  }
}

module.exports = new ContactRepository();

// rodar um yarn add uuid4 se não rodou ainda para buscar o hash dos ids.
