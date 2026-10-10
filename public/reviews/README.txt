Drop customer video review files into this folder.

Example:
  public/reviews/ayesha.mp4
  public/reviews/ayesha.jpg   (optional poster/thumbnail)

Then reference them from src/data/reviews.js:
  { id: 4, src: "/reviews/ayesha.mp4", poster: "/reviews/ayesha.jpg",
    orientation: "portrait", name: "Ayesha K.", location: "Lahore",
    quote: "..." }

Keep clips short (under ~60s) and compressed (H.264 .mp4 is the safest
format for every browser). Vertical phone recordings are "portrait";
widescreen clips are "landscape".
