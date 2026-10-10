// Customer video reviews shown on the /reviews page.
//
// HOW TO ADD A VIDEO:
//   1. Drop the video file into  public/reviews/   (e.g. public/reviews/ayesha.mp4)
//   2. Add an entry below with  src: "/reviews/ayesha.mp4"
//      (the path is relative to the public/ folder, so it always starts with /reviews/)
//   3. Optional: add a poster image (a thumbnail shown before play) the same way,
//      e.g. poster: "/reviews/ayesha.jpg"
//
// Any entry left with  src: null  renders a styled "coming soon" placeholder card,
// so the page always looks complete. Replace null with a real path when the clip is ready.
//
// orientation: "portrait" (default, 9:16 phone video) or "landscape" (16:9).

export const reviewVideos = [
  {
    id: 1,
    src: "/reviews/review-1.mp4",
    poster: null,
    orientation: "portrait",
    name: "Nimra.",
    location: "Gujranwala",
    quote: "The mango achaar tastes just like my grandmother used to make.",
  },
  {
    id: 2,
    src: "/reviews/review-2.mp4",
    poster: null,
    orientation: "portrait",
    name: "Sheikh Usman.",
    location: "Lahore",
    quote: "Fresh, pure, and delivered fast. The garlic pickle is unreal.",
  },
];
