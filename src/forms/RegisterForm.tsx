import { useForm } from "react-hook-form";
import {
  registerSchema,
  type registerSchemaType,
} from "../schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: registerSchemaType) => {
    try {
      const response = await api.post("/auth/register", data);
      console.log(response);
      toast.success("User successfully registered!.");
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      toast.error("User Registering failed.");
    }
  };

  return (
    <div className="min-w-[300px] md:w-4/6 mx-auto p-4 border dark:border-gray-800 rounded-md shadow text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-lg text-center mt-3 font-bold">
        Register To ACHORMIS
      </h2>
      <p className="text-sm text-center">
        Please enter your details to register.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div>
          <div className="flex sm:flex-col md:flex-row gap-2">
            <div>
              <label className="text-sm font-medium" htmlFor="firstName">
                First Name:
              </label>
              <input
                type="text"
                className="w-full rounded"
                placeholder="First Name"
                {...register("firstName")}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="lastName">
                Last Name:
              </label>
              <input
                type="text"
                className="w-full rounded text-gray-700"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="mobile">
              Mobile:
            </label>
            <input
              type="tel"
              className="w-full rounded text-gray-700"
              placeholder="Mobile"
              {...register("mobile")}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.mobile?.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              className="w-full rounded text-gray-700"
              placeholder="Email"
              {...register("email")}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              className="w-full rounded text-gray-700"
              placeholder="Password"
              {...register("password")}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              type="password"
              className="w-full rounded text-gray-700"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-1">
          <label className="text-sm font-medium" htmlFor="adminPassword">
            Admin Password:
          </label>
          <input
            type="password"
            className="w-full rounded text-gray-700"
            placeholder="Admin Password"
            {...register("adminPassword")}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.adminPassword?.message}
            </p>
          )}
        </div>
        <div className="my-1 flex flex-col gap-1">
          <button
            type="submit"
            className="w-full bg-blue-800 rounded flex-4/6 p-2 hover:bg-blue-600"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
          <button
            type="button"
            className="w-full bg-gray-800 rounded p-2 flex-2/6 hover:bg-gray-600"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
