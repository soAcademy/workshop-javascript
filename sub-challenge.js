const itemPrice = [
  {
    id: 1,
    price: 9.99,
    cost: 7.25,
    quantity: 50,
    name: "Product 1",
  },
  {
    id: 2,
    price: 19.99,
    cost: 14.5,
    quantity: 40,
    name: "Product 2",
  },
  {
    id: 3,
    price: 29.99,
    cost: 21.35,
    quantity: 30,
    name: "Product 3",
  },
];

const customers = [
  {
    id: 1,
    customer: "John Doe",
    items: [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 2,
        quantity: 1,
      },
    ],
    datetime: "2022-12-15T12:00:00Z",
  },
  {
    id: 2,
    customer: "Jane Smith",
    items: [
      {
        productId: 3,
        quantity: 3,
      },
    ],
    datetime: "2022-12-14T12:00:00Z",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    items: [
      {
        productId: 1,
        quantity: 1,
      },
    ],
    datetime: "2022-12-13T12:00:00Z",
  },
  {
    id: 4,
    customer: "John Doe",
    items: [
      {
        productId: 2,
        quantity: 2,
      },
      {
        productId: 3,
        quantity: 1,
      },
    ],
    datetime: "2022-12-13T11:00:00Z",
  },
];
const orderWithPrice = (input)=>{
  const orderWithPrice = input.map((r)=>r.items)
  console.log(orderWithCustomer);
}
//orderWithPrice(customers);

//sum of everypostive elements
//เขียนแบบ shorthand
const data = [1, -4, 12, 0, -3, 29, -150];
const sumPositve = (input)=>{
  const positveNumber = input.filter((r)=>r>0)         //ห้ามใส่ ; ถ้าจะ chain ต่อ ไม่ง้นมันจะขึ้น error 
                        .reduce((acc,r)=>acc+r);
  console.log(positveNumber);
};
sumPositve(data);

//เขียนแบบเต็ม
const sumPositve2 = (input)=>{
  const positveNumber = input.filter((r)=>r>0) ;        //ห้ามใส่ ; ถ้าจะ chain ต่อ ไม่ง้นมันจะขึ้น error 
  const sum = positveNumber.reduce((acc,r)=>acc+r);
  console.log(sum);
};

sumPositve2(data);

const char = "George Raymond Richard Martin";
const onlyfirstChar = (input)=>{
  const split = input.split(" ")
                      .map((r)=>r[0])
                      .join("");
                      
    
  console.log({split});
}
onlyfirstChar(char);

const student = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

const showAge = (input)=>{
  const age = input.map((r)=>r.age);
                    
   console.log(age);   
  console.log(`[${Math.min(...age)},${Math.max(...age)},${Math.max(...age)-Math.min(...age)}]`);     
}
const arr = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const countElement = (input)=>{
  const result = input.flat()
                        //นับจำนวนตัวที่วน ว่าแต่ละตัวมีเท่าไร
                      .reduce((acc, r) => {
                      
                        
                        if (acc[r]) {
                          acc[r] +=1;
                        } else 
                        {
                          acc[r] = 1;
                        }
                        
                        return acc;
                      }, {});

  console.log(result);


const arr2 = ["Here", "is", "a", "sentence", "with", "a", "lot", "of", "words"];

const getWordsDict = (array) => array.reduce(
  (acc, word) => {
    const lowerCasedWord = word.toLowerCase()
    const wordIndex = lowerCasedWord.charAt(0)

    return {
      ...acc,
      [wordIndex]: [
        ...(acc[wordIndex] || []),
        lowerCasedWord,
      ],
    }
  }, 
  {}
)
                
} 
countElement(arr);