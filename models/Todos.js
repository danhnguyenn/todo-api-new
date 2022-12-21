const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const schema = new mongoose.Schema(
	{
		content: String,
		isCompleted: Boolean
	},
	{
		timestamps: true
	}
);

schema.plugin(mongooseDelete, {
	overrideMethods: 'all',
	deletedAt: true
});

schema.virtual('id').get(function () {
	return this._id.toHexString();
});

schema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.deleted;
		delete ret.createdAt;
		delete ret.updatedAt;
	}
});

const Todo = mongoose.model('Todo', schema);
module.exports = { Todo };
