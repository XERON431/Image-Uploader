import mongoose from "mongoose";

const {Schema}=mongoose;
const { ObjectId } = mongoose.Schema;
const userSchema =new Schema(
    {
        name:{
            type: String,
            trim:true,
            required:true,
        },
        email:{
            type: String,
            trim:true,
            required:true,
            unique:true
        },
        password:{
            type: String,
            required:true,
            min:6,
            max:64
        },
        picture:{
            type: String,
             default:'/avatar.png',
        },

        role:{
            type : [String],
            default: ["Instructor"],
            enum: ["Subscriber","Instructor","Admin"],
        },
    //    payment data
    stripe_account_id: {
        type: String, // Specify the type as String
        default: "", // Define a default value if needed
      },
      stripe_seller: {},
      stripeSession: {},
      passwordResetCode :{
          type: String,
          default: "",
      },
      courses: [{ type: ObjectId, ref:"Course"}],

    },
   
    {timestamps:true}
);

const User = mongoose.model("User", userSchema);
export default User;