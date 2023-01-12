const users = [
  {
    userId: 1,
    name: "Bob",
  },
  {
    userId: 2,
    name: "Bin",
  },
  {
    userId: 3,
    name: "Jam",
  },
  {
    userId: 4,
    name: "Silvy",
  },
  {
    userId: 5,
    name: "Ploy",
  },
];

const groups = [
  {
    groudId: "g1",
    name: "Group1",
    users: [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
    ],
  },
  {
    groudId: "g2",
    name: "Group2",
    users: [
      {
        userId: 3,
      },
      {
        userId: 4,
      },
      {
        userId: 5,
      },
    ],
  },
  {
    groudId: "g3",
    name: "Group3",
    users: [
      {
        userId: 0,
      },
    ],
  },
];

// const groups2 = [
//   {
//     groudId: "g1",
//     name: "Group1",
//     users: [
//       {
//         userId: 1,
//         name: "Bob",
//       },
//       {
//         userId: 2,
//         name: "Bin",
//       },
//     ],
//   },
// ];

const documents = [
  {
    documentId: "d1",
    permissions: [
      {
        userId: 1,
        role: "ADMIN",
      },
      {
        groupId: "g1",
        role: "EDITOR",
      },
    ],
  },
  {
    documentId: "d2",
    permissions: [
      {
        userId: 3,
        role: "EDITOR",
      },
      {
        groupId: "g1",
        role: "EDITOR",
      },
      {
        groupId: "g2",
        role: "EDITOR",
      },
    ],
  },
  {
    documentId: "d3",
    permissions: [
      {
        groupId: "g2",
        role: "EDITOR",
      },
    ],
  },
];

// Quiz
// 1. สร้างฟังก์ชั่น hasDocumentPermission({documentId, name, role}) แล้ว return ว่ามี permissions หรือไม่
// เช่น hasDocumentPermissioin({documentId: 'd3', name: 'Jam', role: 'EDITOR'}) -> true
// .some, .filter
// 2. สร้าง group2 ที่ดึงข้อมูล name มาด้วย

function hasDocumentPermission({ documentId, name, role }) {
  const group1 = groups.find(group => group.name === "Group1");
  const user = group1.users.find(user => user.name === name);
  const userId = user ? user.userId : null;

  const document = documents.find(document => document.documentId === documentId);
  if (!document) return false;

  return document.permissions.some(permission => (
    (permission.userId === userId && permission.role === role) ||
    (permission.groupId === group1.groupId && permission.role === role)
  ));
}

function createGroup2() {
  const group1 = groups.find(group => group.name === "Group1");
  const group2 = group1.users.map(user => user.name);
  return group2;
}
console.log("hasDocumentPermission");
