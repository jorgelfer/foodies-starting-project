// this is the file that reaches the db for data

import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * from meals").all();
}

// get meal does no longer return a promise
export function getMeal(slug) {
  // better-sqlite3 will protect against sql injection attacks
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
