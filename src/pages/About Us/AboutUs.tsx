import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetAllVolunteerQuery } from "@/redux/feathers/volunteer/volunteerApi";
import { TVolunteer } from "@/types";

const AboutUs = () => {
  const { data: volunteers } = useGetAllVolunteerQuery(undefined);
  // console.log(volunteers);

  return (
    <Container className="my-12">
      <SectionTitle fTitle=" Our" lTitle="Volunteers" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {volunteers?.map((volunteer: TVolunteer) => (
          <div
            key={volunteer._id}
            className="border shadow-sm rounded-md text-center py-4 hover:shadow-md hover:scale-[.90] space-y-[5px] transition-all"
          >
            <h1 className="text-lg font-semibold pb-1">
              <span className="text-xl">Name: </span> {volunteer.name}
            </h1>
            <h2>
              <span className="text-xl">Email: </span> {volunteer.email}
            </h2>
            <p>
              <span className="text-xl">Phone: </span> {volunteer.phone}
            </p>
            {volunteer.location && (
              <p>
                <span className="text-xl">Location: </span>
                {volunteer.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
