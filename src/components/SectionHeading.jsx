/* eslint-disable react/prop-types */
export default function SectionHeading({ subHeading, heading }) {
  return (
    <div className="text-center space-y-2">
      <p className="text-[#D99904] italic text-lg">{subHeading}</p>
      <div className="border border-b-2"></div>
      <h1 className="text-3xl">{heading}</h1>
      <div className="border border-b-2"></div>
    </div>
  );
}
