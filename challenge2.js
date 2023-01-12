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
    groupId: "g1",
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
    groupId: "g2",
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
    groupId: "g3",
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

const hasDocumentPermission = ({ documentId, name, role }) => {
  const document = documents.find((e) => e.documentId === documentId);
  const userId = users.find((e) => e.name === name).userId;
  const groupId = groups.find((e) =>
    e.users.find((user) => user.userId === userId)
  ).groupId;
  let documentPermission = document.permissions.find(
    (e) => e.userId === userId || e.groupId === groupId
  );
  let permissions =
    documentPermission.role === role &&
    document.permissions.find(
      (e) => e.userId === userId || e.groupId === groupId
    )
      ? true
      : false;
  return permissions;
};
permissions = hasDocumentPermission({
  documentId: "d1",
  name: "Bob",
  role: "ADMIN",
});
console.log(permissions);

let group2 = {};
groups.map((group) => {
  let groupUsers = {};
  group.users.map((user, idx) => {
    // console.log(user);
    // console.log(users.find((e) => e.userId === user.userId).name);
    let name = users.find((e) => e.userId === user.userId)?.name ?? undefined;
    // console.log(name);
    groupUsers[idx] = {
      userId: user.userId,
      name: name,
    };
    groupUsers = Object.values(groupUsers);
    group2[group.groupId] = {
      groupId: group.groupId,
      name: group.name,
      users: groupUsers,
    };
  });
});
group2 = Object.values(group2);
console.log(JSON.stringify(group2));
