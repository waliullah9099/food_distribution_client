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
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              <NavLink to="/regestration">To create new</NavLink>
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
