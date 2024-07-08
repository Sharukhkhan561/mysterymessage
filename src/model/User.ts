
import mongoose ,{Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date
}

const messageSchema : Schema<Message>= new Schema({
    content :{
        type: String,
        required : true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    userName: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerify: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema : Schema<User> = new Schema({
    userName :{
        type: String,
        required : [true, "Username is required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required : [true, "Email is required"],
        unique: true,
        match:[/.+\@.+\..+/,"Please use a valid Email Address"]
        
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode:{
        type: String,
        required: [true, "verifyCode is required"],
    },
    verifyCodeExpiry:{
        type: Date,
        required: [true, "verifyCodeExpiry is required"],
    },
    isVerify:{
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    messages:[messageSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User>)||(mongoose.model<User>("User", UserSchema))