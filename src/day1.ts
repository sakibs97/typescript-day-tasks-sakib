// Basic Type & Interface Practice

interface User {
    id: number,
    name: string,
    email: string,
    phone?: string,
    active?: boolean,
}

const userOne: User = {
    id: 1,
    name: 'Sakib Hossain',
    email: 'sakibs@gmail.com',
    phone: '01700666666',
    active: true,
}
console.log(userOne);

// Union & Type Narrowing

function printLength(id: number | string){
    if (typeof id === 'string') {
        console.log(`String length: ${id.length}`);
    } else {
        console.log(id);
    }
}

printLength('Union');
printLength(15)

// Array & Object Typing

type Product = {
    name: string,
    price: number,
    inStock: boolean,
}
const productInfo: Product = {
    name: 'Laptop',
    price: 200,
    inStock: true,
}
console.log(typeof productInfo);

const products: Product[] = [
    { name: 'Computer', price: 120, inStock: false },
    { name: 'Mobile', price: 120, inStock: true }
]

console.log(products);

// Function with Generics

function getFirstItem<T>(arr: T[]): T | null {
  return arr[0] ?? null;
}

console.log(getFirstItem([1,2,3,5]));
console.log(getFirstItem([]));

// Readonly & Partial Utility

const userTwo: Readonly<User> = {
    id: 2,
    name: 'Hridoy',
    email: 'yellohridoy@gmail.com',
    phone: '01700000002'
}
// userTwo.phone = 'Joy'

console.log(userTwo.name);

const userThree: Partial<User> = {
    id: 3,
    name: 'Nahian',
    email: 'nahian@gmail.com',
    phone: '01700000003'
}
userThree.name = 'Joy'

console.log(userThree.name);

// Type Assertion & Casting

let id: unknown = 'Type Assertion Example';

if (typeof id === 'string') {
    console.log((id as string).toUpperCase());
} else {
    console.log('Not a string');
}

// Enum & Literal Type

enum Role {
    Admin,
    User
}

let role: Role = Role.Admin;

console.log(role);
console.log(Role[role]);

// Function Return Type Practice

async function getUser(): Promise<User[]> {
    return [
        {
            id: 4,
            name: 'Shuvo',
            email: 'shuvo@gmail.com',
            phone: '01700000005'
        },
        {
            id: 5,
            name: 'Turjo',
            email: 'turjo@gmail.com',
            phone: '01700000006'
        }
    ]
}
async function main() {
    const users = await getUser();
    console.log(users);
}

main();
