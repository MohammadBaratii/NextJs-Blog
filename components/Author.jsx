import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative mt-7 bg-white/60 rounded-xl p-8 pt-[70px] text-center">
      <Image
        src={author.photo.url}
        alt={author.name}
        width="100"
        height="100"
        className="absolute -top-8 left-1/2 w-24 -translate-x-1/2 rounded-full object-cover"
      />
      <h4 className="text-xl font-bold">{author.name}</h4>
      <p className="text-neutral-600">{author.bio}</p>
    </div>
  );
};

export default Author;
