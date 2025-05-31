"use client";
// This is a reserve name to show an error page
// any time an error is found
export default function Error({ error }) {
  return (
    <main className={"error"}>
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
