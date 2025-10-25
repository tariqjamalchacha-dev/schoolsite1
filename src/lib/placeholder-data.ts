export const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    summary: "Students showcased amazing projects at this year's science fair. See the list of winners and their innovative ideas.",
    category: "Academics",
    date: new Date(2024, 4, 15),
  },
  {
    id: 2,
    title: "Varsity Basketball Team Wins Championship",
    summary: "A thrilling final match saw our basketball team clinch the state championship. Congratulations to the players and coaches!",
    category: "Sports",
    date: new Date(2024, 4, 12),
  },
  {
    id: 3,
    title: "Upcoming Parent-Teacher Conferences",
    summary: "Conferences are scheduled for next month. Please sign up for a slot to discuss your child's progress.",
    category: "Announcements",
    date: new Date(2024, 4, 10),
  },
  {
    id: 4,
    title: "School Play 'A Midsummer Night's Dream' a Huge Success",
    summary: "The drama club's production was a fantastic showcase of talent. Thank you to everyone who came to support our students.",
    category: "Arts & Culture",
    date: new Date(2024, 4, 5),
  },
];

const now = new Date();

export const schoolEvents = [
  {
    id: 1,
    date: new Date(now.getFullYear(), 5, 1),
    title: "Summer Break Begins",
    description: "School closed for summer vacation.",
    category: "Holiday",
  },
  {
    id: 2,
    date: new Date(now.getFullYear(), 4, 27),
    title: "Memorial Day",
    description: "School closed in observance of Memorial Day.",
    category: "Holiday",
  },
  {
    id: 3,
    date: new Date(now.getFullYear(), 4, 20),
    title: "Final Exams (Grades 9-11)",
    description: "Week-long final examinations for underclassmen.",
    category: "Academics",
  },
  {
    id: 4,
    date: new Date(now.getFullYear(), 4, 24),
    title: "Senior Prom",
    description: "Annual Senior Prom at The Grand Ballroom.",
    category: "Social Event",
  },
  {
    id: 5,
    date: new Date(now.getFullYear(), 4, 30),
    title: "Graduation Ceremony",
    description: "Class of 2024 Graduation Ceremony on the main field.",
    category: "Ceremony",
  },
  {
    id: 6,
    date: new Date(2024, 5, 12, 16, 0, 0),
    title: "Today's Soccer Match",
    description: "Varsity Soccer vs. Northwood High at 4:00 PM.",
    category: "Sports",
  }
];

export const staffMembers = [
  {
    id: 1,
    name: "Principal Thompson",
    role: "School Principal",
    email: "p.thompson@campusconnect.edu",
    phone: "(123) 456-7890",
    imageId: "staff-1",
  },
  {
    id: 2,
    name: "Mr. Robert Davis",
    role: "Vice Principal & Math Department Head",
    email: "r.davis@campusconnect.edu",
    phone: "(123) 456-7891",
    imageId: "staff-2",
  },
  {
    id: 3,
    name: "Ms. Maria Garcia",
    role: "Head of Science Department",
    email: "m.garcia@campusconnect.edu",
    phone: "(123) 456-7892",
    imageId: "staff-3",
  },
  {
    id: 4,
    name: "Mr. David Chen",
    role: "English & Literature Teacher",
    email: "d.chen@campusconnect.edu",
    phone: "(123) 456-7893",
    imageId: "staff-4",
  },
  {
    id: 5,
    name: "Mrs. Susan Williams",
    role: "School Counselor",
    email: "s.williams@campusconnect.edu",
    phone: "(123) 456-7894",
    imageId: "staff-5",
  },
  {
    id: 6,
    name: "Coach Michael Miller",
    role: "Athletic Director & PE Teacher",
    email: "m.miller@campusconnect.edu",
    phone: "(123) 456-7895",
    imageId: "staff-6",
  },
];

export const galleryItems = [
  { id: 1, title: "Collaborative Learning", description: "Students working together in a modern classroom environment.", imageId: "gallery-1" },
  { id: 2, title: "The Knowledge Hub", description: "Our extensive library, a quiet place for study and research.", imageId: "gallery-2" },
  { id: 3, title: "Go Team!", description: "Action shot from a heated basketball game in our gymnasium.", imageId: "gallery-3" },
  { id: 4, title: "Future Scientists", description: "Students engaged in a hands-on experiment in the science lab.", imageId: "gallery-4" },
  { id: 5, title: "Our Campus", description: "The main school building on a bright, sunny day.", imageId: "gallery-5" },
  { id: 6, title: "Drama Club Performance", description: "The cast of the school play taking a bow on stage.", imageId: "gallery-6" },
];
