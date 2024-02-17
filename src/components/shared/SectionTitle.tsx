import { TSectionTitle } from "@/types/sectionTitle.type";

const SectionTitle = ({ fTitle, lTitle, description }: TSectionTitle) => {
  return (
    <div
      data-aos="fade-up"
      className="w-[60%] pb-12 mx-auto flex flex-col justify-center items-center gap-4"
    >
      <h1 className="font-bold text-4xl text-secondary ">
        <span className="text-primary">{fTitle}</span> {lTitle}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
