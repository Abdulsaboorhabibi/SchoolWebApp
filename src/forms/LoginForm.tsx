import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { loginSchema, type LoginSchemaType } from "../schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-Auth";
import axios from "../api/axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (inputData: LoginSchemaType) => {
    try {
      const res = await axios.post("/auth/login", inputData, {
        withCredentials: true,
      });
      if (res) {
        auth?.setToken(res.data.accessToken);
        console.log("From login form:", res.data.accessToken);
        navigate(from, { replace: true });
      }
    } catch (error: any) {
      const message = error.message;

      if (message.includes("user")) {
        setError("email", { type: "server", message });
      } else if (message.includes("Incorrect password")) {
        setError("password", { type: "server", message });
      } else {
        // global / unknown error
        toast.error(message);
      }
    }
  };

  return (
    <div className="min-w-[300px] mx-auto p-4 border dark:border-zinc-800 rounded-md shadow text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-800">
      <div>
        <h2 className="text-center text-3xl font-bold mt-4 text-shadow-2xs">
          ACHOR MIS
        </h2>
        <p className="text-sm/7 text-center font-semibold">
          Please! enter your credentials.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          className="w-full bg-gray-300 text-gray-600 p-2 rounded hover:bg-gray-700 hover:text-white hover:cursor-pointer"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
