import { Model } from "mongoose";

const CrudRepository = {
  async create(model: Model<any>, data: {}) {
    try {
      const result = await model.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async destroy(model: Model<any>, id: String) {
    try {
      const response = await model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async get(model: Model<any>, id: String) {
    try {
      const response = await model.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async findBy(model: Model<any>, data: {}) {
    try {
      // console.log("data", data);
      const response = await model.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getAll(model: Model<any>, filterData: {}) {
    try {
      const response = await model.find(filterData);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getStudentsByFilter(model: Model<any>, filterData: String) {
    try {
      const response = await model.find({ filterData });
      return response;
    } catch (error) {
      throw error;
    }
  },
  async update(model: Model<any>, ID: String, data: {}) {
    // console.log(data)
    try {
      const response = await model.findOneAndUpdate({ ID }, data, {
        new: true,
      });
      // console.log("in repo res:", response);
      return response;
    } catch (error) {
      return error;
    }
  },

  async uploadExcel(model: Model<any>, data: {}) {
    // console.log("in repo: ", data);
    try {
      // console.log(data)
      const response = await model.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async contains(model: Model<any>, ID: String) {
    try {
      const existingDocument = await model.findOne({ ID });
      return existingDocument
    } catch (error) {
      return false;
    }
  },
  async containsDue(model: Model<any>, BankReferenceNo: String) {
    try {
      const existingDocument = await model.findOne({ BankReferenceNo });
      return existingDocument
    } catch (error) {
      return false;
    }
  },
  async updateDue(model: Model<any>, BankReferenceNo: String, data: {}) {
    try {
      const response = await model.findOneAndUpdate({ BankReferenceNo }, data, {
        new: true,
      });
      // console.log("in repo res:", response);
      return response;
    } catch (error) {
      return error;
    }
  }

};

export default CrudRepository;
