// Quiz: MLM Reward Systems,
// Calculated reward/rebate for each members
// Output
// [
//   {
//     memberId: 1,
//     reward: 178
//   },
//   {
//     memberId: 2,
//     reward: 200
//   }
// ]

const members = [
  {
    memberId: 0,
    headId: 0,
  },
  {
    memberId: 1,
    headId: 0,
  },
  {
    memberId: 2,
    headId: 0,
  },
  {
    memberId: 3,
    headId: 0,
  },
  {
    memberId: 4,
    headId: 1,
  },
  {
    memberId: 5,
    headId: 2,
  },
  {
    memberId: 6,
    headId: 3,
  },
  {
    memberId: 7,
    headId: 1,
  },
  {
    memberId: 8,
    headId: 1,
  },
  {
    memberId: 9,
    headId: 2,
  },
  {
    memberId: 10,
    headId: 2,
  },
  {
    memberId: 11,
    headId: 3,
  },
  {
    memberId: 12,
    headId: 3,
  },
  {
    memberId: 13,
    headId: 1,
  },
  {
    memberId: 14,
    headId: 1,
  },
  {
    memberId: 15,
    headId: 2,
  },
  {
    memberId: 16,
    headId: 4,
  },
  {
    memberId: 17,
    headId: 5,
  },
  {
    memberId: 18,
    headId: 6,
  },
  {
    memberId: 19,
    headId: 7,
  },
  {
    memberId: 20,
    headId: 8,
  },
  {
    memberId: 21,
    headId: 9,
  },
  {
    memberId: 22,
    headId: 10,
  },
  {
    memberId: 23,
    headId: 11,
  },
  {
    memberId: 24,
    headId: 12,
  },
  {
    memberId: 25,
    headId: 13,
  },
  {
    memberId: 26,
    headId: 14,
  },
  {
    memberId: 27,
    headId: 15,
  },
  {
    memberId: 28,
    headId: 5,
  },
  {
    memberId: 29,
    headId: 6,
  },
  {
    memberId: 30,
    headId: 7,
  },
  {
    memberId: 31,
    headId: 8,
  },
  {
    memberId: 32,
    headId: 9,
  },
  {
    memberId: 33,
    headId: 10,
  },
  {
    memberId: 34,
    headId: 11,
  },
  {
    memberId: 35,
    headId: 12,
  },
  {
    memberId: 36,
    headId: 13,
  },
  {
    memberId: 37,
    headId: 14,
  },
  {
    memberId: 38,
    headId: 15,
  },
  {
    memberId: 39,
    headId: 16,
  },
  {
    memberId: 40,
    headId: 17,
  },
  {
    memberId: 41,
    headId: 18,
  },
  {
    memberId: 42,
    headId: 19,
  },
  {
    memberId: 43,
    headId: 20,
  },
  {
    memberId: 44,
    headId: 21,
  },
  {
    memberId: 45,
    headId: 22,
  },
  {
    memberId: 46,
    headId: 23,
  },
  {
    memberId: 47,
    headId: 24,
  },
  {
    memberId: 48,
    headId: 25,
  },
  {
    memberId: 49,
    headId: 26,
  },
  {
    memberId: 50,
    headId: 27,
  },
  {
    memberId: 51,
    headId: 28,
  },
  {
    memberId: 52,
    headId: 29,
  },
  {
    memberId: 53,
    headId: 30,
  },
  {
    memberId: 54,
    headId: 31,
  },
  {
    memberId: 55,
    headId: 32,
  },
  {
    memberId: 56,
    headId: 33,
  },
  {
    memberId: 57,
    headId: 34,
  },
  {
    memberId: 58,
    headId: 35,
  },
  {
    memberId: 59,
    headId: 37,
  },
  {
    memberId: 60,
    headId: 38,
  },
];

const rewardTier = {
  tier1: [
    {
      saleLimit: 1000,
      percentReward: 0.05,
    },
    {
      saleLimit: 10000,
      percentReward: 0.08,
    },
    {
      saleLimit: 100000,
      percentReward: 0.1,
    },
    {
      saleLimit: 10000000000,
      percentReward: 0.15,
    },
  ],
  tier2: [
    {
      saleLimit: 10000,
      percentReward: 0.01,
    },
    {
      saleLimit: 100000,
      percentReward: 0.03,
    },
    {
      saleLimit: 1000000,
      percentReward: 0.04,
    },
    {
      saleLimit: 10000000000,
      percentReward: 0.05,
    },
  ],
};

const orders = [
  {
    memberId: 31,
    orderValue: 6260,
  },
  {
    memberId: 44,
    orderValue: 2810,
  },
  {
    memberId: 44,
    orderValue: 790,
  },
  {
    memberId: 17,
    orderValue: 6800,
  },
  {
    memberId: 14,
    orderValue: 4240,
  },
  {
    memberId: 2,
    orderValue: 8810,
  },
  {
    memberId: 56,
    orderValue: 4260,
  },
  {
    memberId: 48,
    orderValue: 4130,
  },
  {
    memberId: 9,
    orderValue: 1760,
  },
  {
    memberId: 4,
    orderValue: 2420,
  },
  {
    memberId: 29,
    orderValue: 5300,
  },
  {
    memberId: 49,
    orderValue: 7810,
  },
  {
    memberId: 32,
    orderValue: 6710,
  },
  {
    memberId: 30,
    orderValue: 7700,
  },
  {
    memberId: 3,
    orderValue: 9870,
  },
  {
    memberId: 29,
    orderValue: 7810,
  },
  {
    memberId: 3,
    orderValue: 3290,
  },
  {
    memberId: 49,
    orderValue: 2650,
  },
  {
    memberId: 43,
    orderValue: 2240,
  },
  {
    memberId: 32,
    orderValue: 5450,
  },
  {
    memberId: 18,
    orderValue: 3410,
  },
  {
    memberId: 8,
    orderValue: 5240,
  },
  {
    memberId: 59,
    orderValue: 8790,
  },
  {
    memberId: 47,
    orderValue: 8890,
  },
  {
    memberId: 25,
    orderValue: 3850,
  },
  {
    memberId: 13,
    orderValue: 7060,
  },
  {
    memberId: 54,
    orderValue: 1700,
  },
  {
    memberId: 12,
    orderValue: 6250,
  },
  {
    memberId: 33,
    orderValue: 5310,
  },
  {
    memberId: 20,
    orderValue: 1640,
  },
  {
    memberId: 3,
    orderValue: 960,
  },
  {
    memberId: 27,
    orderValue: 7570,
  },
  {
    memberId: 42,
    orderValue: 6070,
  },
  {
    memberId: 10,
    orderValue: 8510,
  },
  {
    memberId: 49,
    orderValue: 9340,
  },
  {
    memberId: 51,
    orderValue: 530,
  },
  {
    memberId: 40,
    orderValue: 3740,
  },
  {
    memberId: 49,
    orderValue: 3640,
  },
  {
    memberId: 10,
    orderValue: 130,
  },
  {
    memberId: 44,
    orderValue: 3190,
  },
  {
    memberId: 60,
    orderValue: 2610,
  },
  {
    memberId: 30,
    orderValue: 6250,
  },
  {
    memberId: 21,
    orderValue: 5300,
  },
  {
    memberId: 21,
    orderValue: 7860,
  },
  {
    memberId: 13,
    orderValue: 410,
  },
  {
    memberId: 28,
    orderValue: 6220,
  },
  {
    memberId: 50,
    orderValue: 2210,
  },
  {
    memberId: 3,
    orderValue: 4490,
  },
  {
    memberId: 55,
    orderValue: 5910,
  },
  {
    memberId: 41,
    orderValue: 1350,
  },
  {
    memberId: 30,
    orderValue: 580,
  },
  {
    memberId: 3,
    orderValue: 6900,
  },
  {
    memberId: 28,
    orderValue: 7360,
  },
  {
    memberId: 60,
    orderValue: 4350,
  },
  {
    memberId: 6,
    orderValue: 6030,
  },
  {
    memberId: 46,
    orderValue: 8680,
  },
  {
    memberId: 1,
    orderValue: 8320,
  },
  {
    memberId: 32,
    orderValue: 8980,
  },
  {
    memberId: 10,
    orderValue: 3620,
  },
  {
    memberId: 44,
    orderValue: 90,
  },
  {
    memberId: 57,
    orderValue: 9990,
  },
  {
    memberId: 38,
    orderValue: 400,
  },
  {
    memberId: 19,
    orderValue: 6080,
  },
  {
    memberId: 20,
    orderValue: 8970,
  },
  {
    memberId: 43,
    orderValue: 2070,
  },
  {
    memberId: 12,
    orderValue: 4220,
  },
  {
    memberId: 3,
    orderValue: 3790,
  },
  {
    memberId: 36,
    orderValue: 1770,
  },
  {
    memberId: 23,
    orderValue: 9180,
  },
  {
    memberId: 38,
    orderValue: 8080,
  },
  {
    memberId: 6,
    orderValue: 6700,
  },
  {
    memberId: 48,
    orderValue: 1050,
  },
  {
    memberId: 27,
    orderValue: 6540,
  },
  {
    memberId: 19,
    orderValue: 9070,
  },
  {
    memberId: 53,
    orderValue: 8070,
  },
  {
    memberId: 28,
    orderValue: 6810,
  },
  {
    memberId: 14,
    orderValue: 6090,
  },
  {
    memberId: 18,
    orderValue: 3850,
  },
  {
    memberId: 59,
    orderValue: 6880,
  },
  {
    memberId: 51,
    orderValue: 190,
  },
  {
    memberId: 5,
    orderValue: 2780,
  },
  {
    memberId: 59,
    orderValue: 2900,
  },
  {
    memberId: 31,
    orderValue: 2040,
  },
  {
    memberId: 24,
    orderValue: 6380,
  },
  {
    memberId: 10,
    orderValue: 1650,
  },
  {
    memberId: 55,
    orderValue: 680,
  },
  {
    memberId: 17,
    orderValue: 9070,
  },
  {
    memberId: 50,
    orderValue: 5610,
  },
  {
    memberId: 10,
    orderValue: 3630,
  },
  {
    memberId: 14,
    orderValue: 2580,
  },
  {
    memberId: 52,
    orderValue: 4490,
  },
  {
    memberId: 26,
    orderValue: 3300,
  },
  {
    memberId: 8,
    orderValue: 4790,
  },
  {
    memberId: 45,
    orderValue: 8670,
  },
  {
    memberId: 39,
    orderValue: 970,
  },
  {
    memberId: 48,
    orderValue: 1690,
  },
  {
    memberId: 41,
    orderValue: 3890,
  },
  {
    memberId: 43,
    orderValue: 2430,
  },
  {
    memberId: 52,
    orderValue: 8480,
  },
  {
    memberId: 32,
    orderValue: 7240,
  },
  {
    memberId: 4,
    orderValue: 5410,
  },
  {
    memberId: 29,
    orderValue: 9070,
  },
  {
    memberId: 26,
    orderValue: 1840,
  },
  {
    memberId: 6,
    orderValue: 1170,
  },
  {
    memberId: 8,
    orderValue: 5130,
  },
  {
    memberId: 5,
    orderValue: 5880,
  },
  {
    memberId: 58,
    orderValue: 2140,
  },
  {
    memberId: 1,
    orderValue: 5270,
  },
  {
    memberId: 26,
    orderValue: 7900,
  },
  {
    memberId: 25,
    orderValue: 4360,
  },
  {
    memberId: 51,
    orderValue: 4320,
  },
  {
    memberId: 57,
    orderValue: 9050,
  },
  {
    memberId: 8,
    orderValue: 6490,
  },
  {
    memberId: 13,
    orderValue: 9990,
  },
  {
    memberId: 57,
    orderValue: 8310,
  },
  {
    memberId: 52,
    orderValue: 1540,
  },
  {
    memberId: 44,
    orderValue: 5580,
  },
  {
    memberId: 17,
    orderValue: 200,
  },
  {
    memberId: 9,
    orderValue: 3950,
  },
  {
    memberId: 6,
    orderValue: 3810,
  },
  {
    memberId: 17,
    orderValue: 6660,
  },
  {
    memberId: 26,
    orderValue: 690,
  },
  {
    memberId: 3,
    orderValue: 2140,
  },
  {
    memberId: 2,
    orderValue: 8820,
  },
  {
    memberId: 39,
    orderValue: 6410,
  },
  {
    memberId: 44,
    orderValue: 4910,
  },
  {
    memberId: 36,
    orderValue: 2470,
  },
  {
    memberId: 12,
    orderValue: 3600,
  },
  {
    memberId: 45,
    orderValue: 5970,
  },
  {
    memberId: 2,
    orderValue: 4760,
  },
  {
    memberId: 43,
    orderValue: 6750,
  },
  {
    memberId: 27,
    orderValue: 7520,
  },
  {
    memberId: 46,
    orderValue: 8610,
  },
  {
    memberId: 53,
    orderValue: 7220,
  },
  {
    memberId: 14,
    orderValue: 4810,
  },
  {
    memberId: 47,
    orderValue: 6010,
  },
  {
    memberId: 28,
    orderValue: 1310,
  },
  {
    memberId: 35,
    orderValue: 8220,
  },
  {
    memberId: 7,
    orderValue: 2170,
  },
  {
    memberId: 33,
    orderValue: 1770,
  },
  {
    memberId: 17,
    orderValue: 1210,
  },
  {
    memberId: 52,
    orderValue: 3420,
  },
  {
    memberId: 13,
    orderValue: 5980,
  },
  {
    memberId: 32,
    orderValue: 170,
  },
  {
    memberId: 41,
    orderValue: 5340,
  },
  {
    memberId: 21,
    orderValue: 6100,
  },
  {
    memberId: 52,
    orderValue: 5600,
  },
  {
    memberId: 1,
    orderValue: 4810,
  },
  {
    memberId: 29,
    orderValue: 5540,
  },
  {
    memberId: 59,
    orderValue: 2020,
  },
  {
    memberId: 11,
    orderValue: 1930,
  },
  {
    memberId: 22,
    orderValue: 190,
  },
  {
    memberId: 48,
    orderValue: 4700,
  },
  {
    memberId: 46,
    orderValue: 3540,
  },
  {
    memberId: 22,
    orderValue: 5660,
  },
  {
    memberId: 51,
    orderValue: 4130,
  },
  {
    memberId: 50,
    orderValue: 4720,
  },
  {
    memberId: 1,
    orderValue: 8040,
  },
  {
    memberId: 10,
    orderValue: 9580,
  },
  {
    memberId: 54,
    orderValue: 750,
  },
  {
    memberId: 10,
    orderValue: 490,
  },
  {
    memberId: 52,
    orderValue: 7690,
  },
  {
    memberId: 22,
    orderValue: 8940,
  },
  {
    memberId: 29,
    orderValue: 4650,
  },
  {
    memberId: 30,
    orderValue: 2170,
  },
  {
    memberId: 21,
    orderValue: 4730,
  },
  {
    memberId: 40,
    orderValue: 3060,
  },
  {
    memberId: 54,
    orderValue: 8280,
  },
  {
    memberId: 1,
    orderValue: 7410,
  },
  {
    memberId: 7,
    orderValue: 7960,
  },
  {
    memberId: 30,
    orderValue: 5950,
  },
  {
    memberId: 5,
    orderValue: 2300,
  },
  {
    memberId: 42,
    orderValue: 470,
  },
  {
    memberId: 50,
    orderValue: 2760,
  },
  {
    memberId: 6,
    orderValue: 2900,
  },
  {
    memberId: 47,
    orderValue: 6750,
  },
  {
    memberId: 44,
    orderValue: 90,
  },
  {
    memberId: 46,
    orderValue: 8780,
  },
  {
    memberId: 51,
    orderValue: 6570,
  },
  {
    memberId: 35,
    orderValue: 90,
  },
  {
    memberId: 44,
    orderValue: 8540,
  },
  {
    memberId: 37,
    orderValue: 3880,
  },
  {
    memberId: 28,
    orderValue: 5890,
  },
  {
    memberId: 43,
    orderValue: 8020,
  },
  {
    memberId: 43,
    orderValue: 8700,
  },
  {
    memberId: 43,
    orderValue: 1200,
  },
  {
    memberId: 5,
    orderValue: 820,
  },
  {
    memberId: 47,
    orderValue: 2400,
  },
  {
    memberId: 56,
    orderValue: 8170,
  },
  {
    memberId: 49,
    orderValue: 630,
  },
  {
    memberId: 21,
    orderValue: 8340,
  },
  {
    memberId: 5,
    orderValue: 3320,
  },
  {
    memberId: 30,
    orderValue: 7070,
  },
  {
    memberId: 52,
    orderValue: 4460,
  },
  {
    memberId: 4,
    orderValue: 9550,
  },
  {
    memberId: 28,
    orderValue: 9550,
  },
  {
    memberId: 48,
    orderValue: 9340,
  },
  {
    memberId: 12,
    orderValue: 9020,
  },
  {
    memberId: 32,
    orderValue: 4240,
  },
  {
    memberId: 52,
    orderValue: 5840,
  },
];
