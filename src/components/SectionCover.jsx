/* eslint-disable react/prop-types */

export default function SectionCover({ background, content }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-[400px] bg-center bg-cover bg-no-repeat flex justify-center items-center"
    >
      <div className="w-2/3 bg-black bg-opacity-40 p-20 text-center text-white">
        <h1 className="text-3xl cinzel-font mt-4">{content.heading}</h1>
        <p>{content.description}</p>
      </div>
    </div>
  );
}
