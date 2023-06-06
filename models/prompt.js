const { Schema, models, model } = require("mongoose");

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", //OnetoMany realationship like one user can create many prompts
  },
  prompt: {
    type: String,
    require: [true, "Prompt is Required"],
  },
  tag: {
    type: String,
    require: [true, "Tag is Required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
