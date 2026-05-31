"use client";

import { users } from "@/data/mockUsers";

export function getCurrentUser() {

  if (
    typeof window ===
    "undefined"
  ) {

    return {
      name: "Guest",
      avatar: "G",
    };

  }

  const existing =
    sessionStorage.getItem(
      "currentUser"
    );

  if (existing) {

    return JSON.parse(
      existing
    );

  }

  const user =
    users[
      Math.floor(
        Math.random() *
        users.length
      )
    ];

  sessionStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );

  return user;

}