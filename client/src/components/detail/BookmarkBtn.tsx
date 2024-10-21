import { bookmark, bookmarkActive } from "@/assets";

export function BookmarkBtn ({ bookmarked, setBookmarked }: { bookmarked: boolean, setBookmarked: (value: boolean) => void }) {
  return (
    <button onClick={() => setBookmarked(!bookmarked)}>
      {bookmarked ? (
        <img src={bookmarkActive} alt="Guardar" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
      ) : (
        <img src={bookmark} alt="Guardar" className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
      )}
    </button>
  );
}
