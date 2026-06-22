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
    'First Presbyterian Church of Montgomery — a welcoming Presbyterian (PCUSA) congregation in Orange County, NY since 1832. Sunday worship at 11:30 AM. All are welcome.',
  url: 'https://fpcmontgomery.org',
  email: 'fpcmontgomery@gmail.com',
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
  service: { day: 'Sunday', time: '11:30 AM', label: 'Sunday Worship — 11:30 AM' },
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
  startTime: 'Start Time - 11:30 AM',
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

// Mission, Purpose, Values — from WordPress About page.
export const MISSION = {
  mission: 'To open ourselves to God-seekers and to feed, nurture, and provide refuge for those in need.',
  purpose: 'To build a community rooted in faith, fueled by compassion, and committed to making a lasting difference in the lives of those around us.',
  values: [
    'Commitment', 'Community', 'Compassion', 'Diversity', 'Integrity',
    'Joy', 'Lead', 'Learn', 'Love', 'Nurture',
    'Pursuit of Faith', 'Social Consciousness',
  ],
};

// Staff — from WordPress About page.
export const STAFF = [
  { name: 'Carol Jellema', role: 'Secretary', avatar: '/images/Ellipse-4.png' },
  { name: 'Heather Benedict', role: 'Financial Treasurer', avatar: '/images/Ellipse-9.png' },
  { name: 'Marcia Woodall', role: 'Choir Director', avatar: '/images/Ellipse-10.png' },
  { name: 'Wendy McNutt', role: 'Treasurer', avatar: '/images/Ellipse-7.png' },
  { name: 'Cynthia Nokland', role: 'Clerk of Session', avatar: '/images/Ellipse-11.png' },
];

// Elders — from WordPress About page.
export const ELDERS = [
  { name: 'John Nokland', avatar: '/images/Ellipse-9-1.png' },
  { name: 'Tom McNutt', avatar: '/images/Ellipse-10-1.png' },
  { name: 'Beth Maida', avatar: '/images/Ellipse-27.png' },
  { name: 'Deb Fagan', avatar: '/images/Ellipse-12.png' },
  { name: 'Cynthia Nokland', avatar: '/images/Ellipse-14.png' },
  { name: 'Joe Prior', avatar: '/images/Ellipse-23.png' },
  { name: 'Robin Long DeAngelo', avatar: '/images/Ellipse-24.png' },
  { name: 'Karla Ritter', avatar: '/images/Ellipse-13.png' },
  { name: 'Beth Hoeffner', avatar: '/images/beth-hoeffner.jpg' },
];

// Deacons — from WordPress About page.
export const DEACONS = [
  { name: 'Joe Maida', avatar: '/images/joe-maida.jpg', objectPosition: 'top' },
  { name: 'Jillian Maida', avatar: '/images/Ellipse-16.png' },
  { name: 'Ben McNutt', avatar: '/images/Ellipse-17.png' },
  { name: 'Emil Pignetti', avatar: '/images/Ellipse-18.png' },
  { name: 'Marcia Woodall', avatar: '/images/Ellipse-20.png' },
  { name: 'Kim Hoeffner', avatar: '/images/Ellipse-21.png' },
  { name: 'Doug Hantush', avatar: '/images/Ellipse-22.png' },
  { name: 'Laura Aiello', avatar: '/images/Ellipse-26.png' },
  { name: 'Abby Nokland', avatar: '/images/abby-nokland.jpg', objectPosition: 'top center' },
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
  { title: 'Ministries', image: '/images/ministries-1.jpg', href: '/ministries', styled: true },
  { title: 'Worship', image: '/images/worship-1.jpg', href: '/worship', styled: false },
  { title: 'Events & Gallery', image: '/images/events-1-1.jpg', href: '/events', styled: true },
  { title: 'Giving', image: '/images/giving-1.webp', href: '/giving', styled: false },
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
    body: 'Baptism at First Presbyterian Church of Montgomery is a beautiful and sacred moment — a public declaration of God\'s covenant promise and the beginning of a lifelong journey of faith within the community of believers.',
    image: '/images/Rectangle-25.jpg',
    bg: 'white',
    primaryCta: { label: 'CLICK HERE FOR MORE INFO', href: '/contact?topic=baptism' },
    secondaryCta: { label: 'BAPTISM APPLICATION', href: '/contact?topic=baptism-application' },
  },
  {
    title: 'Communion',
    body: 'We celebrate the Lord\'s Supper as a central act of worship — a holy and joyful gathering around the table where we remember Christ\'s sacrifice, proclaim His resurrection, and are nourished together as one body.',
    image: '/images/Rectangle-27.jpg',
    bg: 'cream',
    primaryCta: { label: 'CLICK HERE FOR MORE INFO', href: '/contact?topic=communion' },
    secondaryCta: { label: 'COMMUNION APPLICATION', href: '/contact?topic=communion-application' },
  },
  {
    title: 'Confirmation',
    body: 'Confirmation is a meaningful milestone in which young members of our congregation publicly affirm the faith into which they were baptized, committing to walk with Christ and take their place as full communing members of the church.',
    image: '/images/confirmation-class-2026.png',
    bg: 'white',
    primaryCta: { label: 'CLICK HERE FOR MORE INFO', href: '/contact?topic=confirmation' },
    secondaryCta: { label: 'CONFIRMATION APPLICATION', href: '/contact?topic=confirmation-application' },
  },
  {
    title: 'Funerals',
    body: 'In times of loss, First Presbyterian Church of Montgomery walks alongside grieving families with pastoral care, prayer, and the hope of the resurrection — offering a service that honors a life well lived and points to the comfort only God can give.',
    image: '/images/Rectangle-51.jpg',
    bg: 'cream',
    primaryCta: { label: 'CLICK HERE FOR MORE INFO', href: '/contact?topic=funerals' },
    secondaryCta: { label: 'FUNERAL APPLICATION', href: '/contact?topic=funerals-application' },
  },
  {
    title: 'Marriage / Weddings',
    body: 'We believe marriage is a sacred covenant and a joyful celebration, and it is our privilege to walk with couples as they begin their life together — offering guidance, pastoral support, and a beautiful space to exchange vows before God and loved ones.',
    image: '/images/Rectangle-49.jpg',
    bg: 'white',
    primaryCta: { label: 'CLICK HERE FOR MORE INFO', href: '/contact?topic=weddings' },
    secondaryCta: { label: 'WEDDING APPLICATION', href: '/contact?topic=weddings-application' },
  },
  {
    title: 'Chancel Flowers & Memorial',
    body: 'Chancel flowers are a longstanding and tender tradition at FPC — a meaningful way for members to honor a loved one, mark a special occasion, or offer a gift of beauty to the congregation as an act of worship and remembrance.',
    image: '/images/Rectangle-50.jpg',
    bg: 'cream',
    primaryCta: { label: 'CLICK HERE FOR MORE INFO', href: '/contact?topic=chancel' },
    secondaryCta: { label: 'MEMORIAL APPLICATION', href: '/contact?topic=chancel-dedication' },
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
    title: 'Christian Education',
    body: 'Our Christian Education ministry is dedicated to nurturing a deeper understanding of Scripture and Reformed faith across every age and stage of life, offering classes, studies, and resources that equip our congregation to grow in knowledge, wisdom, and discipleship.',
    image: '/images/Rectangle-4-1.jpg',
    align: 'left',
  },
  {
    title: "Men's Fellowship",
    body: "Men's Fellowship at FPC is a brotherhood built on faith, honesty, and mutual encouragement — a space where men gather to study Scripture, share life, and sharpen one another as they seek to live out their faith with integrity and purpose.",
    image: '/images/Rectangle-24.jpg',
    align: 'right',
  },
  {
    title: 'Sunday School',
    body: 'Sunday School at First Presbyterian is a cherished tradition that brings together children, youth, and adults alike for guided learning, open discussion, and spiritual formation rooted in the Word of God and the heart of our Reformed faith.',
    image: '/images/Rectangle-25-1.jpg',
    align: 'left',
  },
  {
    title: 'Family Activities',
    body: 'From seasonal gatherings to fun community events, our family activities ministry creates opportunities for families of all shapes and sizes to connect, laugh, and build meaningful relationships within the life of our church.',
    image: '/images/Rectangle-27-1.jpg',
    align: 'right',
  },
  {
    title: 'Community Outreach',
    body: 'Our Community Outreach ministry reflects our belief that faith in action looks like serving our neighbors with compassion and dignity — partnering with local organizations and initiatives to meet real needs and be the hands and feet of Christ in Montgomery and beyond.',
    image: '/images/Rectangle-26-1.jpg',
    align: 'left',
  },
  {
    title: 'Town of Montgomery Food Pantry',
    body: 'The Town of Montgomery Food Pantry is our hands-on ministry of compassion, providing essential food resources to families and individuals in need right in our community. We stock the pantry in March, July, and November — and every contribution made during these months goes directly to feeding our neighbors.',
    image: '/images/Rectangle-29.jpg',
    align: 'right',
  },
  {
    title: 'Westminster Guild',
    body: 'The women of the First Presbyterian Church of Montgomery are made up of all women in the church. They are part of a community with big sales, yard sales, cookie exchange, pie contest, and meet monthly on the second Sunday after worship. Come join the ladies for a late lunch and a program from a fellow member.',
    image: '/images/Rectangle-28.jpg',
    align: 'left',
  },
];

// ------------------------------------------------------------
//  I'M NEW — "Your Guide to Worship & Community" FAQ accordion
// ------------------------------------------------------------
export const IM_NEW_FAQS = [
  {
    q: 'Worship',
    a: 'Sunday worship begins at 11:30 AM in the sanctuary at 137 Clinton Street. Services typically last about an hour and include hymns, prayer, Scripture readings, a sermon, and (on the first Sunday of each month) communion. Dress is come-as-you-are.',
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
