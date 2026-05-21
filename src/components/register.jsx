
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";  
import { registerSchema } from "./register.schema";

export default function RegisterForm() {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log('Registering with:', formData);
    //   // Handle auth logic here
    // };
//   });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
        name: "",
        email: "",
        password: "",
    }
  });

const onSubmit = (data) =>{
    console.log(data);
}

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <h2>Welcome to the Register Page</h2>
          <p>Please enter your details to register</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {/* Name Input */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              {...register("name")}
              //   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              type="text"
              id="name"
              placeholder="John Doe"
              
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="name@example.com"
            //   value={formData.email}
            //   onChange={(e) =>
            //     setFormData({ ...formData, email: e.target.value })
            //   }
              
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="input-group">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-password">
                Forgot?
              </a>
            </div>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="••••••••"
            //   value={formData.password}
            //   onChange={(e) =>
            //     setFormData({ ...formData, password: e.target.value })
            //   }
              
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
