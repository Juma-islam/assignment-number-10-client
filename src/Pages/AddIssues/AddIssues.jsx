import { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const AddIssues = () => {
    const {user} = use(AuthContext)
    const handleSubmit = (e)=> {
        e.preventDefault();

        if(!user){
          toast.error("please log in first");
          return;
        }

        const formData = {
            title: e.target.title.value,
            category: e.target.category.value,
            location: e.target.location.value,
            description: e.target.description.value,
            image: e.target.image.value,
            amount: Number(e.target.amount.value),
            status: "ongoing",
            email: user.email,
            date: new Date(),
            
        }
        fetch('http://localhost:5000/issues', {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success("Issue Added Successfully!")
          }
        })
        .catch(err => {
          toast.error("Failed to add issue")
          console.log(err)
        })
console.log(formData)
    }
  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">Issues</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Garbage">Garbage</option>
              <option value="Illegal Construction">Illegal Construction</option>
              <option value="Broken Public Property">Broken Public Property</option>
              <option value="Road Damage">Road Damage</option>
            </select>
          </div>
          {/* location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Location"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {/* amount  */}
            <div>
            <label className="label font-medium">Suggested Fix Budget</label>
            <input
              type="number"
              name="amount"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Amount"
            />
          </div>
          {/* email  */}
          <div>
            <label className="label font-medium">Reporter Email</label>
            <input
              type="Email"
              name="email"
              readOnly
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              defaultValue={user.email}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIssues;
