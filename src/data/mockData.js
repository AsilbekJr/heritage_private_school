// src/data/mockData.js

export const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "admin",
    fullName: "Adminov Admin",
    email: "admin@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
  },
  {
    id: 2,
    username: "student1",
    password: "student123",
    role: "student",
    fullName: "Sardor Karimov",
    email: "sardor@example.com",
    phone: "+998901234567",
    groupId: 1,
    balance: -500000,
    attendance: 85,
  },
  {
    id: 3,
    username: "teacher1",
    password: "teacher123",
    role: "teacher",
    fullName: "Nodira Ahmadova",
    email: "nodira@example.com",
    salary: 5000000,
    groups: [1, 2],
  },
];

export const students = [
  {
    id: 1,
    fullName: "Sardor Karimov",
    phone: "+998901234567",
    email: "sardor@example.com",
    groupId: 1,
    balance: -500000, // qarz
    totalPaid: 2000000,
    startDate: "2024-01-15",
    status: "active",
    attendance: 85,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student1",
  },
  {
    id: 2,
    fullName: "Malika Toshmatova",
    phone: "+998901234568",
    email: "malika@example.com",
    groupId: 1,
    balance: 0,
    totalPaid: 2500000,
    startDate: "2024-01-20",
    status: "active",
    attendance: 92,
  },
  // ... ko'proq
];

export const groups = [
  {
    id: 1,
    name: "Frontend Development - A1",
    teacherId: 3,
    courseId: 1,
    schedule: [
      { day: "Dushanba", time: "09:00-11:00", room: "101" },
      { day: "Chorshanba", time: "09:00-11:00", room: "101" },
      { day: "Juma", time: "09:00-11:00", room: "101" },
    ],
    studentCount: 15,
    price: 500000,
    startDate: "2024-01-15",
    endDate: "2024-06-15",
    status: "active",
  },
  // ...
];

export const payments = [
  {
    id: 1,
    studentId: 1,
    amount: 500000,
    date: "2024-11-01",
    method: "cash",
    status: "paid",
    note: "Noyabr oyi",
  },
  // ...
];

export const attendance = [
  {
    id: 1,
    studentId: 1,
    groupId: 1,
    date: "2024-12-01",
    status: "present", // present, absent, late, excused
  },
  // ...
];
