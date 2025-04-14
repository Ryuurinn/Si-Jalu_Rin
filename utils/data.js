// Sample data for Si Jalu

// Quest Types
const questTypes = [
{
  id: 1,
  name: 'Transportation',
  icon: 'fa-solid fa-car',
  description: 'Need a ride somewhere? Looking for help with moving or delivery? Transportation quests got you covered.',
  tags: ['Ride', 'Moving', 'Delivery', 'Airport', 'Shopping', 'Furniture']
},
{
  id: 2,
  name: 'Housechores',
  icon: 'fa-solid fa-broom',
  description: 'From cleaning to repairs, find help with all your household tasks and maintenance needs.',
  tags: ['Cleaning', 'Repair', 'Gardening', 'Cooking', 'Painting', 'Assembly']
},
{
  id: 3,
  name: 'Education',
  icon: 'fa-solid fa-graduation-cap',
  description: 'Tutoring, homework help, or study buddies. Connect with people to help you learn and grow.',
  tags: ['Tutoring', 'Homework', 'Language', 'Math', 'Science', 'Arts', 'Music']
},
{
  id: 4,
  name: 'Hobby',
  icon: 'fa-solid fa-palette',
  description: 'Find companions for your favorite activities or get help learning a new skill or craft.',
  tags: ['Art', 'Music', 'Sports', 'Gaming', 'Outdoors', 'Crafts']
},
{
  id: 5,
  name: 'Health',
  icon: 'fa-solid fa-heart-pulse',
  description: 'Get assistance with health-related activities like doctor appointments, fitness buddies, or wellness support.',
  tags: ['Medical', 'Fitness', 'Elderly', 'Wellness', 'Companion', 'Mental Health']
},
{
  id: 6,
  name: 'Social',
  icon: 'fa-solid fa-users',
  description: 'Find companions for social events, gatherings, or just someone to talk to when you need company.',
  tags: ['Events', 'Parties', 'Conversation', 'Dating', 'Networking', 'Friendship']
}];


// Sample Quests
const sampleQuests = [
{
  id: 1,
  title: 'Need a ride to downtown on Saturday',
  type: 'Transportation',
  tags: ['Ride', 'Medical'],
  description: 'I need to get to a doctor\'s appointment on Saturday at 2 PM. Can someone give me a ride?',
  location: 'Central District',
  reward: '$15',
  date: '2023-07-15',
  status: 'open',
  poster: {
    name: 'Alex Johnson',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 2,
  title: 'Help me clean my apartment',
  type: 'Housechores',
  tags: ['Cleaning', 'Moving'],
  description: 'Need help deep-cleaning my 2-bedroom apartment before moving out. Should take about 3 hours.',
  location: 'West End',
  reward: '$50',
  date: '2023-07-17',
  status: 'open',
  poster: {
    name: 'Sam Wilson',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 3,
  title: 'Math tutor needed for calculus',
  type: 'Education',
  tags: ['Tutoring', 'Math', 'College'],
  description: 'College student struggling with calculus. Need someone who can explain concepts clearly.',
  location: 'Online',
  reward: '$25/hour',
  date: '2023-07-18',
  status: 'open',
  poster: {
    name: 'Jamie Lee',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 4,
  title: 'Looking for a hiking buddy',
  type: 'Hobby',
  tags: ['Outdoors', 'Sports', 'Friendship'],
  description: 'Planning a hike at Mountain Ridge Trail this Sunday. Would love some company!',
  location: 'Mountain Ridge',
  reward: 'Company and conversation',
  date: '2023-07-16',
  status: 'open',
  poster: {
    name: 'Chris Parker',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 5,
  title: 'Help moving furniture to new apartment',
  type: 'Transportation',
  tags: ['Moving', 'Furniture', 'Heavy Lifting'],
  description: 'I need help moving a couch, bed, and a few boxes to my new place about 2 miles away.',
  location: 'East Side',
  reward: '$75',
  date: '2023-07-20',
  status: 'open',
  poster: {
    name: 'Taylor Swift',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 6,
  title: 'Need help with gardening',
  type: 'Housechores',
  tags: ['Gardening', 'Outdoors', 'Planting'],
  description: 'Looking for someone to help plant new flowers and trim bushes in my garden.',
  location: 'Suburban Area',
  reward: '$40',
  date: '2023-07-22',
  status: 'open',
  poster: {
    name: 'Jordan Smith',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 7,
  title: 'Elderly parent needs companion for doctor visit',
  type: 'Health',
  tags: ['Elderly', 'Medical', 'Companion'],
  description: 'Looking for someone to accompany my 78-year-old mother to her doctor appointment and help her get around.',
  location: 'Downtown Medical Center',
  reward: '$45',
  date: '2023-07-19',
  status: 'open',
  poster: {
    name: 'Emily Chen',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 8,
  title: 'Fitness buddy needed for morning runs',
  type: 'Health',
  tags: ['Fitness', 'Running', 'Outdoors'],
  description: 'Looking for a running partner to help me stay motivated. I run 3 times a week in the early morning.',
  location: 'Riverside Park',
  reward: 'Mutual motivation and possible coffee after',
  date: '2023-07-16',
  status: 'open',
  poster: {
    name: 'Mark Lewis',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 9,
  title: 'Plus one needed for wedding reception',
  type: 'Social',
  tags: ['Events', 'Formal', 'Conversation'],
  description: 'Need a friendly person to accompany me to a wedding. Just looking for good conversation and someone to dance with.',
  location: 'Grand Hotel Ballroom',
  reward: '$100 plus free dinner and drinks',
  date: '2023-07-29',
  status: 'open',
  poster: {
    name: 'David Kim',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
},
{
  id: 10,
  title: 'Networking partner for industry conference',
  type: 'Social',
  tags: ['Networking', 'Professional', 'Business'],
  description: 'Looking for someone in the tech industry to attend a networking event with me. We can help introduce each other to connections.',
  location: 'Convention Center',
  reward: 'Ticket to the event (worth $75) and mutual networking benefits',
  date: '2023-07-25',
  status: 'open',
  poster: {
    name: 'Aisha Patel',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  }
}];


// Gallery Images
const galleryImages = [
{
  id: 1,
  url: 'https://images.unsplash.com/photo-1586034679970-cb7b5fc4928a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  title: 'Helping a neighbor move',
  description: 'John helped Sarah move to her new apartment across town.'
},
{
  id: 2,
  url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  title: 'Math tutoring session',
  description: 'Maya helping a student master calculus concepts.'
},
{
  id: 3,
  url: 'https://images.unsplash.com/photo-1590422749897-47036da0b0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  title: 'Home cleaning quest',
  description: 'Alex helped clean and organize Jessica\'s apartment.'
},
{
  id: 4,
  url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  title: 'Group hiking adventure',
  description: 'A group that met through Si Jalu enjoying a mountain hike together.'
},
{
  id: 5,
  url: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  title: 'Grocery delivery help',
  description: 'Tom helping an elderly neighbor with their weekly grocery shopping.'
},
{
  id: 6,
  url: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  title: 'Programming lesson',
  description: 'Online coding tutorial session between Si Jalu users.'
}];