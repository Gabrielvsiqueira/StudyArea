const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Gabriel Vitor',
    email: 'gabe.teste@gmail.com',
    phone: '12355678',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Bruno',
    email: 'brunoteste@gmail.com',
    phone: '12573789',
    category: v4(),
  }
]

class ContactRepository {
  findAll(){
    return new Promise ((resolve) => {
      resolve(contacts)
    });
  }
  findById(id){
    return new Promise ((resolve) => {
      let contact = contacts.find((contact) => contact.id === id)
      resolve(contact || null);
    });
  }
  deleteId(id){
    return new Promise ((resolve) => {
     contacts = contacts.filter((contact) => contact.id !== id);
     resolve(contacts);
    });
  };
  findByEmail(email) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.email === email);
      resolve(contact);
    });
  }

  create(name, email, phone, category_id){
    return new Promise ((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
}

    update(id, {name, email, phone, category_id}){
    return new Promise ((resolve) => {
      const updatedContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
}
}

module.exports = new ContactRepository();

// rodar um yarn add uuid4 se não rodou ainda para buscar o hash dos ids.
