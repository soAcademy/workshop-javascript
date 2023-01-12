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
        userId: 4,
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

const documents = [
  {
    documentId: 'd1',
    permissions: [
      {
        userId: 1,
        role: 'ADMIN'
      },
      {
        groupId: "g1",
        role: 'EDITOR'
      }
    ]
  },
  {
    documentId: 'd2',
    permissions: [
      {
        userId: 3,
        role: 'EDITOR'
      },
      {
        groupId: "g1",
        role: 'EDITOR'
      },
      {
        groupId: "g2",
        role: 'EDITOR'
      }
    ]
  },
  {
    documentId: 'g3',
    permissions: [
      {
        groupId: "g2",
        role: 'EDITOR'
      }
    ]
  }
]

// Quiz
// 1. สร้างฟังก์ชั่น hasDocumentPermission({documentId, name, role}) แล้ว return ว่ามี permissions หรือไม่
// เช่น hasDocumentPermissioin({documentId: 'g3', name: 'Jam', role: 'EDITOR'}) -> true
