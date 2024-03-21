import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateTestimonialMutation } from "@/redux/feathers/testimonial/testimonialApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";

const CreateTestmonial = () => {
  const [addTestimonial, { isSuccess }] = useCreateTestimonialMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const image_hosting_url =
    "https://api.imgbb.com/1/upload?key=00af13fcf3746f5d1b5cb9448a7a33df";

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        if (imageRes.success) {
          const imgURL = imageRes.data.display_url;
          const { title, description } = data;
          const newItem = {
            title,
            description,
            image: imgURL,
          };
          console.log(newItem);
          addTestimonial(newItem);
          if (isSuccess) {
            toast.success("testmonial has been created");
          }
        }
      });
  };

  return (
    <div className="p-12">
      <form
        className="space-y-5 lg:w-3/4 mx-auto border shadow-sm  rounded-sm p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-secondary text-4xl font-semibold text-center mb-3">
          Create <span className="text-primary">Testimonial </span>
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-xl">Title</label>
            <Input
              id="title"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Title is required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Image</label>
            <Input id="image" type="file" {...register("image")} />
          </div>
        </div>
        <div className="space-y-2 ">
          <label className="text-xl">Description</label>
          <Textarea id="description" {...register("description")} />
        </div>

        <Button>Create Testimonial </Button>
      </form>
    </div>
  );
};

export default CreateTestmonial;
