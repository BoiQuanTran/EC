import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        saleOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'SaleOrder', require: true },
        bankName: { type: string, trim: true, unique: true},
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export default mongoose.model('Bank', courseSchema);
