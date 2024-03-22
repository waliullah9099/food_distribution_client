import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateVolunteerMutation } from "@/redux/feathers/volunteer/volunteerApi";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CreateVolunteer = () => {
  const [addVolunteer, { isSuccess }] = useCreateVolunteerMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    addVolunteer(data);
    if (isSuccess) {
      toast.success("Volunter has been created");
      reset();
    }
  };

  return (
    <div className="p-12">
      <form
        className="space-y-5 lg:w-3/4 mx-auto border shadow-sm  rounded-sm p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-secondary text-4xl font-semibold text-center mb-3">
          Create <span className="text-primary">Volunteer</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-xl">Name</label>
            <input
              className="border py-2 px-3 rounded-md shadow-sm mt-2"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.phone && <span>Name is required</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-xl">Email</label>
            <input
              className="border py-2 px-3 rounded-md shadow-sm mt-2"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.phone && <span>Email is required</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-xl">Phone Number</label>
            <input
              className="border py-2 px-3 rounded-md shadow-sm mt-2"
              type="number"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>Phone Number is required</span>}
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Location</label>
            <input
              className="border py-2 px-3 rounded-md shadow-sm mt-2"
              type="text"
              placeholder="Location"
              {...register("location")}
            />
          </div>
        </div>
        <Button>Create Volunteer</Button>
      </form>
    </div>
  );
};

export default CreateVolunteer;
