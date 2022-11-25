const Author = ({ author }) => {
  return (
    <div className="relative mt-7 bg-white/60 rounded-xl p-8 pt-[70px] text-center">
      <img
        src={author.photo.url}
        alt={author.name}
        className="absolute -top-8 left-1/2 w-24 -translate-x-1/2 rounded-full object-cover"
      />
      <h4 className="text-xl font-bold">{author.name}</h4>
      <p className="text-neutral-600">{author.bio}</p>
    </div>
  );
};

export default Author;
