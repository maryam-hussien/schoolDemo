const postsData  = [
  {
    id: 1,
    author: "John Doe",
    content: "Excited for the school event next week!",
    date: "2024-10-14",
    likes: 12,
    comments: [
      { id: 1, commenter: "Jane Smith", comment: "Same here! Can't wait!" },
      { id: 2, commenter: "Bob Johnson", comment: "It's going to be awesome!" }
    ],
    image: "../assets/images/cat.jpeg",
    sharedBy: []
  },
  {
    id: 2,
    author: "Sarah Lee",
    content: "Just finished an amazing class on web development.",
    date: "2024-10-13",
    likes: 25,
    comments: [
      { id: 1, commenter: "Tom Harris", comment: "That sounds cool!" },
      { id: 2, commenter: "Emma Brown", comment: "Where can I find the resources?" }
    ],
    image: null,
    sharedBy: [{ id: 1, name: "Alice Green" }]
  },
  {
    id: 3,
    author: "Michael Clark",
    content: "Anyone up for a study group this weekend?",
    date: "2024-10-12",
    likes: 18,
    comments: [
      { id: 1, commenter: "Rachel Adams", comment: "I'm in! Let’s do it!" },
      { id: 2, commenter: "Chris Miller", comment: "Count me in!" }
    ],
    image: "../assets/images/cat.jpeg",
    sharedBy: []
  },
  {
    id: 4,
    author: "Emily White",
    content: "Here are some photos from last week's sports day. Great memories!",
    date: "2024-10-11",
    likes: 30,
    comments: [
      { id: 1, commenter: "Jake Taylor", comment: "It was so much fun!" },
      { id: 2, commenter: "Anna King", comment: "Thanks for sharing!" }
    ],
    image: "../assets/images/cat.jpeg",
    sharedBy: []
  },
  {
    id: 5,
    author: "David Green",
    content: "Does anyone need help with math homework?",
    date: "2024-10-10",
    likes: 7,
    comments: [
      { id: 1, commenter: "Lucas Brown", comment: "Yes, please! I need some guidance." },
      { id: 2, commenter: "Ella Blue", comment: "Can you explain the quadratic formula?" }
    ],
    image: null,
    sharedBy: [{ id: 2, name: "John Doe" }]
  },
  {
    id: 6,
    author: "Sophia Black",
    content: "Reminder: Tomorrow is the deadline for submitting art projects!",
    date: "2024-10-09",
    likes: 15,
    comments: [
      { id: 1, commenter: "Mia Brown", comment: "Thanks for the reminder!" },
      { id: 2, commenter: "Henry White", comment: "Almost done with mine!" }
    ],
    image: "../assets/images/cat.jpeg",
    sharedBy: []
  }
];
export default postsData 