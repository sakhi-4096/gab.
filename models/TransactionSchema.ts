import { Schema, model } from 'mongoose';

// Define schema for transactions
const transactionSchema = new Schema({
  reference: {
    type: String,
    required: true,
  },
  amount: {
    type: String, // Storing amount as string to avoid precision issues
    required: true,
  },
  buyer: {
    type: String,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
});

// Create model from schema
const Transaction = model('Transaction', transactionSchema);

export default Transaction;
