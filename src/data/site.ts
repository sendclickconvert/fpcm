/**
 * Single source of truth for site-wide content.
 *
 * Real content sourced from:
 *   - Handbook2025.pdf (mission, purpose, values, governance, committees)
 *   - FIRST PRESBYTERIAN CHURCH CYNTHIA-SEAN.docx (sitemap, naming corrections)
 *   - Figma prototype screenshots
 */

export const CHURCH = {
  name: 'First Presbyterian Church of Montgomery',
  shortName: 'First Presbyterian Church',
  tagline: 'Christ Center · Community Driven · Worship',
  description:
    'First Presbyterian Church of Montgomery — a welcoming Presbyterian (PCUSA) congregation in Orange County, NY since 1832. Sunday worship at 10:00 AM. All are welcome.',
  url: 'https://fpcmontgomery.org',
  email: 'fpcmont137@frontiernet.net',
  emailDomain: {
    welcome: 'welcome@fpcmontgomery.org', // planned per CYNTHIA-SEAN
    pastor: 'pastor@fpcmontgomery.org',
    elders: 'elders@fpcmontgomery.org',
  },
  phone: '(845) 457-5383',
  phoneLink: '+18454575383',
  address: {
    street: '137 Clinton Street',
    city: 'Montgomery',
    region: 'NY',
    postalCode: '12549',
    country: 'US',
  },
  // Office hours — 9 AM to 1 PM because no current pastor (per CYNTHIA-SEAN DOCX).
  hours: '9:00 AM – 1:00 PM',
  hoursDays: 'Monday – Friday',
  presbytery: 'Hudson River',
  synod: 'The Northeast',
  founded: '1832',
  congregationSize: '101–250 members',
  worshipAttendance: 'Approx. 45',
  churchSchoolAttendance: 'Approx. 15',
  communityType: 'Village',
  social: {
    facebook: 'https://www.facebook.com/fpcmontgomery',
    youtube: 'https://www.youtube.com/@fpcmontgomery',
    twitter: 'https://twitter.com/fpcmontgomery',
    instagram: 'https://www.instagram.com/fpcmontgomery',
    linkedin: 'https://www.linkedin.com/company/fpcmontgomery',
  },
  service: { day: 'Sunday', time: '10:00 AM', label: 'Sunday Worship — 10:00 AM' },
};

// Primary nav — order from Figma top bar.
export const NAV = [
  { label: 'Home', href: '/' },
  { label: "I'm New", href: '/im-new' },
  { label: 'About Us', href: '/about' },
  { label: 'Worship', href: '/worship' },
  { label: 'Ministries', href: '/ministries' },
  { label: 'Events & Gallery', href: '/events' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: "I'm New", href: '/im-new' },
    { label: 'Worship', href: '/worship' },
  ],
  more: [
    { label: 'Ministries', href: '/ministries' },
    { label: 'Events & Gallery', href: '/events' },
    { label: 'Giving', href: '/giving' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

// Hero (homepage).
export const HERO = {
  headline: 'Grace Has Been Waiting For You',
  body: 'No matter where you are in life, you are welcome here.\nCome worship, connect, and grow with us at\nFirst Presbyterian Church of Montgomery.',
  cta: { label: 'Join Us Here', href: '/im-new' },
  bgImage: '/images/bg-1-scaled.jpg',
};

// Upcoming event red bar.
export const UPCOMING_EVENT = {
  eyebrow: 'Upcoming Event',
  title: 'A Celebration of Community',
  dateDay: '22',
  dateMonth: 'MAR',
  startTime: 'Start Time - 10:00 AM',
  location: '137 Clinton Street, Montgomery, NY, 12549',
  startISO: '2026-03-22T10:00:00-04:00',
};

/**
 * Pastor — currently VACANT per CYNTHIA-SEAN DOCX:
 *   "Pastor: Vacant" / "they are in the middle of a pastor search now"
 *
 * Until they hire a new pastor, the homepage "Message from The Pastor"
 * section uses an interim "Message from the Elders" framing. Swap back
 * to a named pastor by editing this object.
 */
export const PASTOR = {
  heading: 'The Pastor',
  name: 'Rev. Neill McKay',
  title: 'Senior Pastor, First Presbyterian Church of Montgomery',
  bio: 'Leading the congregation with faith, vision, and a heart for the Montgomery community.',
  avatar: '/images/Frame-25.png',
  quote:
    '"Our sanctuary is more than a building — it is where God brought me, and where I am called to serve. My vision for First Presbyterian in 2026 is simple — to grow together, nurture our youth, deepen our relationships, and build a faithful partnership between pastor, church, and community. I am truly honored to serve you, and I look forward to many years of doing God\'s work together right here in Montgomery."',
  cta: 'Join Us this Sunday – All are Welcome!',
};

// Mission, Purpose, Values — from the Handbook2025.pdf.
export const MISSION = {
  mission: 'To open ourselves to God-seekers and to feed, nurture, and provide refuge for those in need.',
  purpose: 'To care about others and our well-being with love.',
  values: [
    'Commitment', 'Community', 'Compassion', 'Diversity', 'Integrity',
    'Joy', 'Lead', 'Learn', 'Love', 'Nurture',
    'Pursuit of Faith', 'Social Consciousness',
  ],
};

// Staff — roles corrected against Handbook2025.pdf "CHURCH STAFF" section.
export const STAFF = [
  { name: 'Carol Jellema', role: 'Secretary', avatar: '/images/Ellipse-4.png' },
  { name: 'Heather Benedict', role: 'Financial Secretary', avatar: '/images/Ellipse-9.png' },
  { name: 'Marcia Woodall', role: 'Music Director / Organist', avatar: '/images/Ellipse-10.png' },
  { name: 'Wendy McNutt', role: 'Treasurer (Volunteer)', avatar: '/images/Ellipse-7.png' },
  { name: 'Cynthia Nokland', role: 'Clerk of Session', avatar: '/images/Ellipse-11.png' },
];

// Elders — from the About page mockup.
export const ELDERS = [
  { name: 'Cynthia Nokland', avatar: '/images/elder-cynthia.jpg' },
  { name: 'Robion Long DeAngelo', avatar: '/images/elder-robion.jpg' },
  { name: 'Robin McPhillips', avatar: '/images/elder-robin.jpg' },
  { name: 'Beth Hoeffner', avatar: '/images/elder-beth.jpg' },
  { name: 'Tom McNutt', avatar: '/images/elder-tom.jpg' },
  { name: 'Joe Prior', avatar: '/images/elder-joe.jpg' },
];

// Deacons — from About page mockup.
export const DEACONS = [
  { name: 'Debbie Fagen', avatar: '/images/deacon-debbie.jpg' },
  { name: 'Donna Powels', avatar: '/images/deacon-donna.jpg' },
  { name: 'Joe Maida', avatar: '/images/deacon-joe.jpg' },
  { name: 'Ben McNutt', avatar: '/images/deacon-ben.jpg' },
  { name: 'Emil Pignetti', avatar: '/images/deacon-emil.jpg' },
  { name: 'Marcia Woodall', avatar: '/images/deacon-marcia.jpg' },
  { name: 'Kim Hoeffner', avatar: '/images/deacon-kim.jpg' },
];

// Session Committees — from Handbook2025.pdf.
export const COMMITTEES = [
  'Personnel Committee',
  'Christian Education Committee',
  'Worship Committee',
  'Membership Development Committee',
  'Mission Committee',
  'Building & Grounds Committee',
  'Nominating Committee',
  'Stewardship & Budget Committee',
];

// Sunday Services Livestream — homepage video grid.
export const LIVESTREAM = {
  cta: { label: 'Watch More Sermons on YouTube', href: 'https://www.youtube.com/@fpcmontgomery' },
  main: {
    title: 'Sabbath Evening Worship',
    subtitle: 'First Pres Montgomery',
    image: '/images/livestream-sabbath-evening.jpg',
    href: 'https://www.youtube.com/@fpcmontgomery',
  },
  side: [
    { title: 'Sabbath Morning Worship', subtitle: 'First Pres Montgomery', image: '/images/livestream-sabbath-morning.jpg', href: 'https://www.youtube.com/@fpcmontgomery' },
    { title: 'Sunday School at', subtitle: 'First Pres Montgomery', image: '/images/livestream-sunday-school.jpg', href: 'https://www.youtube.com/@fpcmontgomery' },
  ],
};

// "New Here?" — homepage block + I'm New page intro.
export const NEW_HERE = {
  eyebrow: 'Discover FPC',
  headline: 'New Here?',
  subhead: 'Welcome!',
  body: 'We are glad you are here. Whether you are new to faith, finding your way back, or simply looking for a place to belong, you are welcome at First Presbyterian Church of Montgomery. We are real people, walking this journey together — and there is a place here that is yours. Come as you are, and let us walk together.',
  cta: { label: 'Plan Your Visit', href: '/im-new' },
  image: '/images/new-here-church.png',
};

// 4 category cards on the homepage.
export const LIFE_CATEGORIES = [
  { title: 'Ministries', image: '/images/ministries-1.jpg', href: '/ministries' },
  { title: 'Worship', image: '/images/worship-1.jpg', href: '/worship' },
  { title: 'Events & Gallery', image: '/images/events-1-1.jpg', href: '/events' },
  { title: 'Giving', image: '/images/giving-1.webp', href: '/giving' },
];

export const FEATURED_REVIEW = {
  quote:
    'From the moment I walked through the doors, I felt welcomed and at home. The messages are powerful and rooted in the Word, and the community is genuinely loving and supportive.',
  attribution: 'A First Presbyterian member',
  image: '/images/Component-11.jpg',
};

export const MARQUEE_ITEMS = [
  'Christ Center', 'Community Driven', 'Worship',
  'People Empowering', 'Life Giving',
];

// ------------------------------------------------------------
//  WORSHIP page content
// ------------------------------------------------------------
export const WORSHIP_SACRAMENTS = [
  {
    title: 'Baptism',
    body: 'Baptism is a sacrament of belonging — a public sign of God\'s grace and the welcome of our community. We baptize infants, children, and adults at First Presbyterian. If you or your child are considering baptism, please reach out to start the conversation.',
    image: '/images/worship-baptism.jpg',
    bg: 'navy',
    primaryCta: { label: 'Learn more about Baptism', href: '/contact?topic=baptism' },
    secondaryCta: { label: 'Baptism Application', href: '/contact?topic=baptism-application' },
  },
  {
    title: 'Communion',
    body: 'The Lord\'s Supper is celebrated on the first Sunday of each month and at other significant moments in the church year. All who profess faith in Jesus Christ are welcome at the table.',
    image: '/images/worship-communion.jpg',
    bg: 'cream',
    primaryCta: { label: 'Learn more about Communion', href: '/contact?topic=communion' },
    secondaryCta: { label: 'Communion Application', href: '/contact?topic=communion-application' },
  },
  {
    title: 'Confirmation',
    body: 'Confirmation is a milestone for our youth — a chance to publicly profess faith and step into membership. Our Christian Education team walks alongside students through study, prayer, and service.',
    image: '/images/worship-confirmation.jpg',
    bg: 'cream',
    primaryCta: { label: 'Learn more about Confirmation', href: '/contact?topic=confirmation' },
    secondaryCta: { label: 'Confirmation Application', href: '/contact?topic=confirmation-application' },
  },
  {
    title: 'Funerals',
    body: 'In times of loss, we walk with families through grief and remembrance. Funeral and memorial services at First Presbyterian honor the life of the loved one and proclaim the hope of the resurrection.',
    image: '/images/worship-funerals.jpg',
    bg: 'cream',
    primaryCta: { label: 'Learn more about Funeral Services', href: '/contact?topic=funerals' },
    secondaryCta: { label: 'Funerals Application', href: '/contact?topic=funerals-application' },
  },
  {
    title: 'Marriage / Weddings',
    body: 'We rejoice in celebrating the marriages of those connected to First Presbyterian. Our pastor and worship committee will guide you through preparation, planning, and the service itself.',
    image: '/images/worship-weddings.jpg',
    bg: 'navy',
    primaryCta: { label: 'Learn more about Weddings', href: '/contact?topic=weddings' },
    secondaryCta: { label: 'Weddings Application', href: '/contact?topic=weddings-application' },
  },
  {
    title: 'Chancel Flowers & Memorial',
    body: 'Honoring a loved one or marking a special occasion through flowers and memorial gifts is a meaningful way to participate in worship. Contact the office to schedule a Sunday dedication.',
    image: '/images/worship-flowers.jpg',
    bg: 'cream',
    primaryCta: { label: 'Learn more about Chancel Flowers', href: '/contact?topic=chancel' },
    secondaryCta: { label: 'Dedication Form', href: '/contact?topic=chancel-dedication' },
  },
];

export const HOLIDAY_SERVICES = [
  { name: 'Christmas', icon: 'snowflake' },
  { name: 'Easter', icon: 'egg' },
  { name: 'Lent', icon: 'leaf' },
  { name: 'Holy Week', icon: 'cross' },
  { name: 'Good Friday', icon: 'crown' },
];

// ------------------------------------------------------------
//  MINISTRIES page content
//  Note: per CYNTHIA-SEAN DOCX, "Women's Circle" is renamed
//  "Westminster Guild", and "Presbyterian Hunger Program" is
//  named "Town of Montgomery Food Pantry" locally.
// ------------------------------------------------------------
export const MINISTRIES_LIST = [
  {
    title: 'Adult Bible Study',
    body: 'Weekly gatherings to read, study, and apply Scripture together. All adults welcome — whether you have been reading the Bible for decades or are just starting out.',
    image: '/images/ministry-bible-study.jpg',
    align: 'right',
  },
  {
    title: 'Christian Education',
    body: 'Programs across all ages to grow in faith and understanding — from Sunday School and youth ministry to adult formation classes.',
    image: '/images/ministry-christian-ed.jpg',
    align: 'left',
  },
  {
    title: "Men's Fellowship",
    body: 'A community of men gathering for fellowship, study, and service. Monthly breakfasts and seasonal service projects keep us connected.',
    image: '/images/ministry-mens.jpg',
    align: 'right',
  },
  {
    title: 'Westminster Guild',
    body: 'The women\'s fellowship and service group of First Presbyterian. Westminster Guild leads study, fellowship, and outreach throughout the year.',
    image: '/images/ministry-westminster.jpg',
    align: 'left',
  },
  {
    title: 'Sunday School',
    body: 'Sunday morning Christian education for children and youth — engaging stories, crafts, and conversation that build a foundation of faith.',
    image: '/images/ministry-sunday-school.jpg',
    align: 'right',
  },
  {
    title: 'Family Activities',
    body: 'Events throughout the year designed for families to worship, learn, and play together — picnics, game nights, and seasonal celebrations.',
    image: '/images/ministry-family.jpg',
    align: 'left',
  },
  {
    title: 'Retreats',
    body: 'Marriage, men\'s, and women\'s retreats offer space for renewal, learning, and deeper connection — both within our community and beyond.',
    image: '/images/ministry-retreats.jpg',
    align: 'right',
  },
  {
    title: 'Health Ministry',
    body: 'Caring for one another\'s health and well-being — wellness check-ins, prayer support, and community resources for those navigating illness or recovery.',
    image: '/images/ministry-health.jpg',
    align: 'left',
  },
  {
    title: 'Overseas Missionary',
    body: 'We support missionary partners serving around the world through prayer, financial gifts, and ongoing relationship.',
    image: '/images/ministry-missionary.jpg',
    align: 'right',
  },
  {
    title: 'Community Outreach',
    body: 'Active engagement with our neighbors in Montgomery and Orange County — from disaster relief to seasonal collections and partner organizations.',
    image: '/images/ministry-outreach.jpg',
    align: 'left',
  },
  {
    title: 'Town of Montgomery Food Pantry',
    body: 'Our local partnership with the Presbyterian Hunger Program — providing food, household essentials, and dignity to neighbors in need throughout the year.',
    image: '/images/ministry-food-pantry.jpg',
    align: 'right',
  },
  {
    title: 'Senior Care',
    body: 'Visits, transportation, prayer, and practical support for older members of our church and community. We walk alongside our seniors with care and respect.',
    image: '/images/ministry-senior.jpg',
    align: 'left',
  },
];

// ------------------------------------------------------------
//  I'M NEW — "Your Guide to Worship & Community" FAQ accordion
// ------------------------------------------------------------
export const IM_NEW_FAQS = [
  {
    q: 'Worship',
    a: 'Sunday worship begins at 10:00 AM in the sanctuary at 137 Clinton Street. Services typically last about an hour and include hymns, prayer, Scripture readings, a sermon, and (on the first Sunday of each month) communion. Dress is come-as-you-are.',
  },
  {
    q: 'Where do I go on Sundays?',
    a: 'Pull into the parking lot off Clinton Street and enter through the main doors. Greeters will welcome you and point you toward the sanctuary. Restrooms and a coatroom are just inside the entrance.',
  },
  {
    q: 'Children',
    a: 'Children are welcome in worship at every age. Sunday School runs concurrently with worship for younger children. A nursery space is available for the youngest visitors.',
  },
  {
    q: 'Youth',
    a: 'Our youth ministry includes Sunday School for school-age children, Confirmation classes for older youth, and seasonal events throughout the year. Reach out to learn how your family can plug in.',
  },
  {
    q: 'Fellowship and Formation',
    a: 'Beyond Sunday morning, we gather for adult Bible study, Westminster Guild (women\'s fellowship), Men\'s Fellowship, retreats, and family events. There is a place for every season of life.',
  },
  {
    q: 'Join First Presbyterian Church',
    a: 'Membership is welcomed through public profession of faith, reaffirmation, or transfer of membership. Speak with an elder after worship, or reach out through the contact form below to start the conversation.',
  },
];
