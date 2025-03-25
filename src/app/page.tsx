import { GalleryItem } from "@/components/molecules/GalleryItem";

export default function Home() {
  return (
    <main className="p-10">
      <GalleryItem
        title="Cyber Kitty 001"
        image="/images/cyber-kitty.png"
        price="0.42"
      />
    </main>
  );
}
