import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff, FiEye } from 'react-icons/fi';

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    event.preventDefault();
    console.log(formData);
    setIsLoading(true);
    setError('jbbv');
  };
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="">Sign In</h1>
          {error && <div className="">{error}</div>}
          <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4">
              {/* ----   Email  ---- */}
              <input
                {...register('email', {
                  required: 'This feild is required *',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please enter a valid e-mail address',
                  },
                })}
                type="email"
                placeholder="Email-id"
                className=""
              />
              {errors.email && <small className="">{errors.email.message} </small>}
            </div>

            {/* ----   Password  ---- */}
            <div className="mb-4">
              <div className="">
                <input
                  {...register('password', {
                    required: 'This feild is required *',
                    pattern: {
                      value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message:
                        ' password requirements: (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)',
                    },
                  })}
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  className=" outline-none "
                />
                <div
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="cursor-pointer text-lg text-gray5"
                >
                  {passwordVisible ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
              {errors.password && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.password.message}{' '}
                </small>
              )}
            </div>
            <button type="submit" disabled={isLoading} className="">
              <div className="text-sm">{isLoading ? 'Signing In' : 'Sign In'}</div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
