const WORDBANK = [
  { value: "anabolic window", definition: "" },
  { value: "aesthetic", definition: "" },
  { value: "arnold press", definition: "" },
  { value: "beast mode", definition: "" },
  { value: "bench", definition: "" },
  { value: "bro split", definition: "" },
  { value: "bulk", definition: "" },
  { value: "calluses", definition: "" },
  { value: "cheat meal", definition: "" },
  { value: "clean and jerk", definition: "" },
  { value: "clean bulking", definition: "" },
  { value: "compound lift", definition: "" },
  { value: "cut", definition: "" },
  { value: "deadlift", definition: "" },
  { value: "delts", definition: "" },
  { value: "doms", definition: "" },
  { value: "drop set", definition: "" },
  { value: "dyel", definition: "" },
  { value: "ego lifting", definition: "" },
  { value: "failure", definition: "" },
  { value: "front squat", definition: "" },
  { value: "gainz", definition: "" },
  { value: "gironda dips", definition: "" },
  { value: "glutes", definition: "" },
  { value: "hamstrings", definition: "" },
  { value: "hard gainer", definition: "" },
  { value: "hypertrophy", definition: "" },
  { value: "iifym", definition: "" },
  { value: "iron", definition: "" },
  { value: "lat pulldown", definition: "" },
  { value: "macros", definition: "" },
  { value: "mirin", definition: "" },
  { value: "natty", definition: "" },
  { value: "noob gains", definition: "" },
  { value: "olympic lifting", definition: "" },
  { value: "pec deck", definition: "" },
  { value: "periodization", definition: "" },
  { value: "pr", definition: "" },
  { value: "pump", definition: "" },
  { value: "quads", definition: "" },
  { value: "rack", definition: "" },
  { value: "reps", definition: "" },
  { value: "rom", definition: "" },
  { value: "roidy", definition: "" },
  { value: "rpe", definition: "" },
  { value: "sets", definition: "" },
  { value: "shredded", definition: "" },
  { value: "skwaats", definition: "" },
  { value: "slaps", definition: "" },
  { value: "spotter", definition: "" },
  { value: "squat rack", definition: "" },
  { value: "stack", definition: "" },
  { value: "swole", definition: "" },
  { value: "t-bar row", definition: "" },
  { value: "tris", definition: "" },
  { value: "time under tension", definition: "" },
  { value: "vascularity", definition: "" },
  { value: "whey protein", definition: "" },
  { value: "gigachad", definition: "" },
  { value: "natty or not", definition: "" },
  { value: "plates", definition: "" },
  { value: "max out", definition: "" },
  { value: "pump cover", definition: "" },
  { value: "cutting cycle", definition: "" },
  { value: "bulking season", definition: "" },
  { value: "pre-workout", definition: "" },
  { value: "super set", definition: "" },
  { value: "concentric", definition: "" },
  { value: "eccentric", definition: "" },
  { value: "mind-muscle connection", definition: "" },
  { value: "full range of motion", definition: "" },
  { value: "split routine", definition: "" },
  { value: "aesthetic physique", definition: "" },
  { value: "cheat day", definition: "" },
  { value: "bro science", definition: "" },
  { value: "swole mate", definition: "" },
  { value: "gym rat", definition: "" },
  { value: "cutting phase", definition: "" },
  { value: "bulking phase", definition: "" },
  { value: "caloric surplus", definition: "" },
  { value: "caloric deficit", definition: "" },
  { value: "recomp", definition: "" },
  { value: "functional strength", definition: "" },
  { value: "gym flow", definition: "" },
  { value: "natty status", definition: "" },
  { value: "overtraining", definition: "" },
  { value: "deload", definition: "" },
  { value: "plyometrics", definition: "" },
  { value: "isolation exercise", definition: "" },
  { value: "compound movement", definition: "" },
  { value: "core stabilization", definition: "" },
  { value: "metabolic conditioning", definition: "" },
  { value: "high-intensity interval training", definition: "" },
  { value: "progressive overload", definition: "" },
  { value: "gym fail", definition: "" },
  { value: "sick", definition: "" },
  { value: "rad", definition: "" },
  { value: "dope", definition: "" },
  { value: "gear", definition: "" },
  { value: "juice", definition: "" },
  { value: "pumped", definition: "" },
  { value: "jacked", definition: "" },
  { value: "flex", definition: "" },
  { value: "lean", definition: "" },
  { value: "cycle", definition: "" },
  { value: "pre", definition: "" },
  { value: "post", definition: "" },
  { value: "gains", definition: "" },
  { value: "shred", definition: "" },
  { value: "ripped", definition: "" },
  { value: "cut", definition: "" },
  { value: "bulk", definition: "" },
  { value: "grind", definition: "" },
  { value: "hustle", definition: "" },
  { value: "bro", definition: "" },
  { value: "chill", definition: "" },
  { value: "max", definition: "" },
  { value: "stack", definition: "" },
  { value: "natty", definition: "" },
  { value: "sesh", definition: "" },
  { value: "brah", definition: "" },
  { value: "legend", definition: "" },
  { value: "beast", definition: "" },
  { value: "hardcore", definition: "" },
  { value: "boss", definition: "" },
] as const;

type ParagraphBounds = {
  lowerBound: number;
  upperBound: number;
};

type ParagraphCategory = "short" | "medium" | "long";

const PARAGRAPH: Record<ParagraphCategory, ParagraphBounds> = {
  short: { lowerBound: 20, upperBound: 50 },
  medium: { lowerBound: 50, upperBound: 100 },
  long: { lowerBound: 100, upperBound: 200 },
} as const;

type Paragraph = keyof typeof PARAGRAPH;

const getWordCount = (paragraph: Paragraph): number => {
  const { lowerBound, upperBound } = PARAGRAPH[paragraph];
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
};

export const getParagraphs = (
  count: number = 3,
  length: Paragraph = "medium"
) => {
  return new Array(count).fill(
    new Array(getWordCount(length))
      .fill(null)
      .map(() => {
        return WORDBANK[Math.floor(Math.random() * WORDBANK.length)]?.value;
      })
      .join(" ")
  );
};
