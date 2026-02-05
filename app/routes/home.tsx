import { Button } from "@mui/material";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QPMatrix" },
    { name: "description", content: "Welcome to QPMatrix!" },
  ];
}

export default function Home() {
  return <Button variant="contained">Hello world</Button>;
}
