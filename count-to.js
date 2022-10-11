const logAttempt = (attempt) => console.log(attempt.join(", "));

const countTo = (n) => Array.from(Array(n).keys()).map((v) => Math.random() > 0.25 ? v : "i forgor 💀");

const actuallyCountTo = (n) => {
  let attempts = 0;
  while(true) {
    attempts++;
    const attempt = countTo(n);
    logAttempt(attempt);
    if (attempt.find((e) => typeof e === "string") === undefined) {
      return { attempt, attempts };
    } else {
    }
  }
};

console.log(actuallyCountTo(17));
