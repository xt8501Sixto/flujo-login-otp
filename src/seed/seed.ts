import bcryptjs from 'bcryptjs';

interface SeddUser {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
}

interface SeedData {
    users: SeddUser[];
}

export const initialData: SeedData = {
    users: [
        {
            email: 'sixto.mujica@softtek.com',
            name: 'Sixto Mujica',
            password: bcryptjs.hashSync('123456'),
            role: 'admin'
        },
        {
            email: 'sjmujica@gmail.com',
            name: 'Jose Mujica',
            password: bcryptjs.hashSync('123456'),
            role: 'user'
        }
    ]
}