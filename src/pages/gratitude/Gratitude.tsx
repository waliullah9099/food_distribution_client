import { Modal } from "antd";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateGratitudeMutation,
  useGetAllGratitudeQuery,
} from "@/redux/feathers/gratitude/gratitudeApi";
import ALlCOmment from "./ALlCOmment";

const Gratitude = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addComment, { isSuccess }] = useCreateGratitudeMutation();
  const { data: comments, isFetching } = useGetAllGratitudeQuery(undefined);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
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
          const { title } = data;
          const newItem = {
            title,
            image: imgURL,
          };
          console.log(newItem);
          addComment(newItem);
          reset();
          setIsModalOpen(false);
          if (isSuccess) {
            toast.success("Comment has been created");
          }
        }
      });
  };

  return (
    <Container className="my-12">
      <div className="text-center">
        <Button
          onClick={showModal}
          className="hover:scale-95 bg-primary text-white hover:bg-secondary hover:text-black text-lg py-6 px-7"
        >
          Comment Here
        </Button>
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <form
            className="space-y-5 lg:w-3/4 mx-auto border shadow-sm  rounded-sm p-4 lg:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-secondary text-xl font-medium text-center mb-3">
              Post For <span className="text-primary">Help </span>
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
                  <span className="text-sm text-red-400">
                    Title is required
                  </span>
                )}
              </div>
              <div className="space-y-2 ">
                <label className="text-xl">Image</label>
                <Input id="image" type="file" {...register("image")} />
              </div>
            </div>

            <Button>Add Comment </Button>
          </form>
        </Modal>

        <ALlCOmment comments={comments} isFetching={isFetching} />
      </div>
    </Container>
  );
};

export default Gratitude;
