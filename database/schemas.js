// MongoDB schema for User
const user = {
  _id: ObjectId,
  id: String,
  name: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  image: String,
  games: [{ type: ObjectId, ref: 'Game' }],
  accounts: [{ type: ObjectId, ref: 'Account' }],
  sessions: [{ type: ObjectId, ref: 'Session' }]
}

// MongoDB schema for Account
const account = {
  _id: ObjectId,
  id: String,
  userId: String,
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String
}

// MongoDB schema for Session
const session = {
  _id: ObjectId,
  id: String,
  sessionToken: { type: String, unique: true },
  userId: String,
  expires: Date
}

// MongoDB schema for Game
const game = {
  _id: ObjectId,
  id: String,
  userId: String,
  questions: [{ type: ObjectId, ref: 'Question' }],
  timeStarted: Date,
  topic: String,
  timeEnded: Date,
  gameType: String // Storing enum as string
}

// MongoDB schema for Question
const question = 
{
  _id: ObjectId,
  id: String,
  question: String,
  answer: String,
  gameId: String,
  options: { type: Mixed }, // Using Mixed type for flexible schema
  percentageCorrect: Number,
  isCorrect: Boolean,
  questionType: String, // Storing enum as string
  userAnswer: String
}
