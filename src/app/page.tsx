"use client";

import { useState } from "react";

export default function BucketList() {
  const [bucketList, setBucketList] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setBucketList([...bucketList, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    setBucketList(bucketList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <main>
        <header className="bucketlist-header">
          <h1>My Bucket List</h1>
          <p>Track and achieve your dreams!</p>
        </header>
        <section className="bucketlist-section">
          <h2>Add a New Item</h2>
          <div>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter a bucket list item"
            />
            <button onClick={addItem}>Add</button>
          </div>
        </section>
        <section className="bucketlist-section">
          <h2>My Bucket List</h2>
          {bucketList.length > 0 ? (
            <ul>
              {bucketList.map((item, index) => (
                <li key={index}>
                  {item}{" "}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your bucket list is empty. Start adding items!</p>
          )}
        </section>
        <footer className="bucketlist-footer">
          © 2023 Bucket List. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
