import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateVolunteerMutation } from "@/redux/feathers/volunteer/volunteerApi";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "antd";

const CreateVolunteer = () => {
  const [addVolunteer, { isSuccess }] = useCreateVolunteerMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // addVolunteer(data);
    if (isSuccess) {
      toast.message(
        `Go ${(
          <NavLink to={"/aboutus"}>About Us</NavLink>
        )} page for show details`
      );
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
          <div className="space-y-2">
            <label className="text-xl">Name</label>
            <Input id="name" placeholder="Name" {...register("name")} />
            {/* {errors.name && (
              <span className="text-sm text-red-400">Name is required</span>
            )} */}
          </div>

          <div className="space-y-2">
            <label className="text-xl">Email</label>
            <Input id="email" placeholder="Email" {...register("email")} />
            {/* {errors.email && (
              <span className="text-sm text-red-400">Email is required</span>
            )} */}
          </div>

          <div className="space-y-2 ">
            <label className="text-xl">Phone Number</label>
            <Input
              id="number"
              placeholder="Phone Number"
              {...register("number")}
            />
            {/* {errors.phone && (
              <span className="text-sm text-red-400">
                Phone Number is required
              </span>
            )} */}
          </div>

          <div className="space-y-2">
            <label className="text-xl">Location</label>
            <Input
              id="location"
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
