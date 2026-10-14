export type StoryMilestone = {
  year: string
  title: string
  description: string
  imageUrl: string
}

export type TimelineEvent = {
  time: string
  title: string
  description: string
  icon: 'sparkles' | 'rings' | 'camera' | 'glass' | 'music'
}

export type GalleryImage = {
  src: string
  alt: string
  orientation: 'portrait' | 'landscape' | 'square'
}

export const weddingDetails = {
  couple: {
    partnerOne: 'Prameesha',
    partnerTwo: 'Pathum',
    displayNames: 'Prameesha & Pathum',
    initials: 'P & P',
  },
  weddingDate: '2027-06-20T16:30:00+05:30',
  displayDate: 'Saturday, June 20, 2027',
  ceremonyTime: '4:30 PM',
  receptionTime: '7:00 PM',
  venue: {
    name: 'Sample Garden Estate',
    address: '123 Placeholder Lane, Your City, Country',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Sample%20Garden%20Estate',
  },
  dressCode: 'Formal garden attire in soft neutrals, pastels, or classic eveningwear.',
  invitationMessage:
    'With joyful hearts, we invite you to celebrate an evening of vows, dinner, music, and candlelit memories.',
  guestMessage:
    'Your presence is the most meaningful gift. Thank you for joining us as we begin this new chapter together.',
  rsvpUrl: '',
  musicPath: '/music/wedding-song.mp3',
  heroImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85',
  storyIntro:
    'This sample story can be replaced with your own memories, places, and little details that make the celebration personal.',
  storyMilestones: [
    {
      year: '2021',
      title: 'The first hello',
      description: 'A warm conversation turned into the beginning of something quietly extraordinary.',
      imageUrl:
        'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=85',
    },
    {
      year: '2023',
      title: 'A favorite season',
      description: 'Weekend trips, handwritten notes, and ordinary days started to feel like home.',
      imageUrl:
        'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
    },
    {
      year: '2026',
      title: 'The promise',
      description: 'A meaningful question, a joyful yes, and the beginning of planning this celebration.',
      imageUrl:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
    },
  ] satisfies StoryMilestone[],
  timeline: [
    {
      time: '4:00 PM',
      title: 'Guest Arrival',
      description: 'Welcome drinks and soft music in the garden.',
      icon: 'sparkles',
    },
    {
      time: '4:30 PM',
      title: 'Ceremony',
      description: 'An intimate exchange of vows surrounded by loved ones.',
      icon: 'rings',
    },
    {
      time: '5:30 PM',
      title: 'Portraits',
      description: 'Family photographs and golden-hour couple portraits.',
      icon: 'camera',
    },
    {
      time: '7:00 PM',
      title: 'Reception',
      description: 'Dinner, toasts, dancing, and a candlelit celebration.',
      icon: 'glass',
    },
    {
      time: '9:00 PM',
      title: 'Dancing',
      description: 'Music, dessert, and the sweetest late-evening moments.',
      icon: 'music',
    },
  ] satisfies TimelineEvent[],
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85',
      alt: 'Wedding bouquet in soft blush and ivory tones',
      orientation: 'portrait',
    },
    {
      src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85',
      alt: 'Elegant wedding table setting with candles',
      orientation: 'landscape',
    },
    {
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85',
      alt: 'Wedding rings with floral details',
      orientation: 'square',
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
      alt: 'Outdoor wedding ceremony aisle',
      orientation: 'portrait',
    },
    {
      src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=85',
      alt: 'Romantic reception details under warm lights',
      orientation: 'landscape',
    },
  ] satisfies GalleryImage[],
}
