import Fuse from "fuse.js";
import { menu } from "@/data/menu";

const fuse = new Fuse(menu, {
  keys: [
    "name",
    "description",
    "tags"
  ],
});

export function searchMenu(
  query: string
) {
  return fuse.search(query);
}