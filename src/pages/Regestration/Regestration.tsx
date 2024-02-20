import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const Regestration = () => {
  const form = useForm();

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const onSubmit = (data: FieldValues) => {
    const email = data.email;
    const userName = data.username;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        const loggesUser = result.user;
        // console.log(loggesUser);
        toast.success("Create User successfully....");
        updatedUserData(loggesUser, userName);
        navigate(from, { replace: true });
      })
      .then((err) => console.error(err));
  };

  const updatedUserData = (user, name) => {
    // console.log("user", user);

    updateProfile(user, { displayName: name })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1 className="text-secondary text-4xl font-semibold text-center my-6 md:my-12">
        Regestration <span className="text-primary">Here</span>
      </h1>
      <div className="w-1/3 px-5 py-8 rounded-md shadow-md border mx-auto mb-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full text-lg" type="submit">
              Regestration
            </Button>
          </form>
          <p className=" pt-2 ">
            Have an account?{" "}
            <span className="text-sm text-secondary">
              <NavLink to="/login">To login now</NavLink>
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Regestration;
