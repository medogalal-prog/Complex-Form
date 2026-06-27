import { useState } from "react";
import Button from "./Button";

function HomePage() {
  const [errors, setErrors] = useState({});
  const genderOptions = [
    {
      value: "Desactive",
      label: "Desactive",
    },
    {
      value: "active",
      label: "active",
    },
  ];
  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Street: "",
    Email: "",
    Status: "",
    State: "",
    Contact1: "",
    Contact2: "",
    City: "",
    Zip: "",
  });
  function handelSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const newErrors = {};

    if (!formData.Firstname.trim()) {
      newErrors.Firstname = "First Name is required";
    }

    if (!formData.Lastname.trim()) {
      newErrors.Lastname = "Last Name is required";
    }

    if (!formData.Street.trim()) {
      newErrors.Street = "Street is required";
    }

    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    }

    if (!formData.Status.trim()) {
      newErrors.Status = "Status is required";
    }
    if (!formData.State.trim()) {
      newErrors.State = "State is required";
    }
    if (!formData.Contact1.trim()) {
      newErrors.Contact1 = "Contact #1 is required";
    }
    if (!formData.Contact2.trim()) {
      newErrors.Contact2 = "Contact #2 is required";
    }
    if (!formData.City.trim()) {
      newErrors.City = "City is required";
    }
    if (!formData.Zip.trim()) {
      newErrors.Zip = "Zip is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  }
  return (
    <section className="form-validation bg-[#a2d1f3]">
      <div className="container flex items-center justify-center py-35">
        <form
          className="max-w-7xl mt-3 border border-gray-300 rounded-2xl px-6 py-8 bg-white relative"
          onSubmit={handelSubmit}
        >
          <h1 className="text-xl font-bold mb-5">Employee Information</h1>
          <div className="form-inputs grid grid-cols-3 gap-4">
            <div className="input-group mb-4">
              <label
                className="inline-block mb-1 capitalize"
                htmlFor="firstName"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="Firstname"
                placeholder="First Name"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              />
              {errors.Firstname && (
                <p className="text-red-500 text-sm mt-1">{errors.Firstname}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label
                htmlFor="lastName"
                className="inline-block mb-1 capitalize"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="Lastname"
                placeholder="Last Name"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              />
              {errors.Lastname && (
                <p className="text-red-500 text-sm mt-1">{errors.Lastname}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label htmlFor="Street" className="inline-block mb-1 capitalize">
                Street <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="Street"
                id="Street"
                placeholder="Street"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              />
              {errors.Street && (
                <p className="text-red-500 text-sm mt-1">{errors.Street}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label
                htmlFor="EmailAddress"
                className="inline-block mb-1 capitalize"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="EmailAddress"
                name="Email"
                placeholder="Email Address"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label htmlFor="Status" className="inline-block mb-1 capitalize">
                Status <span className="text-red-600">*</span>
              </label>
              <select
                name="Status"
                id="Status"
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              >
                <option hidden>Select Status</option>
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.Status && (
                <p className="text-red-500 text-sm mt-1">{errors.Status}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label htmlFor="State" className="inline-block mb-1 capitalize">
                State <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="State"
                placeholder="State"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                name="State"
                onChange={handelChange}
              />
              {errors.State && (
                <p className="text-red-500 text-sm mt-1">{errors.State}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label
                htmlFor="Contact1"
                className="inline-block mb-1 capitalize"
              >
                Contact #1 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="Contact1"
                name="Contact1"
                placeholder="Contact #1"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              />
              {errors.Contact1 && (
                <p className="text-red-500 text-sm mt-1">{errors.Contact1}</p>
              )}
            </div>
            <div className="input-group mb-4">
              <label
                htmlFor="Contact2"
                className="inline-block mb-1 capitalize"
              >
                Contact #2 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="Contact2"
                id="Contact2"
                placeholder="Contact #2"
                
                className="w-full border-gray-200 border h-10 rounded-md px-4 "
                onChange={handelChange}
              />
              {errors.Contact2 && (
                <p className="text-red-500 text-sm mt-1">{errors.Contact2}</p>
              )}
            </div>
            <div className="input-group mb-4  grid grid-cols-2 gap-2">
              <div className="input-group1">
                <label htmlFor="City" className="inline-block mb-1 capitalize">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="City"
                  id="City"
                  placeholder="City"
                  
                  className="w-full border-gray-200 border h-10 rounded-md px-4 "
                  onChange={handelChange}
                />
                {errors.City && (
                <p className="text-red-500 text-sm mt-1">{errors.City}</p>
              )}
              </div>
              <div className="input-group2">
                <label htmlFor="Zip" className="inline-block mb-1 capitalize">
                  Zip <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="Zip"
                  placeholder="Zip"
                  
                  className="w-full border-gray-200 border h-10 rounded-md px-4 "
                  name="Zip"
                  onChange={handelChange}
                />
                {errors.Zip && (
                <p className="text-red-500 text-sm mt-1">{errors.Zip}</p>
              )}
              </div>
            </div>
            <p className="col-span-full text-sm md:text-base text-gray-500 font-medium leading-6 mt-2 mb-12">
              In order to process registration provide the following
              information. All fields marked with an asterisk (*) are required.
            </p>
            <Button
              variant="Reset"
              className="w-fit mt-10 mb-3 absolute left-5 bottom-3 "
            >
              Save Employee
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomePage;
