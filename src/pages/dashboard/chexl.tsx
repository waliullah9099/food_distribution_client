import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreatePostMutation } from "@/redux/feathers/posts/postApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Check = () => {
  const [addPost, { isSuccess }] = useCreatePostMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { name, email, phone, location } = data;
    const newItem = {
      name,
      email,
      phone,
      location,
    };
    console.log(newItem);
    addPost(newItem);
    if (isSuccess) {
      toast.success("Volunteer has been created");
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
            <Input
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Name is required</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xl">Email</label>
            <Input
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Email is required</span>
            )}
          </div>

          <div className="space-y-2 ">
            <label className="text-xl">Phone Number</label>
            <Input
              id="phone"
              placeholder="Phone Number"
              {...register("phone")}
            />
            {errors.items && (
              <span className="text-sm text-red-400">
                Phone Number is required
              </span>
            )}
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

export default Check;
