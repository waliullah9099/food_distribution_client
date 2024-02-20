import { AuthContext } from "@/Provider/AuthProvider";
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
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const form = useForm();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User login successfully....");
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     const loggedUser = result.user;
    //     console.log(loggedUser);
    //     toast.success("user login successfully");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };
  return (
    <Container>
      <h1 className="text-secondary text-4xl font-semibold text-center my-6 md:my-12">
        Login <span className="text-primary">Here</span>
      </h1>
      <div className="w-1/3 px-5 py-8 rounded-md shadow-md border mx-auto mb-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              Login
            </Button>
          </form>
          <p className=" pt-2 ">
            Have no account?
            <span className="text-sm text-secondary">
              {" "}
              <NavLink to="/register">To create new</NavLink>
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
