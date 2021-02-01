// const person: {
//   name: string;
//   age: number;
// } = {
    // const ADMIN = 0;
    // const READ_ONLY = 1;
    // const AUTHOR = 2;

    // applies a label based on position
    enum Role { ADMIN, READ_ONLY, AUTHOR };

    const person = {
        name: 'Gavin',
        age: 33,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADMIN
      };

      let favoriteActivities: string[];
      favoriteActivities = ['Sports'];
      
      console.log(person.name);
      
      for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
        // console.log(hobby.map()); // !!! ERROR !!!
      }

      if (person.role === Role.AUTHOR) {
        console.log('Author');
        }
      